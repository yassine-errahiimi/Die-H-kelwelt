import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_crochet_woman_1788943493532.jpg';

interface HeroProps {
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EAE7] text-[#C98A7F] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kreatives Handarbeiten &amp; DIY</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2E24] leading-[1.15] tracking-tight">
              Häkelanleitungen &amp; kreative Häkelideen
            </h1>

            <p className="text-base sm:text-lg text-[#6E5A4E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Entdecke einfache Häkelanleitungen, wunderschöne Häkelmuster und kreative DIY-Ideen für Anfänger und Fortgeschrittene.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-cta-discover"
                onClick={onDiscoverClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C98A7F] hover:bg-[#B87A6F] text-white font-medium text-base rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Anleitungen entdecken</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#827165]">
                <span className="w-2 h-2 rounded-full bg-[#7B8C77]"></span>
                <span>Kostenlose Schritt-für-Schritt Muster</span>
              </div>
            </div>
          </div>

          {/* Lifestyle Image Frame */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle warm frame accent */}
              <div className="absolute -inset-3 bg-[#F2EBE1] rounded-2xl sm:rounded-3xl -rotate-1 -z-10" />
              
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-[#E8DFD3] bg-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={heroImage}
                  alt="Frau im handgehäkelten Cardigan mit Garn und Häkelnadel im sonnigen Garten"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Visual badge: natural craft feel */}
                <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#E8DFD3] text-[11px] font-medium text-[#5C4A3E] shadow-sm">
                  100% Handgemachte Maschen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
