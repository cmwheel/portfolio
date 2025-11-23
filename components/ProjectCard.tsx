"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectHighlights {
  [key: string]: string | number;
}

interface ProjectCardProps {
  title: string;
  badge?: string;
  description?: string;
  large?: boolean;
  skills?: string[];
  image?: string;
  highlights?: ProjectHighlights;
  onClick?: () => void;
  href?: string;
  dark?: boolean;
  border?: boolean;
  highlighted?: boolean;
  showLockIcon?: boolean;
}

export default function ProjectCard({ 
  title, 
  badge, 
  description, 
  large, 
  skills, 
  image, 
  highlights,
  onClick,
  href,
  dark = false,
  border = false,
  highlighted = false,
  showLockIcon = false
}: ProjectCardProps) {
  const content = (
    <>
      {/* Background image that fades in on hover */}
      {image && (
        <>
          <div className={`absolute inset-0 z-0 ${dark ? 'opacity-20 group-hover:opacity-30' : 'opacity-40 group-hover:opacity-70'} transition-opacity duration-500 overflow-hidden`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              quality={75}
              priority={false}
            />
          </div>
          {/* Overlay to ensure text readability */}
          <div className={`absolute inset-0 ${dark ? 'bg-slate-900/90 group-hover:bg-slate-900/80' : 'bg-white/70 group-hover:bg-white/40'} transition-colors duration-500 z-0`} />
        </>
      )}
      
      {/* Highlight accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${dark ? 'bg-cyan-500/30 group-hover:bg-cyan-500/50' : 'bg-forest-600'} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 z-10`} />
      
      {/* Lock icon - fades in on hover */}
      {showLockIcon && (
        <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={dark ? 'text-cyan-400' : 'text-slate-600'}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 p-6 sm:p-8 md:p-12 transition-all duration-500 group-hover:pl-8 sm:group-hover:pl-12 md:group-hover:pl-16 ${large ? 'flex-1 flex flex-col justify-center' : ''}`}>
        <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {dark && (
                  <div className="flex-shrink-0">
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-white"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                )}
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-serif font-semibold ${dark ? 'text-slate-100' : 'text-slate-900 group-hover:text-forest-600'} ${dark ? '' : 'transition-colors duration-300'} min-w-0 leading-tight break-words`}>
                  {title}
                </h3>
              </div>
              {badge && (
                <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg w-fit ${
                  dark 
                    ? 'bg-slate-800/70 text-slate-200 border-2 border-slate-600' 
                    : 'bg-forest-50 text-forest-700 border-2 border-forest-200 group-hover:bg-forest-100 group-hover:border-forest-300 transition-colors duration-300'
                }`}>
                  {badge}
                </span>
              )}
            </div>
            {description && (
              <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-4 ${dark ? 'text-slate-400' : 'text-slate-700'}`}>
                {description}
              </p>
            )}
            
            {/* Highlights/Metrics - positioned after description */}
            {highlights && Object.keys(highlights).length > 0 && (
              <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {Object.entries(highlights).map(([key, value]) => (
                  <div key={key} className="flex flex-col min-w-0">
                    <span className={`text-xs font-semibold uppercase tracking-wider mb-1 whitespace-nowrap ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {key}
                    </span>
                    <span className={`text-2xl sm:text-3xl md:text-4xl font-semibold whitespace-nowrap ${dark ? 'text-cyan-400' : 'text-forest-600'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Skills tags */}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                      dark 
                        ? 'text-slate-300 bg-slate-800/50 border border-slate-700 group-hover:bg-slate-800 group-hover:text-cyan-400 group-hover:border-cyan-500/50' 
                        : 'text-slate-700 bg-slate-100 border border-slate-300 group-hover:bg-forest-50 group-hover:text-forest-700 group-hover:border-forest-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Arrow indicator and CTA */}
          <div className="flex-shrink-0 mt-1 flex flex-col items-end gap-2">
            <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${dark ? 'text-cyan-400' : 'text-forest-600'}`}>
                {dark ? 'Coming Soon' : 'View Project'}
              </span>
            </div>
            <div className="relative">
              <svg 
                className={`w-5 h-5 sm:w-6 sm:h-6 ${dark ? 'text-slate-500 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-forest-600'} group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {/* Pulsing dot on hover */}
              <div className={`absolute -right-1 -top-1 w-2 h-2 ${dark ? 'bg-cyan-400' : 'bg-forest-600'} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300`} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border highlight on hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${dark ? 'bg-cyan-500/30 group-hover:bg-cyan-500/50' : 'bg-forest-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`} />
    </>
  );

  const cardClasses = `group relative ${dark ? 'bg-slate-900' : 'bg-white'} rounded-xl shadow-sm overflow-hidden transition-all duration-500 ease-out ${highlighted ? 'border-2 border-forest-200' : border ? 'border border-slate-200' : ''} ${dark ? 'opacity-60 grayscale-[20%] hover:opacity-70 hover:grayscale-0 hover:shadow-cyan-500/20 hover:shadow-2xl' : 'hover:shadow-2xl'} hover:-translate-y-1 ${dark ? 'cursor-not-allowed' : 'cursor-pointer'} touch-manipulation ${large ? 'h-full flex flex-col min-h-[400px]' : 'min-h-[200px]'}`;

  if (href) {
    return (
      <Link 
        href={href}
        className={cardClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
    >
      {content}
    </div>
  );
}

