import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const frameworks = [
  { label: 'React', href: '/react/', color: 'cyan' },
  { label: 'Vue', href: '/vue/', color: 'emerald' },
  { label: 'Angular', href: '/angular/', color: 'red' },
  { label: 'HTML', href: '/html/', color: 'amber' },
  { label: 'Extension', href: '/anywhere/', color: 'purple' },
] as const;

const activeFramework = 'React';

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white shrink-0 relative">
      <div className="h-12 flex items-center justify-between px-4 max-w-screen-xl mx-auto">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/assets/logo-rect.svg" alt="FillKit" className="h-6" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {frameworks.map((fw) => (
            <a
              key={fw.label}
              href={fw.href}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                fw.label === activeFramework
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {fw.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col py-2 px-4">
            {frameworks.map((fw) => (
              <a
                key={fw.label}
                href={fw.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  fw.label === activeFramework
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {fw.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
