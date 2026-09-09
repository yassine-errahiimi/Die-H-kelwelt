import React, { useState } from 'react';
import { X, Check, Share2, ExternalLink } from 'lucide-react';
import { PinterestIcon } from './PinterestIcon';
import { Post } from '../types';

interface PinterestPinModalProps {
  post: Post | null;
  onClose: () => void;
}

export const PinterestPinModal: React.FC<PinterestPinModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const pinImage = post.pinterestImage || post.featuredImage;
  const pinTitle = post.pinterestTitle || post.title;
  const pinDesc = post.pinterestDescription || post.excerpt;
  const articleUrl = window.location.origin + `/blog/${post.slug}`;

  // Official Pinterest Pin URL constructor
  const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    articleUrl
  )}&media=${encodeURIComponent(pinImage)}&description=${encodeURIComponent(
    `${pinTitle} - ${pinDesc}`
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-lg w-full border border-[#E5DACD] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE8DE] bg-[#F5EFE6]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#E60023] text-white rounded-full flex items-center justify-center">
              <PinterestIcon className="w-4 h-4" />
            </span>
            <span className="font-editorial text-xl font-bold text-[#3D2E24]">
              Auf Pinterest merken
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6E5A4E] hover:text-[#3D2E24] hover:bg-[#EFE8DE] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Vertical 2:3 Pin Preview */}
        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-xs text-[#6E5A4E]">
            Speichere diese Häkelanleitung auf deiner Pinterest-Pinnwand, um sie jederzeit griffbereit zu haben:
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center bg-white p-4 rounded-xl border border-[#EDE4D8] shadow-xs">
            {/* 2:3 Vertical Pin Image Preview */}
            <div className="relative w-36 sm:w-40 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 border border-[#E5DACD] bg-[#F2ECE3] shadow-inner">
              <img
                src={pinImage}
                alt={pinTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#E60023] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                Pin 2:3
              </div>
            </div>

            {/* Pin Info */}
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#C98A7F] font-semibold">
                {post.category}
              </span>
              <h4 className="font-editorial text-lg font-bold text-[#3D2E24] leading-snug">
                {pinTitle}
              </h4>
              <p className="text-xs text-[#6E5A4E] line-clamp-3">
                {pinDesc}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <a
              href={pinterestShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#E60023] hover:bg-[#D5001F] text-white font-medium text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <PinterestIcon className="w-4 h-4" />
              <span>Jetzt auf Pinterest pinnen</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-4 bg-[#EFE8DE] hover:bg-[#E5DCCE] text-[#3D2E24] font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#7B8C77]" />
                  <span className="text-[#7B8C77]">Link kopiert!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#5C4A3E]" />
                  <span>Artikel-Link kopieren</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
