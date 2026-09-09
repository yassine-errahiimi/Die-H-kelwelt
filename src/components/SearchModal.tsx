import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, ArrowRight } from 'lucide-react';
import { Post, ViewMode } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  onNavigate: (view: ViewMode) => void;
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  posts,
  onNavigate,
  initialQuery = '',
}) => {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, initialQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const results = cleanQuery
    ? posts.filter((post) => {
        return (
          post.published &&
          (post.title.toLowerCase().includes(cleanQuery) ||
            post.excerpt.toLowerCase().includes(cleanQuery) ||
            post.category.toLowerCase().includes(cleanQuery) ||
            post.content.toLowerCase().includes(cleanQuery) ||
            post.tags.some((t) => t.toLowerCase().includes(cleanQuery)))
        );
      })
    : [];

  const quickKeywords = [
    'Cardigan',
    'Granny Square',
    'Anfänger',
    'Wolle',
    'Maschen',
    'Sommer',
    'Deko',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/45 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full border border-[#E8DFD3] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EAE0D3] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#C98A7F] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suchbegriff eingeben (z.B. Cardigan, Granny Square, Anfänger)..."
            className="w-full bg-transparent text-[#3D2E24] text-base placeholder-[#A8988C] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8A796D] hover:text-[#3D2E24] rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1 bg-[#F2EBE1] hover:bg-[#EAE0D3] text-[#5C4A3E] rounded-md font-medium"
          >
            Schließen
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-5 py-3 bg-[#F6F0E7] border-b border-[#EAE0D3] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#827165] font-semibold whitespace-nowrap">Beliebt:</span>
          {quickKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2.5 py-1 bg-white hover:bg-[#FAF7F2] text-[#5C4A3E] hover:text-[#C98A7F] rounded-full border border-[#E5DACD] whitespace-nowrap transition-colors"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {cleanQuery ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <div className="text-xs text-[#827165] px-2 font-medium">
                  {results.length} Häkelanleitung{results.length === 1 ? '' : 'en'} gefunden
                </div>

                {results.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      onNavigate({ type: 'article', slug: post.slug });
                      onClose();
                    }}
                    className="p-3.5 bg-white hover:bg-[#FAF4EE] rounded-xl border border-[#EAE0D3] cursor-pointer transition-all flex gap-4 items-center group"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#C98A7F]">
                        {post.category}
                      </span>
                      <h4 className="font-editorial text-lg font-bold text-[#3D2E24] group-hover:text-[#C98A7F] transition-colors truncate">
                        {post.title}
                      </h4>
                      <p className="text-xs text-[#6E5A4E] line-clamp-1 mt-0.5">
                        {post.excerpt}
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#B8A89A] group-hover:text-[#C98A7F] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[#827165]">
                <p className="font-editorial text-xl text-[#3D2E24] mb-1">
                  Keine Häkelideen gefunden für „{query}“
                </p>
                <p className="text-xs">
                  Versuche es mit Begriffen wie „Cardigan“, „Granny Square“ oder „Wolle“.
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-10 text-[#827165]">
              <p className="font-editorial text-lg text-[#3D2E24] mb-1">
                Wonach suchst du heute?
              </p>
              <p className="text-xs text-[#827165]">
                Finde Anleitungen für Cardigans, Decken, Anfänger-Tipps und Dekorationen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
