import React from 'react';
import creatorAvatar from '../assets/images/creator_avatar_1788943509294.jpg';
import heroImage from '../assets/images/hero_crochet_woman_1788943493532.jpg';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { PinterestIcon } from './PinterestIcon';
import { ViewMode } from '../types';

interface AboutViewProps {
  onNavigate: (view: ViewMode) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C98A7F]">
            Die Geschichte hinter Die Häkelwelt
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#3D2E24]">
            Hallo, ich bin Sophie
          </h1>
          <p className="text-base sm:text-lg text-[#6E5A4E] leading-relaxed">
            Häkelliebhaberin, DIY-Enthusiastin und Verfechterin von gemütlicher, handgemachter Maschenmode.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-2 bg-[#F2EBE1] rounded-3xl rotate-2 -z-10" />
              <img
                src={creatorAvatar}
                alt="Sophie Baum portrait"
                referrerPolicy="no-referrer"
                className="w-full aspect-square rounded-2xl object-cover border border-[#E8DFD3] shadow-md"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-[#5C4A3E] leading-relaxed text-sm sm:text-base">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#3D2E24]">
              Warum ich Häkeln so sehr liebe
            </h2>
            <p>
              Ich habe vor über 10 Jahren meine erste Häkelnadel von meiner Großmutter geschenkt bekommen. Was damals mit krummen Topflappen und ungleichmäßigen Luftmaschenketten begann, ist heute mein liebster kreativer Ausgleich zum hektischen Alltag.
            </p>
            <p>
              Mit <strong>Die Häkelwelt</strong> möchte ich zeigen, dass Häkeln modern, zeitlos und wunderbar meditativ ist. Meine Anleitungen sind so gestaltet, dass du dich nicht durch komplizierte Abkürzungen kämpfen musst, sondern sofort Freude am Entstehen deiner eigenen Handarbeit hast.
            </p>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-2xl border border-[#EAE0D3] space-y-2 text-center">
            <span className="inline-block p-2.5 bg-[#F5EAE7] text-[#C98A7F] rounded-full mb-1">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#3D2E24]">
              Für Anfänger verständlich
            </h3>
            <p className="text-xs text-[#6E5A4E] leading-relaxed">
              Jedes Muster wird schrittweise erklärt, mit Maschenproben und Tipps, damit dein Projekt garantiert gelingt.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#EAE0D3] space-y-2 text-center">
            <span className="inline-block p-2.5 bg-[#EAF2E9] text-[#7B8C77] rounded-full mb-1">
              <Heart className="w-5 h-5" />
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#3D2E24]">
              Natürliche Materialien
            </h3>
            <p className="text-xs text-[#6E5A4E] leading-relaxed">
              Ich liebe Merinowolle, Bio-Baumwolle, Leinen und langlebige Holz-Häkelnadeln aus fairen Quellen.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#EAE0D3] space-y-2 text-center">
            <span className="inline-block p-2.5 bg-[#F8EFE9] text-[#E60023] rounded-full mb-1">
              <PinterestIcon className="w-5 h-5" />
            </span>
            <h3 className="font-editorial text-xl font-bold text-[#3D2E24]">
              Pinterest &amp; DIY Community
            </h3>
            <p className="text-xs text-[#6E5A4E] leading-relaxed">
              Lass dich inspirieren, speichere deine Lieblingsideen auf Pinterest und teile deine Maschen mit Gleichgesinnten.
            </p>
          </div>
        </div>

        {/* CTA to Blog */}
        <div className="p-8 sm:p-10 bg-[#FAF4EE] rounded-3xl border border-[#E8DFD3] text-center space-y-4">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#3D2E24]">
            Bereit für dein nächstes Häkelprojekt?
          </h2>
          <p className="text-sm text-[#6E5A4E] max-w-lg mx-auto">
            Stöbere durch unsere neuesten kostenlosen Häkelanleitungen und finde dein neues Lieblingsstück.
          </p>
          <button
            onClick={() => onNavigate({ type: 'blog' })}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#C98A7F] hover:bg-[#B87A6F] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
          >
            <span>Zu allen Anleitungen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
