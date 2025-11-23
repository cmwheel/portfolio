"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PhilosophyCarousel from "@/components/PhilosophyCarousel";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleCardClick = (projectTitle: string) => {
    setOpenModal(projectTitle);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest-600 text-center">
            See what I&apos;ve worked on
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-semibold text-slate-900 text-center">
            Projects
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="lg:row-span-2 h-full">
            <ProjectCard
              title="Industrial Development Capstone"
              badge="Internship"
              description="703,620 SF Industrial Development"
              large={true}
              skills={["Underwriting", "Land Acquisition", "Financial Analysis", "Due Diligence", "Market Research"]}
              image="/images/logistics-project.jpg"
              highlights={{
                "IRR": "23.9%",
                "Project Cost": "$63M",
                "YOC": "7.80%"
              }}
              href="/projects/wheeler-crossings"
              highlighted={true}
            />
          </div>
          <ProjectCard
            title="Claro Comps"
            badge="AI Project"
            description="AI-powered PDF extraction for commercial real estate comps"
            skills={["Next.js", "Claude API", "Supabase"]}
            href="/projects/claro-comps"
            highlighted={true}
          />
          <ProjectCard
            title="Micro-Grid Charging Station Thesis"
            badge="Personal Project"
            description="Can solar + batteries power autonomous fleets?"
            skills={["Financial Modeling", "Energy Economics", "Excel"]}
            href="/projects/off-grid-charging"
            border={true}
          />
          <ProjectCard
            title="GPTour"
            badge="Personal Project"
            description="AI tour guide project"
            skills={[]}
            border={true}
          />
          <ProjectCard
            title="Nocturn"
            badge="Coming Soon"
            description="the future of vehicle maintenance"
            dark={true}
            showLockIcon={true}
          />
        </div>
      </section>

      <ExperienceTimeline />

      <section id="philosophy" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Side */}
            <div className="lg:col-span-7 relative">
              <div className="mb-8">
                <span className="inline-block w-12 h-0.5 bg-forest-300 mb-6"></span>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 mb-2">
                  Philosophy
                </p>
              </div>
              
              <div className="relative z-10">
                {/* Decorative quote mark */}
                <div className="absolute -top-10 -left-6 text-forest-100 text-8xl font-serif leading-none select-none -z-10 opacity-50">
                  &ldquo;
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-serif text-left">
                  I&apos;ve always been drawn to <span className="font-medium text-forest-700 relative inline-block">building things<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span>, whether it&apos;s in tech, real estate, or the infrastructure that shapes how people live and move. <span className="font-medium text-forest-700 relative inline-block">Curiosity<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span> drives me and pushes me to explore how systems work and how better design can create efficiency and sustainability. I&apos;m motivated by entrepreneurship and the process of turning ideas into something real. I care about <span className="font-medium text-forest-700 relative inline-block">mission driven teams<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span> and the momentum that comes from working toward a shared vision. My goal is to help build a future that feels <span className="font-medium text-forest-700 relative inline-block">more abundant<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span>, <span className="font-medium text-forest-700 relative inline-block">connected<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span>, and <span className="font-medium text-forest-700 relative inline-block">hopeful<span className="absolute bottom-1 left-0 w-full h-[2px] bg-forest-200/50"></span></span>.
                </p>
              </div>
            </div>

            {/* Image/Visual Side */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out bg-slate-100">
              <PhilosophyCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Modals for each project */}
      <ProjectModal
        isOpen={openModal === "Micro-Grid Charging Station Thesis"}
        onClose={handleCloseModal}
        title="Micro-Grid Charging Station Thesis"
      />
    </main>
  );
}

