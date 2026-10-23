# PPW DevStudio — Personal Developer Portfolio

> **"Building Digital Experiences. Creating What's Next."**  
> Official portfolio of **Pradeep** at **PPW DevStudio** (Web Developer | AI Enthusiast | Data Analytics).

---

## 1. Project Overview

This repository contains the production-ready source code for **PPW DevStudio**, built with modern React 19, TypeScript, Vite, and Tailwind CSS.

### Key Features
- **Hero Showcase**: Custom monogram logo, introduction, and high-resolution portrait with customizable framing, soft electric blue glow (`#0EA5E9`), and local storage persistence.
- **Client-Side Photo Upload & Adjustments**: Privacy-preserving image upload that downsamples images using an HTML5 Canvas to prevent browser storage quota crashes (`QuotaExceededError`).
- **Services Showcase**: 4 service domains (Website Development, Responsive Web Design, AI-Powered Web Solutions, Data Analytics & Visualization).
- **Core Skills**: Verified technologies (HTML, CSS, JavaScript, React, Python, Git, Data Visualization) formatted with zero-pill typography.
- **Featured Projects**: Real-world interactive showcases for *Mom's Cafe Bhabua*, *Kaimur Lazeez*, and *Sharda Palace* with responsive viewport previews (Desktop, Tablet, Mobile).
- **Contact & Communication**: Direct 1-click email copy, client-side email dispatch (`mailto:`), and direct WhatsApp chat integration.

---

## 2. Where to Place Your Personal Photograph

To update or replace your portrait photograph in the project files:

### Method 1: Drop into Project Assets (Recommended for Git / GitHub Pages)
Save your portrait file at:
```
src/assets/images/pradeep-profile.png
```
*(Or in `public/images/pradeep-profile.png`)*

Vite will automatically bundle and hash your photo with relative paths for GitHub Pages, preserving your exact face, hairstyle, natural skin tone, and features with sharp `object-fit: cover` framing.

### Method 2: Live In-Browser Upload (Zero Code Required)
1. Open the website.
2. In the Hero section on the right side, click the **"Upload / Replace Photo"** button.
3. Select your photo or drag and drop it.
4. Use the built-in zoom, vertical framing, and glow intensity controls.
5. Click **"Apply to Portfolio"**. It is saved to your browser's private local cache and applied instantly.

---

## 2. Cybersecurity & Code Audit Report

As part of preparing this codebase for public deployment on **GitHub Pages**, a thorough code-level security audit was conducted.

### A. What Security Issues Were Identified
1. **Absolute Base Path Issue (`/assets/*`)**:
   - *Issue*: Standard Vite configs assume root deployment (`/`). On GitHub Pages, projects are commonly served from repository subpaths (`https://<username>.github.io/<repo-name>/`), causing 404 asset failures for JS, CSS, and images.
2. **Missing Content Security Policy (CSP)**:
   - *Issue*: Lack of explicit Content Security Policy headers left the application without defense-in-depth against unauthorized third-party script injection.
3. **Missing Browser Security Headers**:
   - *Issue*: Absence of `nosniff` and `Referrer-Policy` meta tags exposed users to MIME-confusion attacks and referrer leakage.
4. **Unbounded File Reader & LocalStorage Overflow Risk**:
   - *Issue*: Storing high-resolution camera photos (e.g. 10MB+) directly into `localStorage` triggers an unhandled `DOMException: QuotaExceededError`, which can crash or freeze the client application.
5. **Window Alert & Navigation Vulnerability**:
   - *Issue*: The use of browser `alert()` and unvalidated `window.open()` calls created blocking dialogs and potential tab-nabbing vulnerabilities.
6. **Form Input Sanitization & CRLF Injection**:
   - *Issue*: Generating dynamic `mailto:` links with unsanitized user inputs could allow carriage return/line feed (`\r\n`) injections into mail client headers.

### B. What Was Actually Fixed
- [x] **Configured Relative Base Path**: Added `base: './'` to `vite.config.ts`, ensuring all scripts, stylesheets, and image assets load reliably on both custom domains and GitHub Pages subpaths.
- [x] **Implemented Strict Content Security Policy (CSP)**: Added an explicit `<meta http-equiv="Content-Security-Policy">` in `index.html` allowing only necessary resources (`'self'`, Google Fonts, data/blob images).
- [x] **Hardened HTTP/Meta Security**: Added `<meta http-equiv="X-Content-Type-Options" content="nosniff">` and `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- [x] **Optimized LocalStorage Image Handling**: Created an HTML5 Canvas downscaling pipeline in `PhotoUploadModal.tsx` that resizes large photos to a max dimension of 800px (~100KB JPEG), preventing storage quota crashes.
- [x] **Eliminated `alert()` Calls**: Replaced browser blocking alerts with inline, accessible error banners.
- [x] **Sanitized External Links & Mailto**: Added `rel="noopener noreferrer"` to all outbound links, and stripped CRLF characters from contact form headers before URI encoding.
- [x] **Sanitized Git Ignore Rules**: Expanded `.gitignore` to strictly exclude `.env`, `.env*.local`, OS metadata (`.DS_Store`), editor caches, and build folders.
- [x] **Created Automated GitHub Actions Workflow**: Added `.github/workflows/deploy.yml` using official GitHub Pages actions (`actions/deploy-pages@v4`) with least-privilege token permissions (`pages: write`, `id-token: write`).

### C. Remaining Security Limitations (Public Static Hosting Constraints)
- **Static Hosting Boundary**: GitHub Pages is a static file host (like AWS S3 or Cloudflare Pages). It does not execute Node.js, Python, or PHP backends.
- **Client-Side Storage**: Photos saved in `localStorage` are stored locally on the visitor's browser device. They are not synchronized across devices unless a backend database (e.g. Firebase or Cloud SQL) is connected.
- **Contact Form Routing**: The contact form operates client-side via `mailto:` and WhatsApp. No backend database or server logs incoming messages unless a serverless webhook (e.g. Formspree or Web3Forms) is configured.
- *Notice*: No web application is 100% hack-proof. Defense-in-depth principles have been applied to mitigate realistic threat vectors for static single-page applications.

---

## 3. How to Revoke and Rotate Secrets (Security Best Practice)

If an API key, database credential, or private token was **ever** committed to a public Git repository:
1. **Assume the secret is compromised**: Deleting a secret from the latest commit does **not** erase it from Git commit history.
2. **Revoke the key immediately**: Log in to the provider dashboard (Google AI Studio, Cloud console, etc.) and delete or revoke the affected API key.
3. **Generate a new key**: Issue a fresh credential and store it exclusively in secure secret vaults or deployment environment secrets.
4. **Scrub Git history** (if committed in earlier commits): Use `git-filter-repo` or BFG Repo-Cleaner:
   ```bash
   # Example with git-filter-repo:
   git filter-repo --invert-paths --path <path-to-sensitive-file>
   ```

---

## 4. How to Download This Project as a ZIP

If you are working inside Google AI Studio Build:
1. Click the **Project Menu** or **Download / Export** icon in the AI Studio interface.
2. Select **Download Project as ZIP** to save the complete project to your computer.
3. Extract the ZIP file to your preferred folder.

---

## 5. How to Deploy to GitHub Pages (Step-by-Step)

### Option 1: Automated GitHub Actions (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and create a new repository (e.g. `ppw-devstudio`).
   - Keep it **Public** (required for free GitHub Pages).

2. **Push the Code to GitHub**:
   Open a terminal in your project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PPW DevStudio portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Actions for Pages**:
   - In your GitHub repository, click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - Your site will automatically build and deploy via the included `.github/workflows/deploy.yml` workflow!
   - Under **Settings** → **Pages**, check **Enforce HTTPS** to ensure secure SSL/TLS delivery.
   - Your website will be live at: `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`.

---

### Option 2: Manual Build & Deploy (gh-pages)

If you prefer deploying the pre-built `dist/` directory manually:
```bash
# 1. Install dependencies and build static assets
npm install
npm run build

# 2. Deploy dist folder using the gh-pages tool
npx gh-pages -d dist
```
Then under **Settings** → **Pages**, select **Deploy from a branch** and choose the `gh-pages` branch.

---

## 6. Contact Form Integration (Zero-Backend Options)

The portfolio currently provides secure client-side dispatch:
1. **Direct Mailto**: Compiles an email draft addressed to `ppradeepchaurasiya676@gmail.com`.
2. **Direct WhatsApp**: Opens a direct chat link with pre-filled scope details.

If you want direct in-page submission without opening an email client:
- **Web3Forms**: Sign up at [web3forms.com](https://web3forms.com) (free, no backend needed). Add your public access key to the contact form submission endpoint.
- **Formspree**: Sign up at [formspree.io](https://formspree.io) and post the form payload to your Formspree endpoint.
- *Security Rule*: Never hardcode your personal email password or private SMTP credentials into frontend code.

---

## 7. Local Development

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Run TypeScript linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 8. License

© 2026 PPW DevStudio. Crafted and maintained by Pradeep. All rights reserved.
