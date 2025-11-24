import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ClaroCompsPage() {
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
                  Claro Comps
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-8 text-slate-600">
                  AI that turns real estate PDFs into your exact Excel template.
                </h2>
                
                {/* Demo Video Link */}
                <a 
                  href="https://www.youtube.com/watch?v=BtQa6jD_oIM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 mb-10 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <span className="font-medium">Watch Demo</span>
                </a>
              </AnimateOnScroll>
              
              {/* Key Stats */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-3xl font-semibold mb-1 text-forest-600">&lt;15s</div>
                    <div className="text-sm text-slate-700">Processing time</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-3xl font-semibold mb-1 text-forest-600">99%+</div>
                    <div className="text-sm text-slate-700">Accuracy</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right side - Product Screenshot */}
            <AnimateOnScroll animation="scale-up" delay={200}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-2 border-slate-200">
                <Image
                  src="/images/claro-comps/claro-dashboard.png"
                  alt="Claro Comps Dashboard"
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
              Why I Built This
            </h2>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  <span className="font-medium text-slate-900">Summer 2025.</span> I&apos;m interning at Stotan Industrial, and stretched with a lot of work. Live deals, memo preparations, market research and my most tedious tasks: <span className="font-semibold text-forest-600">data input</span>.
                </p>
                <p>
                  Since Q2 Broker reports were coming out in a few weeks, I was motivated to find a way to automate this tedious task of transposing each data point into our internal spreadsheets.
                </p>
                <p>
                  I thought: <span className="font-bold text-forest-600">What if I could leverage AI to structure an output that was just like our internal files?</span> Something that preserved our exact template and column structure, not just raw JSON.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-50">
                <Image
                  src="/images/claro-comps/before-after.png"
                  alt="Before and After Comparison"
                  fill
                  className="object-contain"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <p className="text-lg leading-relaxed text-slate-700 text-center italic">
                So I built it myself – nights and weekends. Three weeks later, I had an MVP. Six more weeks of iterations, and Claro Comps was running smoothly.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-slate-900">
              How It Works
            </h2>
            <p className="text-lg text-slate-500 mb-12 font-light">
              Upload your template once, and your excel format is automated forever.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2", title: "Upload Excel", subtitle: "Your exact template" },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Drop PDFs", subtitle: "Any OMs or comps" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Get Perfect Data", subtitle: "In 45 seconds" }
            ].map((card, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-forest-600 mb-3">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-900 mb-1">{card.title}</p>
                  <p className="text-xs text-slate-600">{card.subtitle}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 rounded-2xl border border-slate-100">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                The insight: AI already reads PDFs well. <span className="font-medium text-slate-900">The bottleneck was structure.</span>
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                I built a template engine that learns your exact column structure once, then applies it forever, with any document you upload.
              </p>
            </div>
          </AnimateOnScroll>
          
          {/* Product Screenshots */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              <div>
                <p className="text-base text-slate-700 mb-4 font-medium">
                  Upload your Excel template once to establish your exact column structure and formatting preferences.
                </p>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/claro-comps/template-upload.png"
                    alt="Template Upload Interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-base text-slate-700 mb-4 font-medium">
                  Drop any PDF and get perfectly structured data in your exact format in seconds.
                </p>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-50">
                  <Image
                    src="/images/claro-comps/results-screen.png"
                    alt="Results Review Interface"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Demo Video */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-serif font-medium mb-4 text-slate-900 text-center">
                  See It In Action
                </h3>
                <p className="text-sm text-slate-500 mb-6 text-center">
                  Watch the full demo to see how Claro Comps transforms PDFs into your exact Excel format
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-slate-900">
                  <iframe
                    src="https://www.youtube.com/embed/BtQa6jD_oIM"
                    title="Claro Comps Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-slate-900">
              What I Built
            </h2>
            <p className="text-lg text-slate-500 mb-12 font-light">
              Full-stack product built nights and weekends
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">Tech Stack</h3>
                <div className="space-y-2">
                  {[
                    'Next.js + TypeScript',
                    'Supabase (Postgres + Storage)',
                    'Claude API with structured output',
                    'Tailwind CSS',
                    'Built with Cursor'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-forest-600 rounded-full mr-2.5"></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">Results</h3>
                <div className="space-y-2">
                  {[
                    '200+ real documents tested',
                    '99%+ field accuracy',
                    '<15s processing time'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-forest-600 rounded-full mr-2.5"></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-forest-50 p-6 rounded-xl border border-forest-200">
              <p className="text-sm text-slate-700 italic mb-2">
                &quot;Charlie, throw these PDF&apos;s into your Comp Bot, that thing makes this process so much easier&quot;
              </p>
              <p className="text-xs text-slate-500">– Analyst at Stotan</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Closing */}
      <section className="relative py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 mb-6">
              I saw a problem consuming hours of valuable time. Three weeks later, I had an MVP. A few more weeks of iterations, and I had a solid solution.
            </p>
            <p className="text-base text-slate-600">
              Not perfect, but functional. Not a company, but proof that when you see inefficiency, you can just build a solution.
            </p>
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

