"use client";

import Image from "next/image";
import { useState, useLayoutEffect, useRef } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useRotatingWord } from "@/hooks/useRotatingWord";
import { ArrowDownTrayIcon, EnvelopeIcon, PhoneIcon, UserIcon, LinkIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const { displayedText, isTyping } = useTypewriter({
    text: "Charlie Wheeler",
    speed: 100,
    delay: 500
  });
  
  const { word, isAnimating } = useRotatingWord(3000);

  const [showContactMenu, setShowContactMenu] = useState(false);
  const [visibleLetterCount, setVisibleLetterCount] = useState(0);
  const prevWordRef = useRef(word);
  const timeoutRefsRef = useRef<NodeJS.Timeout[]>([]);

  const toggleContactMenu = () => {
    setShowContactMenu(!showContactMenu);
  };

  // Split word into letters for letter-by-letter animation
  const letters = word.split("");
  
  // When word changes, reset and animate letters in one by one
  // Use useLayoutEffect to run synchronously before browser paints
  useLayoutEffect(() => {
    // Clear any existing timeouts
    timeoutRefsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefsRef.current = [];
    
    // If word changed, immediately reset visible count to prevent flash
    if (prevWordRef.current !== word) {
      setVisibleLetterCount(0);
      prevWordRef.current = word;
    }
    
    // Animate letters in sequentially with staggered delay
    letters.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleLetterCount(index + 1);
      }, index * 50);
      timeoutRefsRef.current.push(timeout);
    });
    
    return () => {
      // Cleanup timeouts on unmount or word change
      timeoutRefsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefsRef.current = [];
    };
  }, [word, letters.length]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white px-6 sm:px-8 lg:px-12">
      {/* Diagonal Lines Background - Starting from top right corner */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 45px,
              rgba(77, 157, 111, 0.15) 45px,
              rgba(77, 157, 111, 0.15) 47px
            )`,
            maskImage: 'radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>
      
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left relative z-20">
          <h2 className="text-lg sm:text-xl text-forest-600 font-medium mb-3 tracking-wide">
            Hi, I&apos;m
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 min-h-[1.2em] inline-flex items-center">
            {displayedText}
            {isTyping && <span className="animate-pulse text-forest-600 font-light ml-1">|</span>}
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl text-slate-700 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            <span>passionate about building infrastructure for </span>
            <span key={word} className="inline-block text-forest-600 font-semibold">
              {letters.map((letter, index) => (
                <span
                  key={`${word}-${index}`}
                  className={`inline-block transition-opacity duration-300 ease-in-out ${
                    index < visibleLetterCount ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 relative z-30">
            <a
              href="/resume/Wheeler_Charlie_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download Resume
            </a>
            <div className="relative">
              <button
                onClick={toggleContactMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-forest-600 font-medium rounded-lg border-2 border-forest-600 hover:bg-forest-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <PlusIcon 
                  className={`w-5 h-5 transition-transform duration-300 ${showContactMenu ? 'rotate-45' : 'rotate-0'}`} 
                />
                Contact Me
              </button>
              {showContactMenu && (
                <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-64 bg-white border border-forest-200 rounded-lg shadow-xl py-2 z-50">
                  <a href="tel:+19257087218" className="flex items-center gap-3 px-4 py-3 hover:bg-forest-50 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-forest-600" />
                    <span>925-708-7218</span>
                  </a>
                  <a href="mailto:cmwheeler2@wisc.edu" className="flex items-center gap-3 px-4 py-3 hover:bg-forest-50 transition-colors">
                    <EnvelopeIcon className="w-5 h-5 text-forest-600" />
                    <span>cmwheeler2@wisc.edu</span>
                  </a>
                  <a href="https://www.linkedin.com/in/charliemwheeler/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-forest-50 transition-colors">
                    <UserIcon className="w-5 h-5 text-forest-600" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://x.com/charliewheeler" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-forest-50 transition-colors">
                    <LinkIcon className="w-5 h-5 text-forest-600" />
                    <span>X</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0 w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 mb-8 lg:mb-0 lg:-ml-8" style={{ zIndex: 20 }}>
           {/* Background decorative element */}
           <div className="absolute inset-0 bg-gradient-to-br from-forest-100 to-forest-200 rounded-2xl opacity-30 blur-2xl transform translate-x-3 translate-y-3 z-10"></div>
           
           <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-[3px] border-white/90 bg-slate-50 z-20">
             <Image 
               src="/images/headshot-placeholder.png"
               alt="Charlie Wheeler"
               fill
               className="object-cover object-center"
               priority
               sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
             />
           </div>
        </div>
        
      </div>
    </section>
  );
}
