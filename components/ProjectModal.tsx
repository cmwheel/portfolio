"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ProjectModal({ isOpen, onClose, title }: ProjectModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="fixed inset-0 z-[110] overflow-y-auto">
        <div className="min-h-screen flex items-start justify-center p-4 md:p-8">
          {/* Content area */}
          <div
            className="relative w-full max-w-7xl bg-white rounded-lg shadow-2xl p-6 md:p-12 mt-8 md:mt-16 mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white border-2 border-slate-900 hover:border-forest-600 hover:bg-forest-50 transition-colors duration-300 shadow-lg z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-slate-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 pr-16">
                {title}
              </h2>
              {/* Placeholder content area */}
              <div className="mt-12">
                {/* Content will be added here later */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

