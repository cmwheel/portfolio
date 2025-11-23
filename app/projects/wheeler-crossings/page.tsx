import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function WheelerCrossingsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Close Button - Fixed Top Right */}
      <Link 
        href="/"
        className="fixed top-6 right-6 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center hover:bg-forest-50 hover:border-forest-200 transition-all duration-300 group shadow-sm hover:shadow-md"
        aria-label="Close and return to homepage"
      >
        <svg 
          className="w-5 h-5 text-slate-600 group-hover:text-forest-600 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>

      {/* Hero Section - Project Snapshot */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 to-white py-16 px-6 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Summary */}
            <div className="md:pl-6">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-wider text-forest-700 uppercase bg-forest-50 rounded-full border border-forest-100">
                  Stotan Capstone Project
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-5 text-slate-900 leading-tight">
                  Industrial Development Capstone
                </h1>
                <h2 className="text-lg md:text-xl font-light mb-2 text-slate-600">
                  703,620 SF Industrial Development
                </h2>
                <p className="text-sm md:text-base mb-8 text-slate-500 font-light">
                  Pataskala, OH (Columbus MSA) | Summer 2025
                </p>
              </AnimateOnScroll>
              
              {/* Key Stats Grid */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-semibold mb-1 text-forest-600">47.7</div>
                    <div className="text-sm font-medium text-slate-700">Acres</div>
                    <div className="text-xs text-slate-500 mt-1">$115k/acre</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-semibold mb-1 text-forest-600">$63M</div>
                    <div className="text-sm font-medium text-slate-700">Project Cost</div>
                    <div className="text-xs text-slate-500 mt-1">$89.56 PSF</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-semibold mb-1 text-forest-600">7.80%</div>
                    <div className="text-sm font-medium text-slate-700">Yield on Cost</div>
                    <div className="text-xs text-slate-500 mt-1">$6.98 NNN Rent</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-semibold mb-1 text-forest-600">23.9%</div>
                    <div className="text-sm font-medium text-slate-700">Levered IRR</div>
                    <div className="text-xs text-slate-500 mt-1">1.60x Equity Multiple</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right side - Project Picture */}
            <AnimateOnScroll animation="scale-up" delay={200}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <Image
                  src="/images/wheeler-crossings/photos/project-hero.jpg"
                  alt="Wheeler Crossings Project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        
        {/* Bouncing Arrow Down */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <a 
            href="#assignment" 
            className="flex flex-col items-center text-slate-400 hover:text-forest-600 transition-colors group"
            aria-label="Scroll to project journey"
          >
            <span className="text-xs font-medium mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">The Journey</span>
            <svg 
              className="w-6 h-6 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 2 - The Assignment */}
      <section id="assignment" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-slate-900">
                The Assignment
              </h2>
              <div className="space-y-5 text-slate-600 text-base leading-relaxed">
                <p>
                  My capstone assignment: take a swing at a development deal.
                </p>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Pick a market",
                    "Find a site",
                    "Underwrite a project",
                    "Present to the Investment Committee"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-forest-50 text-forest-600 flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-l-4 border-forest-600 pl-6 space-y-3">
                  <p className="font-medium text-slate-900">
                    I talked to each market officer and built a scoring matrix.
                  </p>
                  <p className="text-base">
                    Population growth, job growth, reindustrialization activity, manufacturing workforce, logistics reach — Columbus ranked highest across the board.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="relative w-full rounded-lg overflow-hidden bg-slate-100 shadow-lg">
                <Image
                  src="/images/wheeler-crossings/photos/project-assignment.jpg"
                  alt="Summer Analyst Project Overview - U.S. Market Selection"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Columbus */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-slate-900 text-center">
              Why Columbus?
            </h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <AnimateOnScroll animation="scale-up" className="order-2 md:order-1">
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/wheeler-crossings/market-factors-map.jpg"
                  alt="Market Factors - Midwest Growth"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200} className="order-1 md:order-2">
              <div className="space-y-6">
                {[
                  { number: "1", title: "Population Growth in Midwest", subtitle: "#1 Ranking" },
                  { number: "2", title: "Job & GDP Growth in Midwest", subtitle: "#1 Ranking" },
                  { number: "3", title: "Reindustrialization Wave", subtitle: "Anduril, Intel, Honda/LG" },
                  { number: "4", title: "Deep Manufacturing Workforce", subtitle: "Legacy industrial base" },
                  { number: "5", title: "Best-in-class Logistics Reach", subtitle: "46% of U.S. population in 1 day" }
                ].map((item) => (
                  <div key={item.number} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white text-forest-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-sm border border-slate-100 group-hover:border-forest-200 group-hover:scale-110 transition-all duration-300">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Story Beat */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto space-y-3">
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Everyone was looking at the Smile States — Texas, Georgia, Florida.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-900 font-medium">
                I was looking for fundamentals and a supply/demand imbalance. Columbus checked both boxes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 4 - Submarket Selection */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-slate-900">
              Submarket Selection
            </h2>
            <h3 className="text-lg text-slate-500 mb-10 font-light">
              Zeroing In on Etna Township
            </h3>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-forest-50 p-6 rounded-2xl h-full flex flex-col justify-center border border-forest-100">
                <div className="text-4xl font-bold text-forest-600 mb-3">2.9%</div>
                <p className="text-base text-slate-900 font-medium mb-2">
                  Licking County vacancy in modern bulk
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Etna Township (A growing logistics hub) had zero available buildings over 100,000 SF.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scale-up" delay={200}>
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-sm bg-slate-50">
                <Image
                  src="/images/wheeler-crossings/vacancy-chart.jpg"
                  alt="Licking County Modern Bulk Vacancy"
                  fill
                  className="object-contain"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="bg-white border-l-4 border-slate-900 pl-6 py-2 space-y-2">
              <p className="text-base text-slate-700 leading-relaxed">
                I spent days analyzing each Columbus submarket supply and demand factors. I talked to brokers. I talked to our market officer.
              </p>
              <p className="text-base text-slate-900 font-medium leading-relaxed">
                Etna made perfect sense: a growing large-user demand (from I-70) and positioned to capture overflow from New Albany&apos;s datacenter boom, just 15 minutes north.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5 - Finding the Site */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-slate-900">
              Finding the Site
            </h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { title: "47.7 acres", subtitle: "Row-crop farmland within Corporate Park, giving tax abatement" },
              { title: "PM Zoned", subtitle: "Planned Manufacturing" },
              { title: "1 mile", subtitle: "To full I-70 interchange" }
            ].map((card, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 h-full">
                  <div className="text-xl font-semibold text-slate-900 mb-2">{card.title}</div>
                  <p className="text-sm text-slate-500">{card.subtitle}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image
                src="/images/wheeler-crossings/site-aerial.jpg"
                alt="Site Aerial with Add-On Parcel"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
                <h3 className="text-sm font-bold uppercase tracking-wider text-forest-600 mb-3">The Seller</h3>
                <p className="text-base text-slate-900">
                  A third-generation farmer who had recently inherited the farm from his grandfather.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
                <h3 className="text-sm font-bold uppercase tracking-wider text-forest-600 mb-3">The Deal</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>Competition (82 acres)</span>
                    <span className="line-through">$80,000/acre</span>
                  </div>
                  <div className="flex justify-between items-center text-base font-medium text-slate-900">
                    <span>My Offer (47.7 acres)</span>
                    <span className="text-forest-600">$105,000/acre</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2"></p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <p className="text-base text-slate-700 leading-relaxed">
                I found Kyle&apos;s phone number through public records and cold called him.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                He&apos;d recently inherited the farm and was open to offers — looking to get out of the farming business.
              </p>
              <p className="text-base text-slate-900 font-medium leading-relaxed">
                Off-market. Through direct outreach. That&apos;s how this deal came together.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 6 - Site Plan & Product */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-slate-900">
              Site Plan & Product
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in">
            <div className="relative h-[480px] rounded-2xl overflow-hidden mb-10 bg-slate-50 border border-slate-100">
              <Image
                src="/images/wheeler-crossings/photos/project-plan.jpg"
                alt="Full Site Plan - Buildings 1 & 2"
                fill
                className="object-contain"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Building 1 */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-5">Building 1</h3>
                <div className="space-y-4">
                  {[
                    { label: "Square Footage", value: "170,100 SF" },
                    { label: "Loading Docks", value: "54 docks" },
                    { label: "Building Depth", value: "210'" },
                    { label: "FAR", value: "33.9%" },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500">{stat.label}</span>
                      <span className="text-base font-medium text-slate-900">{stat.value}</span>
                    </div>
                  ))}
                  <p className="text-sm text-forest-600 font-medium pt-2">
                    Speculative small-bay rear-load for supply-chain tenants
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Building 2 */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-5">Building 2</h3>
                <div className="space-y-4">
                  {[
                    { label: "Square Footage", value: "533,520 SF" },
                    { label: "Loading Docks", value: "128 docks" },
                    { label: "Building Depth", value: "470'" },
                    { label: "Trailer Parking", value: "156 trailers" },
                    { label: "FAR", value: "33.9%" },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500">{stat.label}</span>
                      <span className="text-base font-medium text-slate-900">{stat.value}</span>
                    </div>
                  ))}
                  <p className="text-sm text-forest-600 font-medium pt-2">
                    Built for large logistics users – efficient cross-dock
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 7 - Underwriting */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-slate-900">
              Underwriting
            </h2>
            <h3 className="text-lg text-slate-500 mb-10 font-light">Verified Inputs & Assumptions</h3>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { img: "construction-costs", label: "Competing Development" },
              { img: "rent-comps", label: "Lease Comps" },
              { img: "sewer-map", label: "Land Sale Comps" }
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="scale-up" delay={i * 100}>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-2 text-center">
                    {item.label}
                  </p>
                  <div className="relative h-[220px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={`/images/wheeler-crossings/${item.img}.jpg`}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-base font-medium text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Personally verified major inputs:
              </h4>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-1">Land basis</p>
                    <p className="text-base text-slate-900">$7.80 PSF</p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-1">Rent comps</p>
                    <p className="text-base text-slate-900">$6.98 PSF blended </p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-1">Hard costs</p>
                    <p className="text-base text-slate-900">$68–72 PSF</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-1">Sewer</p>
                    <p className="text-base text-slate-900">Confirmed costs with water district</p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold text-forest-600 uppercase tracking-wider mb-1">Impact fees</p>
                    <p className="text-base text-slate-900">Confirmed directly with city planner</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="mt-6 bg-slate-900 p-6 rounded-2xl space-y-3">
              <p className="text-white text-base font-medium">
                Result: 7.80% YOC on $89.56 total cost PSF
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                We typically target a 125 BPS spread on exit cap for this risk profile. This deal hit a 155 BPS spread.
              </p>
              <p className="text-slate-200 text-sm font-medium leading-relaxed">
                The money is made on the buy. Nail the land basis, and the rest follows.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 8 - Return Sensitivity */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-slate-900">
              Return Sensitivity
            </h2>
            <h3 className="text-lg text-slate-500 mb-10 font-light">The &quot;Money Slide&quot;</h3>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in">
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-10 bg-slate-50 border border-slate-100">
              <Image
                src="/images/wheeler-crossings/sensitivity-table.jpg"
                alt="Return Sensitivity Analysis"
                fill
                className="object-contain"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100 h-full">
                <h4 className="text-sm font-bold uppercase tracking-wider text-forest-600 mb-3">Base Case</h4>
                <p className="text-sm mb-5 text-slate-600">$6.98 rent + 6.25% cap</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-slate-900">23.9%</span>
                  <span className="text-sm font-medium text-slate-500">IRR</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-slate-900">1.60x</span>
                  <span className="text-sm font-medium text-slate-500">Multiple</span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-full">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Stress Case</h4>
                <p className="text-sm mb-5 text-slate-600">$6.48 rent + 6.75% cap</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-slate-900">7.25%</span>
                  <span className="text-sm font-medium text-slate-500">YOC</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">Still delivers positive IRR</p>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </section>

      {/* Section 9 - IC Pitch */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-slate-900">
              Investment Committee
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up">
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-10 shadow-lg">
              <Image
                src="/images/wheeler-crossings/photos/project-pitch.jpg"
                alt="Investment Committee Presentation"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full bg-forest-50 text-forest-700 text-sm font-semibold mb-3">August 18, 2025</div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">Final Presentation to Stotan IC</h3>
                <p className="text-base text-slate-700">
                  I wrote and submitted the LOI to the land owner on the day of my pitch to IC.
                </p>
              </div>

              <div className="text-center space-y-2 pt-3 border-t border-slate-100">
                <p className="text-lg font-medium text-slate-900">The deal is being actively pursued and terms are being negotiated.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 10 - Closing */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-white">
                Explore More Projects
              </h2>
              <p className="text-base text-slate-300 max-w-2xl mx-auto">
                Check out other work I&apos;ve built, from AI-powered tools to energy economics analysis.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Claro Comps Project */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <Link 
                href="/projects/claro-comps"
                className="group block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-forest-200 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold tracking-wider text-forest-700 uppercase bg-forest-50 rounded-full border border-forest-100">
                      AI Project
                    </div>
                    <h3 className="text-xl font-serif font-medium text-slate-900 mb-2 group-hover:text-forest-600 transition-colors">
                      Claro Comps
                    </h3>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-forest-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  AI-powered PDF extraction tool that transforms real estate comps into your exact Excel template in under 15 seconds.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">99%+ Accuracy</span>
                  <span className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">&lt;15s Processing</span>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Energy Project */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <Link 
                href="/projects/off-grid-charging"
                className="group block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-forest-200 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold tracking-wider text-forest-700 uppercase bg-forest-50 rounded-full border border-forest-100">
                      Personal Project
                    </div>
                    <h3 className="text-xl font-serif font-medium text-slate-900 mb-2 group-hover:text-forest-600 transition-colors">
                      Micro-Grid Charging Station
                    </h3>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-forest-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Can solar + batteries compete with the grid to power autonomous vehicle fleets? A financial modeling exploration.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">Financial Modeling</span>
                  <span className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">Energy Economics</span>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-4">
                Want to learn more about this project or discuss opportunities?
              </p>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-medium text-slate-600 hover:bg-forest-50 hover:text-forest-700 transition-all duration-300 border border-slate-200 shadow-sm"
              >
                <span>←</span> Back to Portfolio
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Projects Link */}
      <section className="py-12 px-6 bg-white text-center border-t border-slate-200">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 text-sm font-medium text-slate-600 hover:bg-forest-50 hover:text-forest-700 transition-all duration-300"
        >
          <span>←</span> Back to Portfolio
        </Link>
      </section>
    </div>
  );
}
