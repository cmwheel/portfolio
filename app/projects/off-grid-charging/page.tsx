import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function OffGridChargingPage() {
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

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 to-white py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div className="md:pl-8">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-forest-700 uppercase bg-forest-50 rounded-full border border-forest-100">
                  Personal Project
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-slate-900 leading-tight">
                  Micro-Grid Charging Station Thesis
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-8 text-slate-600">
                  Can solar + batteries compete with the grid to power autonomous fleets?
                </h2>
              </AnimateOnScroll>
              
              {/* Key Stats */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-3xl font-semibold mb-1 text-forest-600">100%</div>
                    <div className="text-sm text-slate-700">Solar Powered</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-3xl font-semibold mb-1 text-forest-600">$0.25</div>
                    <div className="text-sm text-slate-700">Target per kWh</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right side - Concept Rendering */}
            <AnimateOnScroll animation="scale-up" delay={200}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-2 border-slate-200">
                <Image
                  src="/images/off-grid-charging/concept-rendering.png"
                  alt="Off-Grid Charging Station Concept"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <a 
            href="#story" 
            className="flex flex-col items-center text-slate-400 hover:text-forest-600 transition-colors group"
            aria-label="Scroll to story"
          >
            <span className="text-xs font-medium mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">The Story</span>
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

      {/* The Story */}
      <section id="story" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-slate-900">
              Why This Question Matters
            </h2>
          </AnimateOnScroll>
          
          <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
            <AnimateOnScroll animation="fade-up">
              <p>
                <span className="font-medium text-slate-900">I&apos;m fascinated by how robotaxis will reshape transportation.</span> When you remove the driver, the cost per mile drops drastically.
                 Then the question becomes: How can we make the remaining variables cheaper?
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p>
                There&apos;s another massive cost: <span className="font-medium text-forest-600">energy.</span> For autonomous fleets running 20+ hours a day, electricity cost becomes a major variable.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <p>
                When looking at California&apos;s energy prices, I realized more than half of the cost goes to taxes and grid infrastructure, not generation. The actual generation piece is relatively cheap.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-slate-900 font-medium border-l-4 border-forest-600 pl-6">
                So I asked: what if you could build an off-grid charging station—solar panels, batteries, no grid connection—that offers below-market rates to autonomous fleets?
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* The Methodology - Step by Step */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-slate-900">
              System Design Methodology
            </h2>
            <p className="text-lg text-slate-500 mb-16 font-light">
              Starting with demand and backing into the infrastructure
            </p>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-200 via-blue-200 to-amber-200 hidden md:block"></div>

            <div className="space-y-16 relative">
              {/* Step 1: Demand */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="relative flex items-start gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl font-bold text-forest-600 font-serif">1</span>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="mb-5">
                        <h3 className="text-2xl font-medium text-slate-900 mb-2">Demand Calculation</h3>
                        <p className="text-sm text-slate-500">Defining the load profile for a 24-hour autonomous fleet hub</p>
                      </div>
                      
                      {/* Inputs */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Facility Operations</p>
                          <p className="text-lg font-semibold text-slate-900">23 hours/day</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Utilization Rate</p>
                          <p className="text-lg font-semibold text-slate-900">35%</p>
                          <p className="text-xs text-slate-400 mt-1">Active charging time</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Power Infrastructure</p>
                          <p className="text-lg font-semibold text-slate-900">4 × 1.2 MW</p>
                          <p className="text-xs text-slate-400 mt-1">V4 Charging Cabinets</p>
                        </div>
                      </div>

                      {/* Formula */}
                      <div className="bg-forest-50 border-l-4 border-forest-500 p-5 rounded-lg mb-4">
                        <p className="text-xs text-forest-600 uppercase tracking-wider mb-2 font-medium">Calculation</p>
                        <p className="text-sm text-slate-700 font-mono mb-2">
                          23 hrs × 35% × (4 × 1.2 MW) = <span className="font-bold text-forest-700">38.6 MWh/day</span>
                        </p>
                      </div>

                      {/* Output */}
                      <div className="bg-forest-100 p-5 rounded-lg border-2 border-forest-300">
                        <p className="text-xs text-forest-700 uppercase tracking-wider mb-1 font-semibold">Output</p>
                        <p className="text-3xl font-bold text-forest-800">38.6 MWh</p>
                        <p className="text-sm text-forest-600 mt-1">Daily Power Demand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Arrow connector */}
              <div className="hidden md:flex justify-center -my-8 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 2: Storage */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="relative flex items-start gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl font-bold text-blue-600 font-serif">2</span>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="mb-5">
                        <h3 className="text-2xl font-medium text-slate-900 mb-2">Battery Sizing</h3>
                        <p className="text-sm text-slate-500">Calculating storage needs to bridge overnight gaps and peak demand</p>
                      </div>
                      
                      {/* Input from Step 1 */}
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                        <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">From Step 1</p>
                        <p className="text-lg font-semibold text-slate-900">38.6 MWh daily demand</p>
                      </div>

                      {/* Battery specs */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-xs text-blue-600 mb-1 uppercase tracking-wider font-medium">Capacity Per Unit</p>
                          <p className="text-lg font-semibold text-blue-800">3.9 MWh</p>
                          <p className="text-xs text-blue-600 mt-1">Tesla Megapack</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-xs text-blue-600 mb-1 uppercase tracking-wider font-medium">Units Required</p>
                          <p className="text-lg font-semibold text-blue-800">7 Megapacks</p>
                          <p className="text-xs text-blue-600 mt-1">Total: 27.3 MWh</p>
                        </div>
                      </div>

                      {/* Output */}
                      <div className="bg-blue-100 p-5 rounded-lg border-2 border-blue-300">
                        <p className="text-xs text-blue-700 uppercase tracking-wider mb-1 font-semibold">Output</p>
                        <p className="text-3xl font-bold text-blue-800">7 Megapacks</p>
                        <p className="text-sm text-blue-600 mt-1">27.3 MWh total capacity</p>
                        <p className="text-xs text-blue-500 mt-2 italic">Accounts for depth-of-discharge and safety buffers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Arrow connector */}
              <div className="hidden md:flex justify-center -my-8 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 3: Generation */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="relative flex items-start gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl font-bold text-amber-600 font-serif">3</span>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="mb-5">
                        <h3 className="text-2xl font-medium text-slate-900 mb-2">Solar Array Design</h3>
                        <p className="text-sm text-slate-500">Backing out the required DC capacity from daily energy needs</p>
                      </div>
                      
                      {/* Inputs */}
                      <div className="grid md:grid-cols-2 gap-4 mb-5">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">From Step 1</p>
                          <p className="text-lg font-semibold text-slate-900">38.6 MWh demand</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">NREL Annual Yield</p>
                          <p className="text-lg font-semibold text-slate-900">2,628 kWh/kW</p>
                          <p className="text-xs text-slate-400 mt-1">Location-specific data</p>
                        </div>
                      </div>

                      {/* Calculation flow */}
                      <div className="space-y-3 mb-5">
                        <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-lg">
                          <p className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-medium">Step 1: Required Generation</p>
                          <p className="text-sm text-slate-700 font-mono">
                            38.6 MWh ÷ System Efficiency = <span className="font-bold text-slate-900">40.5 MWh/day</span>
                          </p>
                        </div>
                        <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-lg">
                          <p className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-medium">Step 2: Daily Yield</p>
                          <p className="text-sm text-slate-700 font-mono">
                            2,628 kWh/kW ÷ 365 days = <span className="font-bold text-slate-900">7.2 kWh/kW/day</span>
                          </p>
                        </div>
                        <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-lg">
                          <p className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-medium">Step 3: Required DC Capacity</p>
                          <p className="text-sm text-slate-700 font-mono">
                            40.5 MWh ÷ 7.2 kWh/kW = <span className="font-bold text-slate-900">5.6 MW DC</span>
                          </p>
                        </div>
                      </div>

                      {/* Output */}
                      <div className="bg-slate-50 p-5 rounded-lg border-2 border-amber-400">
                        <p className="text-xs text-slate-600 uppercase tracking-wider mb-1 font-semibold">Output</p>
                        <p className="text-2xl font-bold text-slate-900 mb-2">5.6 MW DC Capacity</p>
                        <p className="text-sm text-slate-600">From here I determined panel count, acreage, and land requirements</p>
                        <p className="text-xs text-slate-500 mt-2 italic">Factored: panel efficiency, ground cover ratio, infrastructure buffers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-slate-900 text-center">
              The Pro Forma
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              I built a 25-year cash flow model testing if the unit economics can survive without subsidies.
            </p>
          </AnimateOnScroll>

          {/* Financial Model Image - Large */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mb-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <Image
                  src="/images/off-grid-charging/financial-model.png"
                  alt="20-Year Financial Model - Cash Flow, NPV, and IRR Analysis"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Key Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {/* Inputs */}
             <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-full">
                <h3 className="font-medium text-slate-900 mb-3 text-lg">The Inputs</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-forest-500">•</span>20-Year Straight-line Depreciation</li>
                  <li className="flex gap-2"><span className="text-forest-500">•</span>4% Interest Loan Assumption</li>
                  <li className="flex gap-2"><span className="text-forest-500">•</span>Inflation Escalators for OpEx & Revenue</li>
                </ul>
              </div>
            </AnimateOnScroll>

             {/* Operations */}
             <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-full">
                <h3 className="font-medium text-slate-900 mb-3 text-lg">Operational Reality</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-forest-500">•</span>Degradation modeled for panels & batteries</li>
                  <li className="flex gap-2"><span className="text-forest-500">•</span>Budgeted for maintenance inflation</li>
                  <li className="flex gap-2"><span className="text-forest-500">•</span>Ongoing land lease & insurance costs</li>
                </ul>
              </div>
            </AnimateOnScroll>

             {/* Metrics */}
             <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-forest-50 p-6 rounded-xl border border-forest-100 h-full">
                <h3 className="font-medium text-slate-900 mb-3 text-lg">The Verdict</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-forest-600">→</span>Equity NPV Calculation</li>
                  <li className="flex gap-2"><span className="text-forest-600">→</span>Internal Rate of Return (IRR)</li>
                  <li className="flex gap-2"><span className="text-forest-600">→</span><strong>Conclusion:</strong> Viable at scale.</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Sensitivity Analysis */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        {/* Full width container with generous max-width */}
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-slate-900">
                Sensitivity Analysis
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Identifying the critical thresholds for project viability.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* Left: Analysis - Takes 4/12 columns (1/3) */}
            <div className="xl:col-span-4 space-y-6">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl text-slate-900 mb-6">Highlighted Scenarios</h3>
                  
                  <div className="space-y-6">
                    {/* Bear Case */}
                    <div className="relative pl-4 border-l-4 border-red-400">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-red-900">Bear Case</h4>
                        <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Conservative</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">4.50% Equity Cost × $0.15/kWh</p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">NPV</span>
                          <span className="font-bold text-slate-900">$2.23M</span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">IRR</span>
                          <span className="font-bold text-slate-900">19.67%</span>
                        </div>
                      </div>
                    </div>

                    {/* Base Case */}
                    <div className="relative pl-4 border-l-4 border-amber-400">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-amber-900">Base Case</h4>
                        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Expected</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">4.00% Equity Cost × $0.25/kWh</p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">NPV</span>
                          <span className="font-bold text-slate-900">$11.39M</span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">IRR</span>
                          <span className="font-bold text-slate-900">38.62%</span>
                        </div>
                      </div>
                    </div>

                    {/* Best Case */}
                    <div className="relative pl-4 border-l-4 border-forest-500">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-forest-900">Best Case</h4>
                        <span className="text-xs font-medium bg-forest-100 text-forest-700 px-2 py-0.5 rounded-full">Optimistic</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">3.50% Equity Cost × $0.35/kWh</p>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">NPV</span>
                          <span className="font-bold text-slate-900">$20.55M</span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-400 uppercase tracking-wider">IRR</span>
                          <span className="font-bold text-slate-900">57.77%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights Card */}
                <div className="mt-6 bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
                  <div className="flex gap-3 mb-3">
                    <div className="mt-1 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                    <h4 className="font-medium text-blue-100">Key Insight</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Pricing power leverages returns more significantly than capital cost reductions. A <span className="text-white font-semibold">$0.05/kWh increase</span> impacts IRR more than a <span className="text-white font-semibold">0.5% reduction</span> in equity cost.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Data Table - Takes 8/12 columns (2/3) */}
            <div className="xl:col-span-8 w-full">
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-slate-50/50">
                    <h3 className="font-medium text-slate-900">Project Returns Matrix</h3>
                    <div className="text-xs text-slate-500 flex gap-4">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400"></span>Bear</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Base</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-forest-500"></span>Best</span>
                    </div>
                  </div>
                  
                  <div className="p-6 overflow-x-auto">
                    <div className="min-w-[800px]">
                      {/* Header Structure */}
                      <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 mb-4">
                        <div className="flex items-end justify-center pb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cost of<br/>Equity</span>
                        </div>
                        <div className="col-span-5">
                          <div className="bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest py-2 text-center rounded-t-lg mb-1">
                            Price per kWh
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            {['$0.15', '$0.20', '$0.25', '$0.30', '$0.35'].map((price) => (
                              <div key={price} className="bg-slate-50 py-2 text-center text-sm font-semibold text-slate-700 rounded border border-slate-100">
                                {price}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Data Rows */}
                      <div className="space-y-2">
                        {/* Row 5.00% */}
                        <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 items-stretch group">
                          <div className="bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-600 rounded border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            5.00%
                          </div>
                          {/* Data Cells */}
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$2.04M</span>
                            <span className="text-xs text-slate-400">19.25%</span>
                          </div>
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$6.52M</span>
                            <span className="text-xs text-slate-400">28.48%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$11.01M</span>
                            <span className="text-xs text-forest-600">37.72%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$15.50M</span>
                            <span className="text-xs text-forest-600">47.03%</span>
                          </div>
                          <div className="bg-forest-100/50 border border-forest-200 p-3 rounded flex flex-col items-center justify-center hover:border-forest-300 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$19.99M</span>
                            <span className="text-xs text-forest-700">56.39%</span>
                          </div>
                        </div>

                        {/* Row 4.50% */}
                        <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 items-stretch group">
                          <div className="bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-600 rounded border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            4.50%
                          </div>
                          {/* Data Cells */}
                          <div className="bg-red-50 border-2 border-red-200 p-3 rounded flex flex-col items-center justify-center relative shadow-sm transform scale-105 z-10">
                            <span className="text-sm font-bold text-red-900">$2.23M</span>
                            <span className="text-xs text-red-700">19.67%</span>
                          </div>
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$6.71M</span>
                            <span className="text-xs text-slate-400">28.92%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$11.20M</span>
                            <span className="text-xs text-forest-600">38.18%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$15.69M</span>
                            <span className="text-xs text-forest-600">47.50%</span>
                          </div>
                          <div className="bg-forest-100/50 border border-forest-200 p-3 rounded flex flex-col items-center justify-center hover:border-forest-300 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$20.18M</span>
                            <span className="text-xs text-forest-700">56.86%</span>
                          </div>
                        </div>

                        {/* Row 4.00% */}
                        <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 items-stretch group">
                          <div className="bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-600 rounded border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            4.00%
                          </div>
                          {/* Data Cells */}
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$2.41M</span>
                            <span className="text-xs text-slate-400">20.08%</span>
                          </div>
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$6.90M</span>
                            <span className="text-xs text-slate-400">29.35%</span>
                          </div>
                          <div className="bg-amber-50 border-2 border-amber-300 p-3 rounded flex flex-col items-center justify-center relative shadow-md transform scale-110 z-20">
                            <span className="text-sm font-bold text-amber-900">$11.39M</span>
                            <span className="text-xs text-amber-800">38.62%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$15.88M</span>
                            <span className="text-xs text-forest-600">47.95%</span>
                          </div>
                          <div className="bg-forest-100/50 border border-forest-200 p-3 rounded flex flex-col items-center justify-center hover:border-forest-300 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$20.37M</span>
                            <span className="text-xs text-forest-700">57.32%</span>
                          </div>
                        </div>

                        {/* Row 3.50% */}
                        <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 items-stretch group">
                          <div className="bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-600 rounded border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            3.50%
                          </div>
                          {/* Data Cells */}
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$2.60M</span>
                            <span className="text-xs text-slate-400">20.48%</span>
                          </div>
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$7.09M</span>
                            <span className="text-xs text-slate-400">29.77%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$11.57M</span>
                            <span className="text-xs text-forest-600">39.06%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$16.06M</span>
                            <span className="text-xs text-forest-600">48.40%</span>
                          </div>
                          <div className="bg-forest-100 border-2 border-forest-400 p-3 rounded flex flex-col items-center justify-center relative shadow-sm transform scale-105 z-10">
                            <span className="text-sm font-bold text-forest-900">$20.55M</span>
                            <span className="text-xs text-forest-800">57.77%</span>
                          </div>
                        </div>

                        {/* Row 3.00% */}
                        <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-2 items-stretch group">
                          <div className="bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-600 rounded border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            3.00%
                          </div>
                          {/* Data Cells */}
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$2.78M</span>
                            <span className="text-xs text-slate-400">20.88%</span>
                          </div>
                          <div className="bg-white border border-slate-100 p-3 rounded flex flex-col items-center justify-center hover:border-slate-300 transition-colors">
                            <span className="text-sm font-bold text-slate-700">$7.26M</span>
                            <span className="text-xs text-slate-400">30.18%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$11.75M</span>
                            <span className="text-xs text-forest-600">39.49%</span>
                          </div>
                          <div className="bg-forest-50/50 border border-forest-100 p-3 rounded flex flex-col items-center justify-center hover:border-forest-200 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$16.24M</span>
                            <span className="text-xs text-forest-600">48.83%</span>
                          </div>
                          <div className="bg-forest-100/50 border border-forest-200 p-3 rounded flex flex-col items-center justify-center hover:border-forest-300 transition-colors">
                            <span className="text-sm font-bold text-forest-900">$20.73M</span>
                            <span className="text-xs text-forest-700">58.21%</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-right text-xs text-slate-400">
                        *Values represent Equity NPV ($ Millions) / Equity IRR (%)
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-slate-900">
              Conclusion
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                This was a <span className="font-medium text-slate-900">curiosity project</span>—an exploration into whether off-grid charging could be economically viable for autonomous fleets.
              </p>
              <p>
                I&apos;m new to the energy space, and this model doesn&apos;t include some real-world complexities like permitting, entitlement costs, or development fees. Those soft costs could certainly impact the economics.
              </p>
              <p>
                But it&apos;s a start. As robotaxi fleets scale and utilization rates climb, bringing down the per-mile energy cost becomes critical. This is one potential solution worth exploring further as we navigate the transition to autonomous transportation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Projects Link */}
      <section className="py-12 px-6 bg-slate-50 text-center border-t border-slate-200">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-medium text-slate-600 hover:bg-forest-50 hover:text-forest-700 transition-all duration-300 border border-slate-200"
        >
          <span>←</span> Back to Portfolio
        </Link>
      </section>
    </div>
  );
}
