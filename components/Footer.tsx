import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 sm:py-12 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Charlie Wheeler</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Building the infrastructure for autonomy.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="mailto:cmwheeler2@wisc.edu" className="hover:text-forest-600 transition-colors">
                  cmwheeler2@wisc.edu
                </a>
              </li>
              <li>
                <a href="tel:+19257087218" className="hover:text-forest-600 transition-colors">
                  (925) 708-7218
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Social</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a 
                  href="https://www.linkedin.com/in/charliemwheeler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-forest-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/charliewheeler" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-forest-600 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-forest-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-forest-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="/resume/Wheeler_Charlie_Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-forest-600 transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Charlie Wheeler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

