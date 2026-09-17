import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

const VIDEOS = [
  {
    id: 0,
    title: 'Creative Flow',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    aura: 'from-amber-500/10 via-orange-500/5 to-transparent',
    glowColor: 'rgba(245, 180, 80, 0.3)',
  },
  {
    id: 1,
    title: 'Digital Craft',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    aura: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    glowColor: 'rgba(80, 200, 240, 0.3)',
  },
  {
    id: 2,
    title: 'Deep Focus',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    aura: 'from-blue-900/15 via-slate-800/10 to-transparent',
    glowColor: 'rgba(24, 44, 65, 0.4)',
  },
  {
    id: 3,
    title: 'Future Forward',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    aura: 'from-purple-500/10 via-pink-500/5 to-transparent',
    glowColor: 'rgba(180, 100, 255, 0.3)',
  },
];

const OVERLAY_PNG = 'https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png';

const NAV_LINKS = ['Home', 'Work', 'Services', 'About', 'Contact'];
const STATS = [
  'Custom Websites',
  'Built to Perform',
  'Design + Development',
  'Echolance',
];

export function App() {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const isDarkMode = activeVideo === 2; // Deep Focus (3rd video, index 2)

  const handleVideoSwitch = (index: number) => {
    if (index === activeVideo || isTransitioning) return;
    setActiveVideo(index);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroColorClass = isDarkMode ? 'text-[#182C41]' : 'text-white';
  const heroSubtextColorClass = isDarkMode ? 'text-[#182C41]/80' : 'text-white/80';
  const heroInputPlaceholderColor = isDarkMode ? 'placeholder-[#182C41]/50 text-[#182C41]' : 'placeholder-white/60 text-white';
  const activeAura = VIDEOS[activeVideo].aura;

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Top Floating Navbar (Fixed) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6 md:px-14 pointer-events-none">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="pointer-events-auto text-white italic text-xl sm:text-2xl tracking-wide font-serif cursor-pointer flex items-center gap-2 group"
        >
          <span>Echolance</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors animate-pulse" />
        </a>

        {/* Desktop Nav (md+) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-2 py-1.5 pl-6 shadow-2xl backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.toLowerCase());
              }}
              className="font-sans-ui text-white/90 hover:text-white text-sm px-3.5 py-1.5 rounded-full transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="font-sans-ui ml-2 bg-white text-black hover:bg-white/90 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-white relative focus:outline-none shadow-lg"
            aria-label="Toggle Navigation Menu"
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 transform ${
                mobileMenuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 transform ${
                mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden bg-black select-none">
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          {VIDEOS.map((video, idx) => (
            <video
              key={video.id}
              src={video.url}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeVideo === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Ambient Scene Aura */}
          <div
            className={`absolute inset-0 bg-gradient-radial ${activeAura} transition-all duration-1000 pointer-events-none opacity-80`}
          />
        </div>

        {/* Cinematic Scene Transition Light Sweep & Aperture Bloom */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              key={`transition-${activeVideo}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 0.45, 0], scale: [0.95, 1.05, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 z-[1] pointer-events-none overflow-hidden flex items-center justify-center"
            >
              {/* Radial light burst */}
              <div
                className="absolute w-[120vw] h-[120vh] rounded-full blur-3xl opacity-60"
                style={{
                  background: `radial-gradient(circle, ${VIDEOS[activeVideo].glowColor} 0%, rgba(255,255,255,0.15) 35%, transparent 70%)`,
                }}
              />
              {/* Horizontal anamorphic flare streak */}
              <motion.div
                initial={{ scaleX: 0.2, opacity: 0 }}
                animate={{ scaleX: [0.2, 1.4, 0.8], opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transparent PNG Overlay with Train-Bob animation (z-index 1) */}
        <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-hidden flex items-center justify-center">
          <img
            src={OVERLAY_PNG}
            alt="Atmospheric Overlay"
            className="w-full h-full object-cover animate-train-bob transition-transform duration-1000"
          />
        </div>

        {/* Content Layer (z-index 2) - Flex Column Full Height */}
        <div className="relative z-[2] w-full h-full flex flex-col justify-between px-6 py-5 sm:px-10 sm:py-7 md:px-14 md:py-8 pointer-events-none pt-24 md:pt-28">
          {/* Top spacer */}
          <div />

          {/* Hero Content (Centered) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto pointer-events-auto px-2 py-4">
            {/* Badge */}
            <div
              className={`liquid-glass rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-6 transition-colors duration-700 flex items-center gap-2 ${heroColorClass}`}
            >
              <Sparkles className="w-3.5 h-3.5 opacity-70 animate-pulse" />
              <span className="font-sans-ui text-xs sm:text-sm tracking-wide font-normal">
                Custom digital experiences, built for the modern web
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-normal tracking-tight mb-5 sm:mb-6 font-serif transition-colors duration-700 ${heroColorClass}`}
            >
              Web Experiences That<br />Echo Beyond the Screen
            </h1>

            {/* Subtext */}
            <p
              className={`font-sans-ui text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal px-2 transition-colors duration-700 ${heroSubtextColorClass}`}
            >
              We design and build custom websites that turn ideas into memorable digital experiences — combining sharp design, clean code, and modern technology.
            </p>

            {/* Email Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) {
                  alert(`Welcome to Echolance, ${email}!`);
                  setEmail('');
                }
              }}
              className="w-full max-w-[320px] sm:max-w-sm mb-8 sm:mb-10"
            >
              <div className="liquid-glass rounded-full p-1.5 flex items-center justify-between gap-2 shadow-xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className={`bg-transparent font-sans-ui text-xs sm:text-sm px-4 py-2 flex-1 focus:outline-none transition-colors duration-700 ${heroInputPlaceholderColor}`}
                />
                <button
                  type="submit"
                  className="font-sans-ui bg-white text-black hover:bg-white/90 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm flex-shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Start a Project
                </button>
              </div>
            </form>

            {/* Video Switcher with Fluid Sliding Glass Pill & Echo Radar Indicator */}
            <div
              className={`liquid-glass rounded-full p-1 sm:p-1.5 inline-flex items-center gap-1 sm:gap-2 shadow-2xl backdrop-blur-md transition-colors duration-700 ${
                isDarkMode ? 'border-[#182C41]/30' : 'border-white/10'
              }`}
            >
              {VIDEOS.map((video, idx) => {
                const isActive = activeVideo === idx;
                return (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSwitch(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`relative font-sans-ui text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 select-none z-10 ${
                      isActive
                        ? isDarkMode
                          ? 'text-[#182C41]'
                          : 'text-white'
                        : isDarkMode
                        ? 'text-[#182C41]/60 hover:text-[#182C41]'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {/* Active sliding capsule pill with spring physics */}
                    {isActive && (
                      <motion.div
                        layoutId="activeScenePill"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className={`absolute inset-0 rounded-full z-[-1] shadow-lg ${
                          isDarkMode
                            ? 'bg-[#182C41]/15 border border-[#182C41]/25 backdrop-blur-md'
                            : 'bg-white/20 border border-white/30 backdrop-blur-md'
                        }`}
                      />
                    )}

                    {/* Hover background highlight */}
                    {!isActive && hoveredIdx === idx && (
                      <motion.div
                        layoutId="hoverScenePill"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        className={`absolute inset-0 rounded-full z-[-1] ${
                          isDarkMode ? 'bg-[#182C41]/8' : 'bg-white/10'
                        }`}
                      />
                    )}

                    {/* Micro-Echo Radar Beacon Indicator */}
                    {isActive && (
                      <div className="relative flex items-center justify-center w-2 h-2">
                        <span
                          className={`absolute w-full h-full rounded-full animate-echo-radar ${
                            isDarkMode ? 'bg-[#182C41]' : 'bg-white'
                          }`}
                        />
                        <span
                          className={`relative w-1.5 h-1.5 rounded-full ${
                            isDarkMode ? 'bg-[#182C41]' : 'bg-white'
                          }`}
                        />
                      </div>
                    )}

                    {/* Label */}
                    <span className="relative z-10 whitespace-nowrap">
                      {video.title}
                    </span>

                    {/* Active Equalizer waves */}
                    {isActive && (
                      <div className="hidden sm:flex items-center gap-[2px] h-3 ml-0.5">
                        <span
                          className={`w-[2px] rounded-full animate-eq-1 ${
                            isDarkMode ? 'bg-[#182C41]/70' : 'bg-white/80'
                          }`}
                        />
                        <span
                          className={`w-[2px] rounded-full animate-eq-2 ${
                            isDarkMode ? 'bg-[#182C41]/70' : 'bg-white/80'
                          }`}
                        />
                        <span
                          className={`w-[2px] rounded-full animate-eq-3 ${
                            isDarkMode ? 'bg-[#182C41]/70' : 'bg-white/80'
                          }`}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Stats - Always White */}
          <div className="w-full flex items-center justify-center pointer-events-auto pb-2">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-wrap justify-center font-sans-ui text-white/70 text-xs sm:text-sm">
              {STATS.map((stat, idx) => (
                <React.Fragment key={stat}>
                  <span className="whitespace-nowrap">{stat}</span>
                  {idx < STATS.length - 1 && (
                    <span className="text-white/30 hidden sm:inline select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content Sections */}
      <main>
        {/* Section 2: Selected Work */}
        <WorkSection />

        {/* Section 3: Services & Capabilities */}
        <ServicesSection />

        {/* Section 4: About Echolance */}
        <AboutSection />

        {/* Section 5: Project Contact & Footer */}
        <ContactSection />
      </main>

      {/* Mobile Menu Overlay (Fixed, z-50) */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button at top right */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-white"
          aria-label="Close Menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Staggered Navigation Links */}
        <nav className="flex flex-col items-center gap-6 mb-10">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.toLowerCase());
              }}
              style={{
                transitionDelay: mobileMenuOpen ? `${100 + idx * 50}ms` : '0ms',
              }}
              className={`text-white text-3xl sm:text-4xl font-serif italic hover:text-white/80 transition-all duration-500 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Start a Project Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          style={{
            transitionDelay: mobileMenuOpen ? '300ms' : '0ms',
          }}
          className={`font-sans-ui bg-white text-black hover:bg-white/90 text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-500 transform ${
            mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          Start a Project
        </a>
      </div>
    </div>
  );
}

export default App;
