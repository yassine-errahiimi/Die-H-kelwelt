import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles, Tag, ChevronRight, Printer } from 'lucide-react';
import { PinterestIcon } from './PinterestIcon';
import { Post, ViewMode } from '../types';
import { BlogCard } from './BlogCard';

interface ArticleViewProps {
  post: Post;
  allPosts: Post[];
  onNavigate: (view: ViewMode) => void;
  onOpenPinterest: (post: Post) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  post,
  allPosts,
  onNavigate,
  onOpenPinterest,
}) => {
  // Update document title and meta for SEO
  useEffect(() => {
    document.title = `${post.seoTitle || post.title} | Die Häkelwelt`;
    
    // Add structured data JSON-LD (schema.org BlogPosting)
    const scriptId = 'article-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: [post.featuredImage],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Die Häkelwelt',
        logo: {
          '@type': 'ImageObject',
          url: window.location.origin + '/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': window.location.origin + `/blog/${post.slug}`,
      },
    };

    script.text = JSON.stringify(structuredData);

    return () => {
      document.title = 'Die Häkelwelt | Häkelanleitungen, Muster & kreative Häkelideen';
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [post]);

  // Find 3 related articles (prefer same category, exclude current)
  const relatedArticles = allPosts
    .filter((p) => p.id !== post.id && p.published)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Render markdown-like content cleanly with H2, H3, lists, quotes
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inList = false;

    const flushList = (keyPrefix: number) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${keyPrefix}`} className="my-5 space-y-2 pl-6 list-disc marker:text-[#C98A7F] text-[#5C4A3E]">
            {currentList.map((item, idx) => (
              <li key={idx} className="leading-relaxed pl-1" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        currentList = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('– ')) {
        inList = true;
        const prefixLength = trimmed.startsWith('– ') ? 2 : 2;
        const formatted = trimmed
          .substring(prefixLength)
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#3D2E24] font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic text-[#5C4A3E]">$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-[#F2EBE1] px-1.5 py-0.5 rounded text-xs font-mono text-[#824438]">$1</code>');
        currentList.push(formatted);
        return;
      } else {
        if (inList) {
          flushList(index);
        }
      }

      if (trimmed.startsWith('💡 ') || trimmed.startsWith('👉 ')) {
        const parsed = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#3D2E24] font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic text-[#5C4A3E]">$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-[#ECE4D8] px-1.5 py-0.5 rounded text-xs font-mono text-[#824438]">$1</code>');

        elements.push(
          <div
            key={index}
            className="my-5 p-4 bg-[#FAF4ED] border-l-4 border-[#C98A7F] rounded-r-xl text-sm sm:text-base text-[#5C4A3E] leading-relaxed shadow-xs"
            dangerouslySetInnerHTML={{ __html: parsed }}
          />
        );
      } else if (trimmed.startsWith('# ')) {
        elements.push(
          <h2 key={index} className="font-editorial text-2xl sm:text-3xl font-bold text-[#3D2E24] mt-10 mb-4 pt-2">
            {trimmed.replace('# ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={index} className="font-editorial text-xl sm:text-2xl font-semibold text-[#3D2E24] mt-8 mb-3">
            {trimmed.replace('## ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={index} className="font-editorial text-lg sm:text-xl font-semibold text-[#3D2E24] mt-7 mb-3">
            {trimmed.replace('### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-base sm:text-lg font-semibold text-[#3D2E24] mt-6 mb-2">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(
          <hr key={index} className="my-8 border-t border-[#EAE0D3]" />
        );
      } else if (trimmed.startsWith('![') && trimmed.includes('](') && trimmed.endsWith(')')) {
        const match = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (match) {
          const altText = match[1];
          const imageUrl = match[2];
          elements.push(
            <div
              key={index}
              className="my-8 flex justify-center"
            >
              <img
                src={imageUrl}
                alt={altText}
                referrerPolicy="no-referrer"
                className="max-w-full h-auto rounded-xl shadow-sm border border-[#E8DFD3]"
              />
            </div>
          );
        }
      } else if (trimmed.length > 0) {
        const parsed = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#3D2E24] font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic text-[#5C4A3E]">$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-[#F2EBE1] px-1.5 py-0.5 rounded text-xs font-mono text-[#824438]">$1</code>')
          .replace(/\[([^\]]+)\]\((https:\/\/www\.stitchfiddle\.com\/[^)]+)\)/g, (match, text, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-[#F5EAE7] hover:bg-[#E8C5BE] text-[#C98A7F] font-semibold rounded-xl border border-[#E8C5BE] transition-all shadow-sm cursor-pointer" style="text-decoration: none;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              <span>${text}</span>
            </a>`;
          });

        elements.push(
          <p
            key={index}
            className="text-base sm:text-[17px] text-[#5C4A3E] leading-[1.75] my-4 font-normal"
            dangerouslySetInnerHTML={{ __html: parsed }}
          />
        );
      }
    });

    if (inList) {
      flushList(lines.length);
    }

    return elements;
  };

  return (
    <div className="pt-6 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="print:hidden flex items-center gap-2 text-xs text-[#827165] mb-6">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-[#C98A7F] transition-colors"
          >
            Startseite
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#B8A89A]" />
          <button
            onClick={() => onNavigate({ type: 'category', category: post.category })}
            className="hover:text-[#C98A7F] transition-colors"
          >
            {post.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#B8A89A]" />
          <span className="text-[#3D2E24] font-medium truncate max-w-[200px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 mb-8 text-center sm:text-left">
          {/* Category Pill */}
          <div>
            <button
              onClick={() => onNavigate({ type: 'category', category: post.category })}
              className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#F5EAE7] text-[#C98A7F] rounded-full hover:bg-[#E8C5BE] transition-colors"
            >
              {post.category}
            </button>
          </div>

          {/* H1 Title */}
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2E24] leading-[1.2]">
            {post.title}
          </h1>

          {/* Excerpt Lead */}
          <p className="text-lg sm:text-xl text-[#6E5A4E] leading-relaxed italic font-editorial">
            {post.excerpt}
          </p>

          {/* Author, Date & Reading time */}
          <div className="pt-4 border-t border-[#EAE0D3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-[#C98A7F]"
              />
              <div>
                <div className="text-sm font-semibold text-[#3D2E24]">
                  {post.author.name}
                </div>
                <div className="text-xs text-[#827165]">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#827165]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C98A7F]" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C98A7F]" />
                <span>{post.readingTime}</span>
              </span>
              <span className="print:hidden">•</span>
              <button
                id="article-header-print-btn"
                onClick={() => window.print()}
                className="print:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EBE1] hover:bg-[#EAE0D3] text-[#3D2E24] rounded-lg text-xs font-medium transition-colors cursor-pointer"
                title="Häkelanleitung drucken"
              >
                <Printer className="w-3.5 h-3.5 text-[#C98A7F]" />
                <span>Drucken</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm mb-10 bg-[#F3ECE1]">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/10] object-cover"
          />

          {/* Top-right Pinterest Button */}
          <button
            onClick={() => onOpenPinterest(post)}
            className="print:hidden absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-[#E60023] hover:bg-[#D5001F] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <PinterestIcon className="w-3.5 h-3.5" />
            <span>Pin merken</span>
          </button>
        </div>

        {/* Pinterest Traffic & Print Quick Action Banner */}
        <div className="print:hidden bg-[#FAF4EE] border border-[#E8DFD3] rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 bg-[#E60023] rounded-full text-white flex-shrink-0 flex items-center justify-center">
              <PinterestIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#3D2E24]">
                Merk dir diesen Häkelbeitrag auf Pinterest oder drucke ihn aus!
              </h4>
              <p className="text-xs text-[#6E5A4E]">
                So hast du die Anleitung mit allen Maschenangaben direkt griffbereit bei deinem Garnkorb.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            <button
              id="article-banner-print-btn"
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-white hover:bg-[#F2ECE3] text-[#3D2E24] border border-[#DDD0C2] text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
              title="Druckversion der Anleitung starten"
            >
              <Printer className="w-4 h-4 text-[#C98A7F]" />
              <span>Anleitung drucken</span>
            </button>
            <button
              id="article-banner-pin-btn"
              onClick={() => onOpenPinterest(post)}
              className="px-5 py-2.5 bg-[#E60023] hover:bg-[#D5001F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <PinterestIcon className="w-3.5 h-3.5" />
              <span>Jetzt pinnen</span>
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <main className="prose prose-stone max-w-none">
          {renderContent(post.content)}
        </main>

        {/* Vertical Pinterest Pin Section inside the article (Pinterest 2:3 image) */}
        {post.pinterestImage && (
          <div className="my-12 p-6 bg-[#F8F2EA] rounded-2xl border border-[#E8DFD3]">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-44 aspect-[2/3] rounded-xl overflow-hidden border border-[#DDD0C2] shadow-sm flex-shrink-0">
                <img
                  src={post.pinterestImage}
                  alt={`Pinterest Pin Grafik: ${post.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C98A7F] inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Pinterest Grafik für deine Pinnwand
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#3D2E24]">
                  {post.pinterestTitle || post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5A4E] leading-relaxed">
                  {post.pinterestDescription || post.excerpt}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenPinterest(post)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E60023] hover:bg-[#D5001F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                  >
                    <PinterestIcon className="w-3.5 h-3.5" />
                    <span>Auf Pinterest pinnen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 mt-8 border-t border-[#EAE0D3] flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#827165] flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#C98A7F]" />
              Themen:
            </span>
            {post.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onNavigate({ type: 'search', query: tag })}
                className="text-xs px-3 py-1 bg-[#F2EBE1] hover:bg-[#EAE0D3] text-[#5C4A3E] rounded-full transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* "Das könnte dir auch gefallen" Related articles */}
        {relatedArticles.length > 0 && (
          <section className="print:hidden pt-12 mt-12 border-t border-[#EAE0D3]">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C98A7F] font-semibold">
                Mehr Inspirationen
              </span>
              <h3 className="font-editorial text-3xl font-bold text-[#3D2E24]">
                Das könnte dir auch gefallen
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relPost) => (
                <BlogCard
                  key={relPost.id}
                  post={relPost}
                  onClick={() => {
                    onNavigate({ type: 'article', slug: relPost.slug });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onPinterestPin={(e) => {
                    e.stopPropagation();
                    onOpenPinterest(relPost);
                  }}
                />
              ))}
            </div>

            {/* CTA: Mehr Häkelideen entdecken → /blog */}
            <div className="text-center pt-12">
              <button
                onClick={() => {
                  onNavigate({ type: 'blog' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF7F2] hover:bg-[#F2EBE1] text-[#3D2E24] border border-[#DDD0C2] rounded-xl font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Mehr Häkelideen entdecken</span>
                <ArrowRight className="w-4 h-4 text-[#C98A7F]" />
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
