import React, { useState, useEffect, useRef } from 'react';
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
    aura: 'from-[#e29578]/25 via-[#c87a5b]/15 to-transparent',
    glowColor: 'rgba(242, 169, 126, 0.65)',
  },
  {
    id: 1,
    title: 'Digital Craft',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    aura: 'from-[#9e6b88]/25 via-[#e29578]/15 to-transparent',
    glowColor: 'rgba(158, 107, 136, 0.65)',
  },
  {
    id: 2,
    title: 'Deep Focus',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    aura: 'from-[#b55d3d]/30 via-[#24141e]/25 to-transparent',
    glowColor: 'rgba(200, 122, 91, 0.6)',
  },
  {
    id: 3,
    title: 'Future Forward',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    aura: 'from-[#f2a97e]/25 via-[#9e6b88]/15 to-transparent',
    glowColor: 'rgba(242, 169, 126, 0.65)',
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

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const isDarkMode = activeVideo === 2; // Deep Focus (3rd video, index 2)

  // Ensure seamless, reliable video playback and looping across all browsers
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        
        if (idx === activeVideo) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.play().catch(() => {});
        }
      }
    });
  }, [activeVideo]);

  // Global listener to resume video if browser suspended it
  useEffect(() => {
    const resumeVideos = () => {
      videoRefs.current.forEach((v) => {
        if (v && v.paused) {
          v.play().catch(() => {});
        }
      });
    };

    window.addEventListener('click', resumeVideos, { once: true });
    window.addEventListener('touchstart', resumeVideos, { once: true });
    return () => {
      window.removeEventListener('click', resumeVideos);
      window.removeEventListener('touchstart', resumeVideos);
    };
  }, [activeVideo]);

  const handleVideoSwitch = (index: number) => {
    if (index === activeVideo || isTransitioning) return;
    
    const targetVideo = videoRefs.current[index];
    if (targetVideo) {
      targetVideo.play().catch(() => {});
    }

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

  const heroColorClass = isDarkMode ? 'text-[#24141E]' : 'text-[#FFF0EB]';
  const heroSubtextColorClass = isDarkMode ? 'text-[#24141E]/85' : 'text-[#FCEEE8]/85';
  const heroInputPlaceholderColor = isDarkMode ? 'placeholder-[#24141E]/50 text-[#24141E]' : 'placeholder-[#FCEEE8]/60 text-[#FFF0EB]';
  const activeAura = VIDEOS[activeVideo].aura;

  return (
    <div className="min-h-screen bg-[#0B0609] text-[#FCEEE8] relative selection:bg-copper-dark/40 selection:text-[#FFF0EB] overflow-x-hidden">
      {/* Top Floating Navbar (Fixed) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 sm:py-6 md:px-14 pointer-events-none">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="pointer-events-auto text-[#FFF0EB] italic text-xl sm:text-2xl tracking-wide font-serif cursor-pointer flex items-center gap-2 group"
        >
          <span className="group-hover:text-copper-light transition-colors">Echolance</span>
          <span className="w-2 h-2 rounded-full bg-copper-light group-hover:scale-125 transition-transform animate-pulse shadow-[0_0_12px_rgba(242,169,126,0.9)]" />
        </a>

        {/* Desktop Nav (md+) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-2 py-1.5 pl-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.toLowerCase());
              }}
              className="font-sans-ui text-[#FCEEE8]/85 hover:text-copper-light hover:bg-white/[0.06] text-sm px-3.5 py-1.5 rounded-full transition-all duration-200"
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
            className="font-sans-ui ml-2 bg-gradient-to-r from-copper-light to-copper-dark text-[#0B0609] hover:from-[#FFF0EB] hover:to-copper-light text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(226,149,120,0.4)] hover:shadow-[0_0_30px_rgba(242,169,126,0.6)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="pointer-events-auto md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-[#FFF0EB] relative focus:outline-none shadow-[0_0_15px_rgba(226,149,120,0.2)]"
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
      <section id="home" className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0B0609] select-none">
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          {VIDEOS.map((video, idx) => (
            <video
              key={video.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={video.url}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeVideo === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Ambient Scene Aura */}
          <div
            className={`absolute inset-0 bg-gradient-radial ${activeAura} transition-all duration-1000 pointer-events-none opacity-95`}
          />

          {/* Warm Metallic Fluted Overlay */}
          <div className="absolute inset-0 fluted-overlay pointer-events-none opacity-50" />

          {/* Bottom Gradient Fade blending into #0B0609 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0609] via-transparent to-[#0B0609]/70 pointer-events-none" />
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-[#e29578]/25 via-[#9e6b88]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

        {/* Cinematic Scene Transition Light Sweep & Aperture Bloom */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              key={`transition-${activeVideo}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.95, 1.05, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 z-[1] pointer-events-none overflow-hidden flex items-center justify-center"
            >
              <div
                className="absolute w-[120vw] h-[120vh] rounded-full blur-3xl opacity-80"
                style={{
                  background: `radial-gradient(circle, ${VIDEOS[activeVideo].glowColor} 0%, rgba(242,169,126,0.25) 40%, transparent 70%)`,
                }}
              />
              <motion.div
                initial={{ scaleX: 0.2, opacity: 0 }}
                animate={{ scaleX: [0.2, 1.4, 0.8], opacity: [0, 0.95, 0] }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute w-full h-[3px] bg-gradient-to-r from-transparent via-[#f2a97e] to-transparent blur-[1px] shadow-[0_0_15px_rgba(242,169,126,0.8)]"
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
        <div className="relative z-[2] w-full flex-1 flex flex-col justify-between px-4 sm:px-8 md:px-14 pointer-events-none pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
          {/* Top spacer */}
          <div className="h-2" />

          {/* Hero Content (Centered) */}
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pointer-events-auto px-2 py-4 my-auto">
            {/* Badge */}
            <div
              className={`liquid-glass rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6 transition-colors duration-700 flex items-center gap-2 shadow-[0_0_20px_rgba(226,149,120,0.15)] ${heroColorClass}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-copper-light animate-pulse" />
              <span className="font-sans-ui text-xs sm:text-sm tracking-wide font-normal">
                Custom digital experiences, built for the modern web
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] leading-[1.08] font-normal tracking-tight mb-4 sm:mb-6 font-serif transition-colors duration-700 ${heroColorClass}`}
            >
              {isDarkMode ? (
                <>
                  Web Experiences That<br />Echo Beyond the Screen
                </>
              ) : (
                <>
                  Web Experiences That<br />
                  <span className="copper-text-gradient italic">Echo Beyond the Screen</span>
                </>
              )}
            </h1>

            {/* Subtext */}
            <p
              className={`font-sans-ui text-xs sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal px-2 transition-colors duration-700 ${heroSubtextColorClass}`}
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
              className="w-full max-w-[310px] sm:max-w-sm mb-6 sm:mb-8"
            >
              <div className="liquid-glass rounded-full p-1.5 flex items-center justify-between gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className={`bg-transparent font-sans-ui text-xs sm:text-sm px-3.5 py-1.5 sm:py-2 flex-1 focus:outline-none transition-colors duration-700 ${heroInputPlaceholderColor}`}
                />
                <button
                  type="submit"
                  className="font-sans-ui bg-gradient-to-r from-copper-light to-copper-dark text-[#0B0609] hover:from-[#FFF0EB] hover:to-copper-light text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-[0_0_15px_rgba(226,149,120,0.4)] flex-shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Start a Project
                </button>
              </div>
            </form>

            {/* Video Switcher with Fluid Sliding Glass Pill & Echo Radar Indicator */}
            <div
              className={`liquid-glass rounded-full p-1 sm:p-1.5 inline-flex items-center gap-1 sm:gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors duration-700 max-w-full overflow-x-auto ${
                isDarkMode ? 'border-copper-dark/40' : 'border-copper-light/35'
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
                    className={`relative font-sans-ui text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 select-none z-10 whitespace-nowrap ${
                      isActive
                        ? isDarkMode
                          ? 'text-[#24141E] font-semibold'
                          : 'text-[#FFF0EB] font-semibold'
                        : isDarkMode
                        ? 'text-[#24141E]/65 hover:text-[#24141E]'
                        : 'text-[#FCEEE8]/70 hover:text-[#FFF0EB]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeScenePill"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className={`absolute inset-0 rounded-full z-[-1] shadow-[0_0_20px_rgba(226,149,120,0.35)] ${
                          isDarkMode
                            ? 'bg-copper-dark/30 border border-copper-dark/50 backdrop-blur-md'
                            : 'bg-gradient-to-r from-copper-light/30 via-copper-dark/25 to-bronze-patina/30 border border-copper-light/60 backdrop-blur-md'
                        }`}
                      />
                    )}

                    {!isActive && hoveredIdx === idx && (
                      <motion.div
                        layoutId="hoverScenePill"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        className={`absolute inset-0 rounded-full z-[-1] ${
                          isDarkMode ? 'bg-copper-dark/15' : 'bg-white/[0.08]'
                        }`}
                      />
                    )}

                    {isActive && (
                      <div className="relative flex items-center justify-center w-2 h-2">
                        <span
                          className={`absolute w-full h-full rounded-full animate-echo-radar ${
                            isDarkMode ? 'bg-[#24141E]' : 'bg-copper-light'
                          }`}
                        />
                        <span
                          className={`relative w-1.5 h-1.5 rounded-full ${
                            isDarkMode ? 'bg-[#24141E]' : 'bg-copper-light shadow-[0_0_8px_rgba(242,169,126,0.9)]'
                          }`}
                        />
                      </div>
                    )}

                    <span className="relative z-10 whitespace-nowrap">
                      {video.title}
                    </span>

                    {isActive && (
                      <div className="hidden sm:flex items-center gap-[2px] h-3 ml-0.5">
                        <span
                          className={`w-[2px] rounded-full animate-eq-1 ${
                            isDarkMode ? 'bg-[#24141E]/80' : 'bg-copper-light'
                          }`}
                        />
                        <span
                          className={`w-[2px] rounded-full animate-eq-2 ${
                            isDarkMode ? 'bg-[#24141E]/80' : 'bg-copper-light'
                          }`}
                        />
                        <span
                          className={`w-[2px] rounded-full animate-eq-3 ${
                            isDarkMode ? 'bg-[#24141E]/80' : 'bg-copper-light'
                          }`}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="w-full flex items-center justify-center pointer-events-auto pt-4">
            <div className="flex items-center gap-2.5 sm:gap-6 md:gap-8 flex-wrap justify-center font-sans-ui text-[#FCEEE8]/80 text-[11px] sm:text-xs md:text-sm">
              {STATS.map((stat, idx) => (
                <React.Fragment key={stat}>
                  <span className="whitespace-nowrap">{stat}</span>
                  {idx < STATS.length - 1 && (
                    <span className="text-copper-light/60 hidden sm:inline select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content Sections */}
      <main>
        {/* Section 2: Selected Work (with Dropping Stars) */}
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
        className={`fixed inset-0 z-50 bg-[#0B0609]/95 backdrop-blur-md flex flex-col justify-center items-center px-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button at top right */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-[#FFF0EB] shadow-[0_0_15px_rgba(226,149,120,0.3)]"
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
              className={`text-[#FFF0EB] text-3xl sm:text-4xl font-serif italic hover:text-copper-light transition-all duration-500 transform ${
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
          className={`font-sans-ui bg-gradient-to-r from-copper-light to-copper-dark text-[#0B0609] hover:from-[#FFF0EB] hover:to-copper-light text-base font-semibold px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(226,149,120,0.5)] transition-all duration-500 transform ${
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
