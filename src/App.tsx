/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ClientSatisfaction } from './components/ClientSatisfaction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoUploadModal, PhotoAdjustments } from './components/PhotoUploadModal';
import { HireMeModal } from './components/HireMeModal';
import { defaultPortrait } from './data/portfolioData';

const STORAGE_KEY_PHOTO = 'ppw_portrait_photo_v3';
const STORAGE_KEY_ADJUSTMENTS = 'ppw_portrait_adjustments_v3';

export default function App() {
  const [portraitUrl, setPortraitUrl] = useState<string>(defaultPortrait);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [adjustments, setAdjustments] = useState<PhotoAdjustments>({
    zoom: 1,
    offsetY: 0,
    glowIntensity: 'medium',
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load persisted photo & adjustments on mount
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem(STORAGE_KEY_PHOTO);
      const savedAdj = localStorage.getItem(STORAGE_KEY_ADJUSTMENTS);

      if (savedPhoto) {
        setPortraitUrl(savedPhoto);
        setIsCustomPhoto(true);
      }

      if (savedAdj) {
        setAdjustments(JSON.parse(savedAdj));
      }
    } catch (err) {
      console.warn('Could not read from localStorage:', err);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSavePhoto = (newPhotoUrl: string, newAdjustments?: PhotoAdjustments) => {
    try {
      localStorage.setItem(STORAGE_KEY_PHOTO, newPhotoUrl);
      if (newAdjustments) {
        localStorage.setItem(STORAGE_KEY_ADJUSTMENTS, JSON.stringify(newAdjustments));
        setAdjustments(newAdjustments);
      }
      setPortraitUrl(newPhotoUrl);
      setIsCustomPhoto(true);
      showToast('Your personal photograph has been updated and applied to the hero section!');
    } catch (err) {
      console.error('Error saving photo to localStorage:', err);
      // Still apply to memory
      setPortraitUrl(newPhotoUrl);
      if (newAdjustments) setAdjustments(newAdjustments);
      setIsCustomPhoto(true);
      showToast('Photo applied to active session!');
    }
  };

  const handleResetPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_PHOTO);
      localStorage.removeItem(STORAGE_KEY_ADJUSTMENTS);
    } catch (err) {
      console.warn('Error resetting localStorage:', err);
    }
    setPortraitUrl(defaultPortrait);
    setIsCustomPhoto(false);
    setAdjustments({
      zoom: 1,
      offsetY: 0,
      glowIntensity: 'medium',
    });
    showToast('Reset to default studio portrait.');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#102A56] font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-[#0EA5E9]/20 selection:text-[#102A56]">
      {/* Top Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#102A56] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-sky-400/40 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar onOpenHireMe={() => setIsHireMeModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          portraitUrl={portraitUrl}
          adjustments={adjustments}
          isCustomPhoto={isCustomPhoto}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          onOpenHireMe={() => setIsHireMeModalOpen(true)}
        />

        {/* About Section */}
        <About onOpenHireMe={() => setIsHireMeModalOpen(true)} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience onOpenHireMe={() => setIsHireMeModalOpen(true)} />

        {/* Featured Projects Section */}
        <Projects onOpenHireMe={() => setIsHireMeModalOpen(true)} />

        {/* Client Satisfaction Section */}
        <ClientSatisfaction onOpenHireMe={() => setIsHireMeModalOpen(true)} />

        {/* Contact Section */}
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Upload & Framing Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={portraitUrl}
        defaultPhoto={defaultPortrait}
        adjustments={adjustments}
        onSavePhoto={handleSavePhoto}
        onResetPhoto={handleResetPhoto}
      />

      {/* Hire Me Project Consultation Modal */}
      <HireMeModal
        isOpen={isHireMeModalOpen}
        onClose={() => setIsHireMeModalOpen(false)}
      />
    </div>
  );
}
