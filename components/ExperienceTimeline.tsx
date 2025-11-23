"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineItem {
  id: string;
  organization: string;
  role: string;
  date: string;
  location: string;
  description?: string[];
  subtleties?: string[]; // For things like club involvement
}

const experiences: TimelineItem[] = [
  {
    id: "stotan",
    organization: "Stotan Industrial",
    role: "Development Analyst Intern",
    date: "June 2025 – Aug 2025",
    location: "Chicago, IL"
  },
  {
    id: "colliers",
    organization: "Colliers International",
    role: "Real Estate Brokerage Intern",
    date: "May 2023 – Aug 2024",
    location: "Walnut Creek, CA"
  },
  {
    id: "uw-madison",
    organization: "University of Wisconsin-Madison",
    role: "BBA, Finance",
    date: "2022 – 2026",
    location: "Madison, WI",
    description: [
      "Study Abroad: Hong Kong University of Science and Technology (AI Systems & Robotics)"
    ],
    subtleties: [
      "Wisconsin Real Estate Club (Mentor)",
      "Capital Management Club (Portfolio Analyst)",
      "Ethical and Responsible Business Network"
    ]
  },
  {
    id: "lamorinda",
    organization: "Lamorinda Mobile Auto Washers",
    role: "Owner",
    date: "April 2022 – Aug 2024",
    location: "Moraga, CA"
  },
  {
    id: "scouts",
    organization: "Boy Scouts of America",
    role: "Eagle Scout",
    date: "2015 – 2022",
    location: "Lafayette, CA"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest-600">
            My Journey
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-semibold text-slate-900">
            Experience Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Center Line - visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />
          
          {/* Left Line - visible on mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ experience, index }: { experience: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;
  const { ref, isVisible } = useScrollAnimation();
  const isExpandable = experience.id === "uw-madison";
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } items-start gap-8 md:gap-0 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Date Bubble (Desktop Center) - aligned with title */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-[3.5rem] items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-white border-4 border-forest-500 shadow-sm" />
      </div>

      {/* Mobile Dot - aligned with title */}
      <div className="md:hidden absolute left-[21px] top-[3.5rem] w-3 h-3 rounded-full bg-white border-2 border-forest-500 z-10" />

      {/* Content Side */}
      <div className={`w-full md:w-1/2 ${isEven ? "md:pr-16 lg:pr-24 md:text-right" : "md:pl-16 lg:pl-24"} pl-16 md:pl-0`}>
        <div className="flex flex-col gap-1">
          {/* Date - positioned above title */}
          <div className={`mb-1 ${isEven ? "md:flex md:justify-end" : ""}`}>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full w-fit">
              {experience.date}
            </span>
          </div>
          
          {/* Title with expandable indicator */}
          <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : ""}`}>
            {/* For right-side items (isEven), we want the text on the right and chevron on left of it, 
                or we can keep flow [Title] [Chevron] but aligned to right.
                Since flex-direction is row, justify-end pushes [Title] [Chevron] to the right edge.
                If we want chevron to the RIGHT of title, order is Title then Chevron.
            */}
            <h3 className="text-2xl font-serif font-semibold text-slate-900">
              {experience.organization}
            </h3>
            {isExpandable && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
          
          <div className={`flex items-center gap-2 text-slate-600 font-medium mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <span className="text-forest-600">{experience.role}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-sm text-slate-500">{experience.location}</span>
          </div>

          {/* Expandable content */}
          {isExpandable && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {experience.description && (
                <div className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {experience.subtleties && (
                <div className="mt-2 pt-3 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-2">Involvement</p>
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                    {experience.subtleties.map((item, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Non-expandable content (for other items) */}
          {!isExpandable && (
            <>
              {experience.description && (
                <div className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {experience.subtleties && (
                <div className="mt-2 pt-3 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-2">Involvement</p>
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                    {experience.subtleties.map((item, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Empty Side for Desktop Balance */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}

