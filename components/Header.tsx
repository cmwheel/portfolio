import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-serif font-semibold text-slate-900 hover:text-forest-600 transition">
            Charlie Wheeler
          </Link>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium text-slate-700 hover:text-forest-600 transition">
              Projects
            </a>
            <a href="#experience" className="text-sm font-medium text-slate-700 hover:text-forest-600 transition">
              Experience
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

