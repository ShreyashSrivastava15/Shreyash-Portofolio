# Portfolio: Shreyash (Not-Rambo)

I designed and developed a modern, high-impact personal portfolio with a clear goal: to present myself as an engineer who thinks in systems, impact, and execution — not just UI.

The portfolio is built using **Next.js**, **Tailwind CSS**, and **Framer Motion**, delivering a premium, performant experience optimized for both recruiters and real-world deployment.

## ✨ Key Highlights

### 🎯 Recruiter-Centric Case Studies
Each major project is presented as a case study, not a demo. For **S.A.F.E.** and **DSA Tracker**, I structured content around:
- **Problem definition**
- **Engineering solution**
- **Technical decisions**
- **Measurable impact**

This mirrors how engineers communicate in real product teams.

### 🎨 Modern, Professional Aesthetic
- **Dark / Light mode** with seamless theme switching
- **Glassmorphism-inspired UI** with a clean, professional color palette
- **Clear visual hierarchy** and spacing to guide attention naturally

The design prioritizes clarity, credibility, and focus over visual noise.

### 🌀 Thoughtful Animations
Using Framer Motion, I added:
- **Subtle entrance animations**
- **Smooth hover interactions**

These enhance perceived quality without distracting from content, keeping the experience recruiter-friendly.

### 📱 Fully Responsive by Design
Built with a mobile-first approach, the layout scales flawlessly across:
- **Smartphones**
- **Tablets**
- **Large desktop** and high-resolution displays

### 🧹 Clean Project Reorganization
To maintain architectural clarity:
- The existing Express backend was moved into a dedicated `backend/` directory
- The root remains clean and optimized for the Next.js App Router

## 🏗️ Technical Architecture

### 🔧 Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4 (custom tokens, glassmorphism utilities)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: Next Themes

### 📂 Folder Structure
```text
/
├── src/
│   ├── app/            # Application pages & layouts
│   ├── components/     # Reusable UI components
│   ├── lib/            # Design system & utility functions
│   └── ...
├── backend/            # Express.js backend (original project)
└── ...
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

