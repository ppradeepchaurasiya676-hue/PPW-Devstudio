import React, { useState, useRef } from 'react';
import { X, Upload, RotateCcw, Check, Sparkles, Image as ImageIcon, Sliders, AlertCircle } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  defaultPhoto: string;
  onSavePhoto: (newPhotoUrl: string, settings?: PhotoAdjustments) => void;
  onResetPhoto: () => void;
  adjustments: PhotoAdjustments;
}

export interface PhotoAdjustments {
  zoom: number; // 1 to 2.5
  offsetY: number; // -50 to 50
  glowIntensity: 'soft' | 'medium' | 'high';
}

// Helper to safely downscale image via HTML5 Canvas to prevent LocalStorage QuotaExceededError
const optimizeImageForStorage = (dataUrl: string, maxDimension = 800): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(dataUrl);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      // Export as high quality JPEG
      resolve(canvas.toDataURL('image/jpeg', 0.88));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
};

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  defaultPhoto,
  onSavePhoto,
  onResetPhoto,
  adjustments: initialAdjustments,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentPhoto);
  const [zoom, setZoom] = useState<number>(initialAdjustments.zoom || 1);
  const [offsetY, setOffsetY] = useState<number>(initialAdjustments.offsetY || 0);
  const [glowIntensity, setGlowIntensity] = useState<'soft' | 'medium' | 'high'>(
    initialAdjustments.glowIntensity || 'medium'
  );
  const [fileName, setFileName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = async (file: File) => {
    setErrorMessage(null);

    // Validate MIME type
    const validMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!validMimes.includes(file.type)) {
      setErrorMessage('Please select a valid image file (JPG, PNG, or WebP).');
      return;
    }

    // Validate file size limit (10MB max to prevent memory spikes)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size exceeds 10MB. Please select an image under 10MB.');
      return;
    }

    setFileName(file.name);
    setIsProcessing(true);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (typeof e.target?.result === 'string') {
          // Downsample high-res photo for safe client-side persistence
          const optimized = await optimizeImageForStorage(e.target.result);
          setPreviewUrl(optimized);
          setIsProcessing(false);
        }
      };
      reader.onerror = () => {
        setErrorMessage('Failed to read image file. Please try again.');
        setIsProcessing(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setErrorMessage('An unexpected error occurred processing your image.');
      setIsProcessing(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSave = () => {
    setErrorMessage(null);
    try {
      onSavePhoto(previewUrl, { zoom, offsetY, glowIntensity });
      onClose();
    } catch (err) {
      setErrorMessage('Could not save photo to browser storage. It may exceed local quota.');
    }
  };

  const handleReset = () => {
    onResetPhoto();
    setPreviewUrl(defaultPhoto);
    setZoom(1);
    setOffsetY(0);
    setGlowIntensity('medium');
    setFileName('');
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0EA5E9] flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#102A56]">Upload Your Personal Photograph</h3>
              <p className="text-xs text-slate-500">
                Preserve your real face, identity & professional studio appearance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Error Banner */}
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Live Portrait Preview with Soft Blue Glow */}
          <div className="flex flex-col items-center justify-center py-4 bg-slate-50/80 rounded-xl border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Hero Section Preview
            </span>
            <div className="relative w-44 h-44 sm:w-52 sm:h-52">
              {/* Concentric Glow Backdrop */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#0EA5E9]/25 via-[#102A56]/15 to-[#FBBF24]/20 blur-xl transition-all duration-300 ${
                  glowIntensity === 'high'
                    ? 'scale-110 opacity-90'
                    : glowIntensity === 'soft'
                    ? 'scale-100 opacity-50'
                    : 'scale-105 opacity-70'
                }`}
              />

              {/* Circular Border Ring */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-[#0EA5E9] via-white to-slate-200 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={previewUrl}
                    alt="Pradeep Portrait Preview"
                    className="w-full h-full object-cover object-top transition-transform duration-200"
                    style={{
                      transform: `scale(${zoom}) translateY(${offsetY}px)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Drag & Drop Upload Zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-[#0EA5E9] bg-sky-50/70'
                : 'border-slate-300 hover:border-[#0EA5E9] hover:bg-slate-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/jpg"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
            />
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0EA5E9] flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                {isProcessing
                  ? 'Optimizing image...'
                  : fileName
                  ? fileName
                  : 'Click to select your photo or drag & drop here'}
              </p>
              <p className="text-xs text-slate-500">
                Supports JPG, PNG, WebP · Automatically optimized for fast, safe local caching
              </p>
            </div>
          </div>

          {/* Portrait Fit & Framing Controls */}
          <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Sliders className="w-4 h-4 text-[#0EA5E9]" />
              <span>Framing & Fit Adjustments</span>
            </div>

            {/* Zoom Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Scale / Zoom</span>
                <span className="font-mono text-slate-900">{zoom.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.2"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0EA5E9]"
              />
            </div>

            {/* Vertical Offset Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Vertical Framing Offset</span>
                <span className="font-mono text-slate-900">{offsetY}px</span>
              </div>
              <input
                type="range"
                min="-40"
                max="40"
                step="2"
                value={offsetY}
                onChange={(e) => setOffsetY(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0EA5E9]"
              />
            </div>

            {/* Glow Intensity Selection */}
            <div className="space-y-1.5">
              <span className="text-xs text-slate-600">Backdrop Glow Intensity</span>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {(['soft', 'medium', 'high'] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setGlowIntensity(level)}
                    className={`py-1.5 text-xs font-medium rounded-lg capitalize border transition-all ${
                      glowIntensity === level
                        ? 'border-[#0EA5E9] bg-sky-50 text-[#0EA5E9] font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-sky-50 text-sky-800 text-xs">
            <Sparkles className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
            <p>
              Your photo is stored securely in your browser's private local storage. No server transmission or third-party image tracking occurs.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isProcessing}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#102A56] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <Check className="w-4 h-4" />
              <span>Apply to Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
