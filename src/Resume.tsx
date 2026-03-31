import { useState, useEffect } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const DATA = {
  name: "Sabir Khan",
  role: "Frontend Developer",
  tagline: "I build interfaces people actually enjoy using.",
  bio: "Frontend Developer from Haryana, India — specializing in React and TypeScript. I ship real-world applications with strong focus on clean architecture, pixel-perfect UI, and performance. Currently building frontend for a revenue analytics tool at CodeCompass.",
  location: "Haryana, India",
  email: "khansabir5400@gmail.com",
  phone: "+91 92893 77069",
  github: "https://github.com/sabirkhan97",
  portfolio: "https://yourportfolio.com",

  experience: [
    {
      id: 1,
      company: "CodeCompass",
      role: "Frontend Developer",
      type: "Current",
      period: "2024 — Present",
      description: "Working as a frontend developer on a revenue application tool — a powerful analytics platform for tracking and visualizing business revenue data.",
      highlights: [
        "Building and maintaining the frontend of a revenue analytics web application",
        "Implementing interactive dashboards, charts, and data visualization components",
        "Collaborating on scalable UI architecture using React and TypeScript",
        "Optimizing performance for large dataset rendering and real-time updates",
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Data Viz", "Dashboards"],
      accent: "#6366f1",
      accentLight: "#eef2ff",
      accentDark: "rgba(99,102,241,0.08)",
    },
  ],

  projects: [
    {
      id: 1, name: "Fitorge", subtitle: "AI Workout Generator",
      description: "Full-stack fitness app with AI-powered personalized workout generation, Supabase auth, and mobile support via Expo.",
      url: "https://fitorge.vercel.app", status: "live",
      accent: "#16a34a", accentLight: "#dcfce7", accentDark: "rgba(34,197,94,0.08)",
      tags: ["React", "TypeScript", "Express", "Supabase", "AI API", "Expo"],
      highlights: ["AI API integration generating structured JSON workout plans", "User authentication and profile management via Supabase", "Mobile-ready architecture with Expo testing", "v2 enhancement currently in active development"],
      featured: true,
    },
    {
      id: 2, name: "Malik Fabrication", subtitle: "Industrial Business Website",
      description: "Production website for a real fabrication business client. SEO-optimised, custom domain, fully responsive.",
      url: "https://malikfabrication.in", status: "live",
      accent: "#1d4ed8", accentLight: "#dbeafe", accentDark: "rgba(59,130,246,0.08)",
      tags: ["React", "CSS", "Responsive", "Live Client", "SEO"],
      highlights: ["Built for a real industrial client — live at malikfabrication.in", "Custom domain deployment with SEO-friendly structure", "Industrial aesthetic tailored precisely to client branding", "Fully responsive across mobile, tablet, and desktop"],
      featured: true,
    },
    {
      id: 3, name: "New Dream Property", subtitle: "Real Estate Platform",
      description: "Property listing and inquiry platform with dynamic cards, search, and conversion-optimised UX.",
      url: "https://newdreamproperty.vercel.app", status: "live",
      accent: "#b45309", accentLight: "#fef3c7", accentDark: "rgba(245,158,11,0.08)",
      tags: ["React", "Tailwind", "Vercel", "UX Design"],
      highlights: ["Property listing UI with dynamic search and filter", "Conversion-focused layout with inquiry call-to-actions", "Deployed on Vercel with optimised load performance", "Responsive design for on-the-go property browsers"],
      featured: false,
    },
    {
      id: 4, name: "KGN Chicken", subtitle: "Restaurant Website",
      description: "Mobile-first restaurant site with menu display and fast Netlify deployment.",
      url: "https://kgnchicken.netlify.app", status: "live",
      accent: "#dc2626", accentLight: "#fee2e2", accentDark: "rgba(239,68,68,0.08)",
      tags: ["HTML/CSS", "JavaScript", "Netlify", "Mobile-first"],
      highlights: ["Mobile-first restaurant landing page", "Menu display with food photography layout", "Deployed on Netlify with fast page loads", "Strong visual branding and call-to-action sections"],
      featured: false,
    },
    {
      id: 5, name: "Metastore Builder", subtitle: "Advanced Data Modeling UI",
      description: "Multi-step data modeling system with TanStack Table virtualization and drag-and-drop column mapping.",
      url: "#", status: "in-progress",
      accent: "#7c3aed", accentLight: "#ede9fe", accentDark: "rgba(139,92,246,0.08)",
      tags: ["React", "TanStack Table", "dnd-kit", "Ant Design", "TypeScript"],
      highlights: ["Dynamic forms with column mapping and join/union logic", "TanStack Table + virtualization for large datasets", "Drag-and-drop column mapping with dnd-kit", "Scalable multi-step architecture"],
      featured: false,
    },
    {
      id: 6, name: "Gym Management System", subtitle: "Member & Fee Tracker",
      description: "System for managing gym members, fee tracking, expiry alerts, and membership plans on Supabase.",
      url: "#", status: "in-progress",
      accent: "#0e7490", accentLight: "#cffafe", accentDark: "rgba(6,182,212,0.08)",
      tags: ["React", "Supabase", "TypeScript", "PostgreSQL"],
      highlights: ["Active/inactive member management with status tracking", "Expiry alerts and membership plan configuration", "Supabase backend for auth and real-time data", "Clean admin dashboard UI"],
      featured: false,
    },
  ],

  skills: [
    { category: "Core", items: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Libraries & Tools", items: ["Ant Design", "TanStack Table", "React Hook Form", "Vite", "dnd-kit", "Git", "Expo"] },
    { category: "Backend & Database", items: ["Node.js", "Express", "Supabase", "PostgreSQL"] },
    { category: "Deployment", items: ["Vercel", "Netlify", "Custom Domains"] },
  ],

  education: { degree: "Bachelor of Computer Application", college: "Manglayatan University", year: "Pursuing" },
};

// ─── THEMES ───────────────────────────────────────────────────────────────────

const themes = {
  dark: {
    bg: "#080810",
    bgAlt: "#0e0e1a",
    surface: "#12121e",
    surface2: "#1a1a28",
    border: "rgba(255,255,255,0.06)",
    border2: "rgba(255,255,255,0.12)",
    text: "#eeedf8",
    muted: "#6e6d80",
    muted2: "#9d9bb8",
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.08)",
    accentBorder: "rgba(129,140,248,0.2)",
    green: "#22c55e",
    greenBg: "rgba(34,197,94,0.08)",
    greenBorder: "rgba(34,197,94,0.2)",
    amber: "#f59e0b",
    glow: "rgba(129,140,248,0.06)",
    navBg: "rgba(8,8,16,0.85)",
  },
  light: {
    bg: "#f9f8f5",
    bgAlt: "#f2f1ee",
    surface: "#ffffff",
    surface2: "#f4f3f0",
    border: "rgba(0,0,0,0.07)",
    border2: "rgba(0,0,0,0.13)",
    text: "#111120",
    muted: "#6b6a7a",
    muted2: "#3b3a50",
    accent: "#4f46e5",
    accentBg: "rgba(79,70,229,0.06)",
    accentBorder: "rgba(79,70,229,0.22)",
    green: "#16a34a",
    greenBg: "rgba(22,163,74,0.07)",
    greenBorder: "rgba(22,163,74,0.22)",
    amber: "#d97706",
    glow: "rgba(79,70,229,0.04)",
    navBg: "rgba(249,248,245,0.88)",
  },
};

// ─── ICONS ────────────────────────────────────────────────────────────────────

const IC = {
  Location: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Mail: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
  Github: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  External: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Sun: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Moon: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  Arrow: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Briefcase: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

// ─── STYLES ───────────────────────────────────────────────────────────────────

const makeStyles = (t: typeof themes.dark) => `
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@300;400;500;700&display=swap');
  @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@300,400,500,700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: ${t.bg};
    color: ${t.text};
    font-family: 'Satoshi', 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* ─ NAV ─ */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    backdrop-filter: blur(18px);
    background: ${t.navBg};
    border-bottom: 1px solid ${t.border};
    height: 58px;
    display: flex; align-items: center;
    padding: 0 2rem;
    transition: background 0.3s;
  }
  .nav-inner {
    max-width: 1100px; margin: 0 auto; width: 100%;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo {
    font-family: 'Cabinet Grotesk', 'Syne', sans-serif;
    font-weight: 900; font-size: 18px; letter-spacing: -0.5px;
    color: ${t.text}; text-decoration: none;
  }
  .nav-logo span { color: ${t.accent}; }
  .nav-links {
    display: flex; align-items: center; gap: 2rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 13.5px; font-weight: 500; color: ${t.muted2};
    text-decoration: none; transition: color 0.2s; letter-spacing: 0.2px;
  }
  .nav-links a:hover { color: ${t.accent}; }
  .nav-right { display: flex; align-items: center; gap: 12px; }
  .nav-mobile-btn {
    display: none; background: none; border: none; cursor: pointer;
    color: ${t.muted2}; padding: 4px;
  }

  /* toggle pill */
  .toggle-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 5px 12px; border-radius: 40px;
    background: ${t.surface2}; border: 1px solid ${t.border2};
    cursor: pointer; font-size: 12px; font-weight: 500;
    color: ${t.muted2}; font-family: 'Satoshi', sans-serif;
    transition: all 0.2s; user-select: none;
  }
  .toggle-pill:hover { color: ${t.text}; border-color: ${t.accent}; }

  /* mobile menu */
  .mobile-menu {
    display: none; position: fixed; top: 58px; left: 0; right: 0; bottom: 0;
    z-index: 99; background: ${t.bg}; padding: 2rem;
    flex-direction: column; gap: 1.5rem;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-size: 20px; font-weight: 700; color: ${t.text};
    text-decoration: none; font-family: 'Cabinet Grotesk', sans-serif;
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: ${t.accent}; }

  /* ─ PAGE ─ */
  .page { padding-top: 58px; }

  /* ─ HERO ─ */
  .hero {
    min-height: calc(100vh - 58px);
    display: flex; align-items: center;
    padding: 5rem 2rem 5rem;
    position: relative; overflow: hidden;
    background: ${t.bg};
  }
  .hero::before {
    content: '';
    position: absolute; top: -200px; left: -200px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, ${t.glow} 0%, transparent 70%);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute; bottom: -100px; right: -100px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, ${t.accentBg} 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner {
    max-width: 1100px; margin: 0 auto; width: 100%;
    position: relative; z-index: 1;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11.5px; font-weight: 600; letter-spacing: 2.5px;
    text-transform: uppercase; color: ${t.accent};
    background: ${t.accentBg}; border: 1px solid ${t.accentBorder};
    border-radius: 40px; padding: 5px 14px; margin-bottom: 24px;
    animation: fadeUp 0.6s ease both;
  }
  .eyebrow-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: ${t.accent}; animation: pulse 2s infinite;
  }
  .hero-title {
    font-family: 'Cabinet Grotesk', 'Syne', sans-serif;
    font-size: clamp(48px, 7vw, 90px);
    font-weight: 900; letter-spacing: -3px; line-height: 0.93;
    color: ${t.text}; margin-bottom: 24px;
    animation: fadeUp 0.6s ease 0.08s both;
  }
  .hero-title .accent { color: ${t.accent}; }
  .hero-title .dim { color: ${t.muted}; }
  .hero-sub {
    font-size: 17px; line-height: 1.75; color: ${t.muted2};
    max-width: 520px; margin-bottom: 40px;
    animation: fadeUp 0.6s ease 0.15s both;
  }
  .hero-actions {
    display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
    animation: fadeUp 0.6s ease 0.22s both;
  }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 8px;
    background: ${t.accent}; color: #fff;
    font-size: 14px; font-weight: 600; text-decoration: none;
    transition: opacity 0.2s, transform 0.15s; border: none; cursor: pointer;
    font-family: 'Satoshi', sans-serif;
  }
  .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 22px; border-radius: 8px;
    background: transparent; color: ${t.text};
    font-size: 14px; font-weight: 500; text-decoration: none;
    border: 1px solid ${t.border2}; transition: all 0.2s; cursor: pointer;
    font-family: 'Satoshi', sans-serif;
  }
  .btn-outline:hover { border-color: ${t.accent}; color: ${t.accent}; transform: translateY(-1px); }

  .hero-meta {
    display: flex; align-items: center; gap: 20px; margin-top: 48px;
    flex-wrap: wrap; animation: fadeUp 0.6s ease 0.28s both;
  }
  .hero-meta-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: ${t.muted};
  }
  .hero-stat {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: 32px; font-weight: 900; color: ${t.text};
    letter-spacing: -1px;
  }
  .hero-stat-label { font-size: 12px; color: ${t.muted}; }
  .hero-stats {
    display: flex; gap: 2.5rem; margin-top: 48px;
    animation: fadeUp 0.6s ease 0.32s both;
    padding-top: 2rem; border-top: 1px solid ${t.border};
  }

  /* ─ SECTION ─ */
  .section {
    padding: 6rem 2rem;
    background: ${t.bg};
  }
  .section.alt { background: ${t.bgAlt}; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .sec-head { margin-bottom: 3rem; }
  .sec-eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 3px;
    text-transform: uppercase; color: ${t.accent}; margin-bottom: 10px;
  }
  .sec-title {
    font-family: 'Cabinet Grotesk', 'Syne', sans-serif;
    font-size: clamp(28px, 4vw, 42px); font-weight: 900;
    letter-spacing: -1.5px; color: ${t.text}; line-height: 1.1;
  }
  .sec-title span { color: ${t.accent}; }
  .sec-desc { font-size: 15px; color: ${t.muted2}; margin-top: 10px; max-width: 500px; line-height: 1.7; }
  .sec-line { display: flex; align-items: center; gap: 16px; margin-top: 10px; }
  .sec-line-bar { width: 40px; height: 2px; background: ${t.accent}; border-radius: 2px; }

  /* ─ EXPERIENCE ─ */
  .exp-card {
    background: ${t.surface}; border: 1px solid ${t.border};
    border-radius: 20px; padding: 2rem;
    position: relative; overflow: hidden;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .exp-card::before {
    content: ''; position: absolute; top: 0; left: 0; bottom: 0;
    width: 3px; background: #6366f1; border-radius: 3px 0 0 3px;
  }
  .exp-card:hover { border-color: ${t.border2}; box-shadow: 0 8px 32px ${t.glow}; }
  .exp-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
  .exp-company {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: ${t.text};
  }
  .exp-role { font-size: 14px; color: ${t.muted2}; margin-top: 2px; font-weight: 500; }
  .exp-current-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; color: ${t.green};
    background: ${t.greenBg}; border: 1px solid ${t.greenBorder};
    border-radius: 20px; padding: 3px 10px; white-space: nowrap;
  }
  .exp-current-dot { width: 5px; height: 5px; border-radius: 50%; background: ${t.green}; animation: pulse 2s infinite; }
  .exp-period { font-size: 12.5px; color: ${t.muted}; margin-bottom: 14px; }
  .exp-desc { font-size: 14px; line-height: 1.7; color: ${t.muted2}; margin-bottom: 16px; }
  .exp-list { list-style: none; padding: 0; margin: 0 0 16px; display: flex; flex-direction: column; gap: 6px; }
  .exp-list li { display: flex; gap: 10px; font-size: 13.5px; color: ${t.muted2}; line-height: 1.5; }
  .exp-list li::before { content: '→'; color: #6366f1; font-size: 12px; flex-shrink: 0; margin-top: 1px; }
  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .tag {
    font-size: 11px; padding: 3px 9px; border-radius: 4px;
    background: ${t.surface2}; border: 1px solid ${t.border2};
    color: ${t.muted2};
  }

  /* ─ PROJECTS ─ */
  .projects-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1rem;
  }
  .p-card {
    background: ${t.surface}; border: 1px solid ${t.border};
    border-radius: 16px; padding: 1.4rem; cursor: pointer;
    transition: border-color 0.25s, transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .p-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2.5px; background: var(--ca, transparent);
  }
  .p-card:hover { border-color: ${t.border2}; transform: translateY(-2px); box-shadow: 0 8px 28px ${t.glow}; }
  .p-card.featured { border-color: ${t.border2}; }
  .p-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px; }
  .p-name {
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 18px; font-weight: 800;
    color: ${t.text}; letter-spacing: -0.3px;
  }
  .p-sub { font-size: 12px; color: ${t.muted}; margin-top: 2px; }
  .live-badge {
    font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    white-space: nowrap; color: ${t.green}; background: ${t.greenBg};
    border: 1px solid ${t.greenBorder}; border-radius: 20px; padding: 2px 8px;
  }
  .wip-badge {
    font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    white-space: nowrap; color: ${t.amber}; background: rgba(245,158,11,0.08);
    border: 1px solid rgba(245,158,11,0.2); border-radius: 20px; padding: 2px 8px;
  }
  .featured-badge {
    font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
    white-space: nowrap; color: ${t.accent}; background: ${t.accentBg};
    border: 1px solid ${t.accentBorder}; border-radius: 20px; padding: 2px 8px;
  }
  .p-desc { font-size: 13px; color: ${t.muted}; line-height: 1.65; margin-bottom: 12px; }
  .p-highlights { list-style: none; padding: 0; margin: 0 0 12px; display: none; }
  .p-card.expanded .p-highlights { display: block; }
  .p-highlights li { font-size: 12.5px; color: ${t.muted2}; padding: 3px 0 3px 16px; position: relative; line-height: 1.5; }
  .p-highlights li::before { content: '→'; position: absolute; left: 0; color: ${t.muted}; font-size: 11px; }
  .p-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
  .p-tag { font-size: 10.5px; padding: 2px 8px; border-radius: 4px; background: ${t.surface2}; border: 1px solid ${t.border}; color: ${t.muted}; }
  .p-link {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 11.5px; font-weight: 500; text-decoration: none;
    padding: 4px 11px; border-radius: 20px; border: 1px solid;
    transition: opacity 0.2s; margin-top: 10px;
  }
  .p-link:hover { opacity: 0.7; }
  .expand-hint { font-size: 11px; color: ${t.muted}; margin-top: 10px; display: flex; align-items: center; gap: 4px; }
  .expand-arrow { transition: transform 0.25s; display: inline-block; }
  .p-card.expanded .expand-arrow { transform: rotate(180deg); }

  /* ─ SKILLS ─ */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
  .skill-card {
    background: ${t.surface}; border: 1px solid ${t.border};
    border-radius: 14px; padding: 1.2rem 1.3rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .skill-card:hover { border-color: ${t.border2}; box-shadow: 0 4px 16px ${t.glow}; }
  .skill-cat {
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 13px; font-weight: 800;
    letter-spacing: 0.3px; color: ${t.text}; margin-bottom: 12px;
  }
  .pills { display: flex; flex-wrap: wrap; gap: 5px; }
  .pill {
    font-size: 11.5px; padding: 4px 10px; border-radius: 20px;
    background: ${t.surface2}; border: 1px solid ${t.border2}; color: ${t.muted2};
    transition: all 0.15s; cursor: default;
  }
  .pill:hover { border-color: ${t.accent}; color: ${t.accent}; background: ${t.accentBg}; }

  /* ─ ABOUT ─ */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .about-avatar {
    width: 200px; height: 200px; border-radius: 24px;
    background: ${t.surface2}; border: 1px solid ${t.border2};
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: 72px; font-weight: 900; color: ${t.accent};
    letter-spacing: -3px; margin-bottom: 2rem;
    position: relative; overflow: hidden;
  }
  .about-avatar::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, ${t.accentBg} 0%, transparent 60%);
  }
  .about-text h3 {
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 28px; font-weight: 900;
    letter-spacing: -0.8px; color: ${t.text}; margin-bottom: 16px;
  }
  .about-text p { font-size: 15px; line-height: 1.8; color: ${t.muted2}; margin-bottom: 20px; }
  .about-contact { display: flex; flex-direction: column; gap: 10px; }
  .about-contact-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 13.5px; color: ${t.muted2};
  }
  .about-contact-item a { color: ${t.muted2}; text-decoration: none; transition: color 0.2s; }
  .about-contact-item a:hover { color: ${t.accent}; }
  .about-contact-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: ${t.surface2}; border: 1px solid ${t.border};
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    color: ${t.accent};
  }

  /* ─ CONTACT ─ */
  .contact-card {
    background: ${t.surface}; border: 1px solid ${t.border};
    border-radius: 24px; padding: 3rem;
    text-align: center; max-width: 640px; margin: 0 auto;
    position: relative; overflow: hidden;
  }
  .contact-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, ${t.accent}, ${t.green});
  }
  .contact-card h3 {
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 32px; font-weight: 900;
    letter-spacing: -1px; color: ${t.text}; margin-bottom: 12px;
  }
  .contact-card p { font-size: 15px; color: ${t.muted2}; margin-bottom: 28px; line-height: 1.7; }
  .contact-links { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
  .contact-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 20px; border-radius: 10px;
    font-size: 13.5px; font-weight: 600; text-decoration: none;
    background: ${t.surface2}; border: 1px solid ${t.border2};
    color: ${t.muted2}; transition: all 0.2s;
    font-family: 'Satoshi', sans-serif;
  }
  .contact-link:hover { border-color: ${t.accent}; color: ${t.accent}; background: ${t.accentBg}; transform: translateY(-1px); }

  /* ─ EDU ─ */
  .edu-card {
    background: ${t.surface}; border: 1px solid ${t.border};
    border-radius: 14px; padding: 1.5rem 1.8rem;
    display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  }
  .edu-deg { font-family: 'Cabinet Grotesk', sans-serif; font-size: 17px; font-weight: 800; color: ${t.text}; }
  .edu-col { font-size: 13px; color: ${t.muted}; margin-top: 3px; }
  .edu-yr {
    font-family: 'Cabinet Grotesk', sans-serif; font-size: 13px; font-weight: 700;
    color: ${t.accent}; background: ${t.accentBg}; border: 1px solid ${t.accentBorder};
    border-radius: 20px; padding: 3px 12px; white-space: nowrap;
  }

  /* ─ FOOTER ─ */
  .footer {
    text-align: center; padding: 2rem;
    border-top: 1px solid ${t.border};
    font-size: 12.5px; color: ${t.muted};
    background: ${t.bg};
  }

  /* ─ ANIMATIONS ─ */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

  /* ─ RESPONSIVE ─ */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-mobile-btn { display: flex; }
    .hero-title { font-size: clamp(40px, 11vw, 60px); }
    .hero-stats { gap: 1.5rem; }
    .about-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .skills-grid { grid-template-columns: 1fr 1fr; }
    .edu-card { flex-direction: column; align-items: flex-start; }
    .contact-card { padding: 2rem 1.5rem; }
    .section { padding: 4rem 1.25rem; }
    .hero { padding: 4rem 1.25rem; }
  }
  @media (max-width: 480px) {
    .skills-grid { grid-template-columns: 1fr; }
    .hero-actions { flex-direction: column; align-items: flex-start; }
    .hero-stats { flex-direction: column; gap: 1rem; }
  }
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = isDark ? themes.dark : themes.light;

  const toggleProject = (id: number) => setExpandedId((prev) => (prev === id ? null : id));

  // Close mobile menu on scroll
  useEffect(() => {
    const handler = () => setMobileOpen(false);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: makeStyles(t) }} />

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            SK<span>.</span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()); }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="toggle-pill" onClick={() => setIsDark((d) => !d)} aria-label="Toggle theme">
              {isDark ? <IC.Sun /> : <IC.Moon />}
              {isDark ? "Light" : "Dark"}
            </button>
            <button className="nav-mobile-btn" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
              {mobileOpen ? <IC.X /> : <IC.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()); }}>
            {item}
          </a>
        ))}
      </div>

      <div className="page">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              Sabir<br />
              <span className="accent">Khan</span><span className="dim">.</span>
            </h1>

            <p className="hero-sub">
              {DATA.bio}
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
                View my work <IC.Arrow />
              </a>
              <a className="btn-outline" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                Get in touch
              </a>
              <a className="btn-outline" href={DATA.github} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IC.Github /> GitHub
              </a>
            </div>

            <div className="hero-meta" style={{ marginTop: 24 }}>
              <span className="hero-meta-item"><IC.Location /> {DATA.location}</span>
              <span className="hero-meta-item"><IC.Mail />
                <a href={`mailto:${DATA.email}`} style={{ color: "inherit", textDecoration: "none" }}>{DATA.email}</a>
              </span>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat">6+</div>
                <div className="hero-stat-label">Live projects</div>
              </div>
              <div>
                <div className="hero-stat">2+</div>
                <div className="hero-stat-label">Years building</div>
              </div>
              <div>
                <div className="hero-stat">1</div>
                <div className="hero-stat-label">Current role</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section alt" id="about">
          <div className="section-inner">
            <div className="sec-head">
              <div className="sec-eyebrow">About me</div>
              <h2 className="sec-title">Who I <span>am</span></h2>
              <div className="sec-line"><div className="sec-line-bar" /></div>
            </div>

            <div className="about-grid">
              <div>
                <div className="about-avatar">SK</div>
              </div>
              <div className="about-text">
                <h3>Frontend Developer building real products</h3>
                <p>
                  I'm Sabir Khan — a frontend developer from Haryana, India, currently pursuing my BCA at Manglayatan University. I specialize in React and TypeScript, and I care deeply about the quality of what I build.
                </p>
                <p>
                  I'm currently working at <strong style={{ color: t.accent }}>CodeCompass</strong> on a revenue analytics application — building dashboards, data visualizations, and scalable UI components for a product used in real business environments.
                </p>
                <div className="about-contact">
                  <div className="about-contact-item">
                    <div className="about-contact-icon"><IC.Mail /></div>
                    <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
                  </div>
                  <div className="about-contact-item">
                    <div className="about-contact-icon"><IC.Phone /></div>
                    <a href={`tel:${DATA.phone}`}>{DATA.phone}</a>
                  </div>
                  <div className="about-contact-item">
                    <div className="about-contact-icon"><IC.Github /></div>
                    <a href={DATA.github} target="_blank" rel="noreferrer">github.com/sabirkhan97</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section" id="experience">
          <div className="section-inner">
            <div className="sec-head">
              <div className="sec-eyebrow">Work experience</div>
              <h2 className="sec-title">Where I've <span>worked</span></h2>
              <div className="sec-line"><div className="sec-line-bar" /></div>
            </div>

            {DATA.experience.map((exp) => {
              const bg = isDark ? exp.accentDark : exp.accentLight;
              return (
                <div key={exp.id} className="exp-card" style={{ background: bg }}>
                  <div className="exp-header">
                    <div>
                      <div className="exp-company">{exp.company}</div>
                      <div className="exp-role">
                        <IC.Briefcase /> &nbsp;{exp.role}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                      <span className="exp-current-badge">
                        <span className="exp-current-dot" /> Current
                      </span>
                      <span style={{ fontSize: 12, color: t.muted }}>{exp.period}</span>
                    </div>
                  </div>
                  <p className="exp-desc">{exp.description}</p>
                  <ul className="exp-list">
                    {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                  <div className="tag-row">
                    {exp.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              );
            })}

            {/* Education inline */}
            <div style={{ marginTop: "1.5rem" }}>
              <div className="edu-card">
                <div>
                  <div className="edu-deg">{DATA.education.degree}</div>
                  <div className="edu-col">{DATA.education.college}</div>
                </div>
                <div className="edu-yr">{DATA.education.year}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section alt" id="projects">
          <div className="section-inner">
            <div className="sec-head">
              <div className="sec-eyebrow">Selected work</div>
              <h2 className="sec-title">Projects I've <span>built</span></h2>
              <div className="sec-line"><div className="sec-line-bar" /></div>
              <p className="sec-desc">Click any card to see details. Live projects link out directly.</p>
            </div>

            <div className="projects-grid">
              {DATA.projects.map((p) => {
                const isExpanded = expandedId === p.id;
                const bg = isDark ? p.accentDark : p.accentLight;
                return (
                  <div
                    key={p.id}
                    className={`p-card${isExpanded ? " expanded" : ""}${p.featured ? " featured" : ""}`}
                    style={{ "--ca": p.accent, background: isExpanded ? bg : undefined } as React.CSSProperties}
                    onClick={() => toggleProject(p.id)}
                  >
                    <div className="p-top">
                      <div>
                        <div className="p-name">{p.name}</div>
                        <div className="p-sub">{p.subtitle}</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                        <span className={p.status === "live" ? "live-badge" : "wip-badge"}>
                          {p.status === "live" ? "Live" : "In Progress"}
                        </span>
                        {p.featured && <span className="featured-badge">Featured</span>}
                      </div>
                    </div>

                    <p className="p-desc">{p.description}</p>

                    <ul className="p-highlights">
                      {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>

                    <div className="p-tags">
                      {p.tags.map((tag) => <span className="p-tag" key={tag}>{tag}</span>)}
                    </div>

                    {p.url !== "#" && (
                      <a
                        className="p-link"
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: p.accent, borderColor: p.accent + "44", background: bg }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IC.External />
                        {p.url.replace("https://", "")}
                      </a>
                    )}

                    <div className="expand-hint">
                      <span className="expand-arrow">▾</span>
                      {isExpanded ? "Collapse" : "View details"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="section-inner">
            <div className="sec-head">
              <div className="sec-eyebrow">Technical skills</div>
              <h2 className="sec-title">What I <span>work with</span></h2>
              <div className="sec-line"><div className="sec-line-bar" /></div>
            </div>
            <div className="skills-grid">
              {DATA.skills.map((g) => (
                <div className="skill-card" key={g.category}>
                  <div className="skill-cat">{g.category}</div>
                  <div className="pills">
                    {g.items.map((s) => <span className="pill" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section alt" id="contact">
          <div className="section-inner">
            <div className="sec-head" style={{ textAlign: "center" }}>
              <div className="sec-eyebrow">Contact</div>
              <h2 className="sec-title">Let's <span>work together</span></h2>
            </div>
            <div className="contact-card">
              <h3>Get in touch</h3>
              <p>Open to freelance projects, collaborations, or full-time opportunities. If you have something interesting, let's talk.</p>
              <div className="contact-links">
                <a className="contact-link" href={`mailto:${DATA.email}`}>
                  <IC.Mail /> {DATA.email}
                </a>
                <a className="contact-link" href={`tel:${DATA.phone}`}>
                  <IC.Phone /> {DATA.phone}
                </a>
                <a className="contact-link" href={DATA.github} target="_blank" rel="noreferrer">
                  <IC.Github /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          Designed & built by Sabir Khan &nbsp;·&nbsp; React + TypeScript &nbsp;·&nbsp; {new Date().getFullYear()}
        </footer>

      </div>
    </>
  );
}