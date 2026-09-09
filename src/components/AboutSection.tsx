import React from 'react';
import creatorAvatar from '../assets/images/creator_avatar_1788943509294.jpg';
import { Heart, Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-10 sm:py-14 bg-[#F5EFE6] border-y border-[#EAE0D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DFD3] shadow-sm">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#C98A7F] shadow-sm">
              <img
                src={creatorAvatar}
                alt="Sophie Baum – Gründerin von Die Häkelwelt"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#C98A7F] text-white p-1.5 rounded-full shadow-sm" title="Mit Liebe handgemacht">
              <Heart className="w-3.5 h-3.5 fill-white" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left space-y-2.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C98A7F]">
                Hinter den Maschen
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#3D2E24]">
              Hallo, ich bin Sophie
            </h2>

            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed font-normal">
              Ich liebe Häkeln, kreative DIY-Projekte und schöne Dinge, die mit den eigenen Händen entstehen. Auf <em>Die Häkelwelt</em> teile ich Häkelanleitungen, Inspirationen und Tipps rund ums Häkeln.
            </p>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="text-xs font-semibold text-[#C98A7F] hover:text-[#B87A6F] underline underline-offset-4 transition-colors"
                >
                  Mehr über meine Häkelreise erfahren →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
