import React, { useState } from 'react';
import { X, FileText, Check, Globe, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { Post, Category } from '../types';

interface SEOInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  categories: Category[];
}

export const SEOInspectorModal: React.FC<SEOInspectorModalProps> = ({
  isOpen,
  onClose,
  posts,
  categories,
}) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'serp' | 'schema'>('serp');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const origin = window.location.origin;

  // Generate real dynamic sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/ueber-mich</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
${categories
  .map(
    (c) => `  <url>
    <loc>${origin}/kategorie/${c.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
${posts
  .filter((p) => p.published)
  .map(
    (p) => `  <url>
    <loc>${origin}/blog/${p.slug}</loc>
    <lastmod>${p.updatedAt || p.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Generate real robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin

# Sitemap
Sitemap: ${origin}/sitemap.xml`;

  // Sample article for preview
  const samplePost = posts[0];

  const sampleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: samplePost?.title,
    description: samplePost?.seoDescription || samplePost?.excerpt,
    image: [samplePost?.featuredImage],
    datePublished: samplePost?.publishedAt,
    dateModified: samplePost?.updatedAt,
    author: {
      '@type': 'Person',
      name: samplePost?.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Die Häkelwelt',
      url: origin,
    },
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-3xl w-full border border-[#E5DACD] shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE0D3] bg-[#F3ECE1]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#7B8C77] text-white rounded-lg">
              <Globe className="w-4 h-4" />
            </span>
            <span className="font-editorial text-xl font-bold text-[#3D2E24]">
              SEO &amp; Indexierungs-Zentrum
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6E5A4E] hover:text-[#3D2E24] hover:bg-[#EAE0D3] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EAE0D3] bg-[#F7F2EA] px-6 gap-2 pt-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('serp')}
            className={`px-3.5 py-2.5 rounded-t-lg transition-colors ${
              activeTab === 'serp'
                ? 'bg-white text-[#3D2E24] border-t border-x border-[#EAE0D3] font-semibold'
                : 'text-[#6E5A4E] hover:text-[#3D2E24]'
            }`}
          >
            Google SERP Snippet
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3.5 py-2.5 rounded-t-lg transition-colors ${
              activeTab === 'sitemap'
                ? 'bg-white text-[#3D2E24] border-t border-x border-[#EAE0D3] font-semibold'
                : 'text-[#6E5A4E] hover:text-[#3D2E24]'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3.5 py-2.5 rounded-t-lg transition-colors ${
              activeTab === 'robots'
                ? 'bg-white text-[#3D2E24] border-t border-x border-[#EAE0D3] font-semibold'
                : 'text-[#6E5A4E] hover:text-[#3D2E24]'
            }`}
          >
            robots.txt
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-2.5 rounded-t-lg transition-colors ${
              activeTab === 'schema'
                ? 'bg-white text-[#3D2E24] border-t border-x border-[#EAE0D3] font-semibold'
                : 'text-[#6E5A4E] hover:text-[#3D2E24]'
            }`}
          >
            Schema.org JSON-LD
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'serp' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6E5A4E]">
                So erscheint dein Häkelartikel in den Google-Suchergebnissen für deutsche Nutzerinnen:
              </p>

              {/* Google Search Preview Card */}
              <div className="bg-white p-5 rounded-xl border border-[#E0D5C7] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#4d5156]">
                  <span className="w-4 h-4 rounded-full bg-[#C98A7F] text-white flex items-center justify-center text-[9px] font-bold">
                    H
                  </span>
                  <div className="truncate">
                    <span className="text-[#202124] font-medium">Die Häkelwelt</span>
                    <span className="mx-1 text-[#dadce0]">›</span>
                    <span>blog</span>
                    <span className="mx-1 text-[#dadce0]">›</span>
                    <span>{samplePost?.slug}</span>
                  </div>
                </div>

                <h4 className="text-lg text-[#1a0dab] hover:underline cursor-pointer font-medium leading-snug">
                  {samplePost?.seoTitle || samplePost?.title}
                </h4>

                <p className="text-xs text-[#4d5156] leading-relaxed">
                  {samplePost?.publishedAt} — {samplePost?.seoDescription || samplePost?.excerpt}
                </p>

                <div className="pt-2 flex gap-2 text-[11px] text-[#70757a]">
                  <span className="px-2 py-0.5 bg-[#f1f3f4] rounded">Häkelanleitung</span>
                  <span className="px-2 py-0.5 bg-[#f1f3f4] rounded">Kostenlos</span>
                  <span className="px-2 py-0.5 bg-[#f1f3f4] rounded">DIY Maschen</span>
                </div>
              </div>

              {/* SEO Checklist */}
              <div className="p-4 bg-[#F2ECE3] rounded-xl text-xs space-y-2 text-[#5C4A3E]">
                <div className="font-semibold text-[#3D2E24] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C98A7F]" />
                  Suchmaschinen-Checkliste erfüllt:
                </div>
                <ul className="space-y-1 pl-4 list-disc text-[#6E5A4E]">
                  <li>Canonical URL: Automatischer Verweis auf den Primär-Link</li>
                  <li>Open Graph Tags: Optimiert für Facebook, Pinterest &amp; WhatsApp</li>
                  <li>Title &amp; Meta-Description: Speziell für relevante deutsche Häkelbegriffe</li>
                  <li>Semantische HTML5-Struktur mit H1, H2, H3 und figure/img alt Texten</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6E5A4E]">
                  Vollständige sitemap.xml mit allen {posts.length} Artikeln und {categories.length} Kategorien:
                </span>
                <button
                  onClick={() => copyContent(sitemapXml)}
                  className="px-3 py-1 bg-white hover:bg-[#EAE0D3] border border-[#DDD0C2] rounded-md text-xs font-medium text-[#3D2E24]"
                >
                  {copied ? 'Kopiert!' : 'XML kopieren'}
                </button>
              </div>
              <pre className="p-4 bg-white rounded-xl border border-[#E0D5C7] text-[11px] font-mono text-[#3D2E24] overflow-x-auto max-h-80 leading-relaxed">
                {sitemapXml}
              </pre>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6E5A4E]">
                  robots.txt für Webcrawler (Googlebot, Bingbot, Pinterestbot):
                </span>
                <button
                  onClick={() => copyContent(robotsTxt)}
                  className="px-3 py-1 bg-white hover:bg-[#EAE0D3] border border-[#DDD0C2] rounded-md text-xs font-medium text-[#3D2E24]"
                >
                  {copied ? 'Kopiert!' : 'Kopieren'}
                </button>
              </div>
              <pre className="p-4 bg-white rounded-xl border border-[#E0D5C7] text-xs font-mono text-[#3D2E24] overflow-x-auto max-h-80 leading-relaxed">
                {robotsTxt}
              </pre>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6E5A4E]">
                  Strukturierte Daten nach Schema.org/BlogPosting:
                </span>
                <button
                  onClick={() => copyContent(JSON.stringify(sampleSchema, null, 2))}
                  className="px-3 py-1 bg-white hover:bg-[#EAE0D3] border border-[#DDD0C2] rounded-md text-xs font-medium text-[#3D2E24]"
                >
                  {copied ? 'Kopiert!' : 'JSON kopieren'}
                </button>
              </div>
              <pre className="p-4 bg-white rounded-xl border border-[#E0D5C7] text-[11px] font-mono text-[#3D2E24] overflow-x-auto max-h-80 leading-relaxed">
                {JSON.stringify(sampleSchema, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
