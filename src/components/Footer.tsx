import React from 'react';
import { Heart, Mail, Sparkles } from 'lucide-react';
import { PinterestIcon } from './PinterestIcon';
import { ViewMode, Category } from '../types';

interface FooterProps {
  categories: Category[];
  onNavigate: (view: ViewMode) => void;
  onOpenSEOInspector?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onNavigate,
}) => {
  return (
    <footer className="print:hidden bg-[#F2ECE3] border-t border-[#E5DACD] text-[#5C4A3E] mt-24">
      {/* Newsletter / Pinterest Banner */}
      <div className="border-b border-[#E5DACD] bg-[#FAF6F0] py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EAE7] text-[#C98A7F] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" /> Häkelpost &amp; Inspiration
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2E24] mb-3">
            Neue Häkelanleitungen direkt in dein Postfach
          </h3>
          <p className="text-sm sm:text-base text-[#6E5A4E] max-w-xl mx-auto mb-6">
            Erhalte kostenlose Maschenanleitungen, saisonale DIY-Muster und exklusive Tipps direkt von Sophie. Kein Spam, nur echte Häkelliebe.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Vielen Dank fürs Eintragen! Wir haben dir eine Bestätigungs-E-Mail gesendet.');
            }}
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-2"
          >
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-[#DDD0C2] text-sm text-[#3D2E24] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C98A7F] text-white rounded-lg text-sm font-medium hover:bg-[#B87A6F] transition-colors shadow-sm"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="font-editorial text-2xl font-bold text-[#3D2E24] tracking-tight">
              Die Häkelwelt
            </div>
            <p className="text-sm leading-relaxed text-[#6E5A4E]">
              Dein deutsches Häkelmagazin für einfache Häkelanleitungen, moderne Granny Squares, gemütliche Maschenmode und kreative DIY-Ideen für dein Zuhause.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8DDD0] hover:bg-[#C98A7F] hover:text-white transition-colors text-xs font-medium text-[#3D2E24]"
                title="Folge Die Häkelwelt auf Pinterest"
              >
                <PinterestIcon className="w-3.5 h-3.5 text-[#E60023]" />
                <span>Auf Pinterest merken</span>
              </a>
            </div>
          </div>

          {/* Col 2: Beliebte Kategorien */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#3D2E24]">
              Kategorien
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate({ type: 'category', category: cat.name });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#C98A7F] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Häufige Themen */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#3D2E24]">
              Beliebte Suchthemen
            </h4>
            <ul className="space-y-2 text-sm text-[#6E5A4E]">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'category', category: 'Für Anfänger' })}
                  className="hover:text-[#C98A7F] transition-colors text-left"
                >
                  Häkeln für Anfänger (Maschenschule)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'category', category: 'Kleidung' })}
                  className="hover:text-[#C98A7F] transition-colors text-left"
                >
                  Cardigan häkeln (Sommer &amp; Winter)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'category', category: 'Häkelideen' })}
                  className="hover:text-[#C98A7F] transition-colors text-left"
                >
                  Granny Squares &amp; Bohemian Style
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'category', category: 'Home & Deko' })}
                  className="hover:text-[#C98A7F] transition-colors text-left"
                >
                  DIY Häkeldeko &amp; Aufbewahrung
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-[#E5DACD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#827165] gap-4">
          <p>© {new Date().getFullYear()} Die Häkelwelt – Mit viel Geduld &amp; Handarbeit gestaltet.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert('Impressum: Die Häkelwelt Redaktion, Musterstraße 12, 10115 Berlin. Kontakt: hallo@die-haekelwelt.de')}
              className="hover:underline"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => alert('Datenschutz: Wir schätzen deine Privatsphäre. Alle Blogdaten und Lesezeichen werden direkt im Browser gespeichert.')}
              className="hover:underline"
            >
              Datenschutz
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#C98A7F]">
              Handmade with <Heart className="w-3 h-3 fill-[#C98A7F]" /> in Deutschland
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
