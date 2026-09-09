import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Häkelanleitungen', view: { type: 'category', category: 'Häkelanleitungen' } as ViewMode },
    { label: 'Häkelideen', view: { type: 'category', category: 'Häkelideen' } as ViewMode },
    { label: 'Häkeln für Anfänger', view: { type: 'category', category: 'Für Anfänger' } as ViewMode },
    { label: 'Blog', view: { type: 'blog' } as ViewMode },
    { label: 'Über mich', view: { type: 'about' } as ViewMode },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrent = (view: ViewMode) => {
    if (view.type === 'category' && currentView.type === 'category') {
      return view.category === currentView.category;
    }
    return view.type === currentView.type;
  };

  return (
    <header className="print:hidden sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DE] transition-all">
      {/* Top micro-announcement bar: Pinterest friendly hint */}
      <div className="bg-[#F3ECE1] text-[#6B5749] text-xs py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-[#E8DFD3]">
        <Sparkles className="w-3.5 h-3.5 text-[#C98A7F]" />
        <span>Kostenlose Häkelanleitungen &amp; kreative DIY-Inspirationen für dein Zuhause</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32">
          {/* Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick({ type: 'home' })}
            className="text-left group focus:outline-none flex items-center"
          >
            <img
              src="/assets/logo.png"
              alt="Die Häkelwelt Logo"
              className="h-[80px] sm:h-[100px] w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const active = isCurrent(item.view);
              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    active
                      ? 'text-[#C98A7F] font-semibold'
                      : 'text-[#5C4A3E] hover:text-[#3D2E24]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C98A7F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Icon */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#5C4A3E] hover:text-[#3D2E24] hover:bg-[#F2EBE1] rounded-full transition-colors"
              title="Suche nach Anleitungen & Ideen"
              aria-label="Suche öffnen"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="header-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5C4A3E] hover:text-[#3D2E24] rounded-lg"
              aria-label="Menü umschalten"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EFE8DE] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const active = isCurrent(item.view);
              return (
                <button
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#F2EBE1] text-[#C98A7F] font-semibold'
                      : 'text-[#3D2E24] hover:bg-[#F5EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EFE8DE] flex items-center justify-between px-2">
            <button
              id="mobile-search-trigger"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-2 text-sm text-[#5C4A3E] hover:text-[#3D2E24] py-2 w-full"
            >
              <Search className="w-4 h-4 text-[#C98A7F]" />
              <span>Anleitungen suchen...</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
