import React, { useState } from 'react';
import {
  Plus,
  Edit3,
  Trash2,
  Eye,
  CheckCircle,
  Clock,
  Sparkles,
  Image as ImageIcon,
  ArrowLeft,
  RotateCcw,
  Search,
  Pin,
  Save,
  Globe,
  Upload,
} from 'lucide-react';
import { Post, Category, ViewMode } from '../types';
import { generateSlug } from '../data/store';
import { defaultAuthor } from '../data/seedData';

interface AdminDashboardProps {
  posts: Post[];
  categories: Category[];
  onSavePost: (post: Post) => void;
  onDeletePost: (id: string) => void;
  onResetSeedData: () => void;
  onNavigate: (view: ViewMode) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  posts,
  categories,
  onSavePost,
  onDeletePost,
  onResetSeedData,
  onNavigate,
}) => {
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  // Form states for the article editor
  const [formData, setFormData] = useState<Partial<Post>>({});

  const startCreateNew = () => {
    const newPostTemplate: Partial<Post> = {
      id: `post-${Date.now()}`,
      title: '',
      slug: '',
      excerpt: '',
      content: '## Neues Häkelprojekt\n\nSchreibe hier die Einführung und die benötigten Materialien...\n\n### Benötigte Materialien\n- Häkelnadel Nr. 4\n- 100g Baumwollgarn\n- Wollnadel zum Vernähen\n\n### Anleitung\n1. Luftmaschenkette anschlagen...\n2. In Runden häkeln...',
      featuredImage: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1200&auto=format&fit=crop',
      featuredImageAlt: '',
      pinterestImage: '',
      pinterestTitle: '',
      pinterestDescription: '',
      category: categories[0]?.name || 'Häkelanleitungen',
      tags: ['Häkeln', 'DIY', 'Anleitung'],
      seoTitle: '',
      seoDescription: '',
      published: true,
      publishedAt: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      readingTime: '4 Min. Lesezeit',
      author: defaultAuthor,
    };
    setFormData(newPostTemplate);
    setIsCreatingNew(true);
    setEditingPost(null);
  };

  const startEdit = (post: Post) => {
    setFormData({ ...post });
    setEditingPost(post);
    setIsCreatingNew(false);
  };

  const handleTitleChange = (val: string) => {
    setFormData((prev) => {
      const generated = generateSlug(val);
      return {
        ...prev,
        title: val,
        // Auto update slug if it was never modified or equals old slug
        slug: prev.slug && prev.slug !== generateSlug(prev.title || '') ? prev.slug : generated,
        seoTitle: prev.seoTitle ? prev.seoTitle : `${val} | Die Häkelwelt`,
      };
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'featuredImage' | 'pinterestImage') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setFormData((prev) => ({
            ...prev,
            [field]: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      alert('Bitte gib mindestens einen Titel und Slug ein.');
      return;
    }

    const postToSave: Post = {
      id: formData.id || `post-${Date.now()}`,
      title: formData.title || '',
      slug: formData.slug || generateSlug(formData.title || ''),
      excerpt: formData.excerpt || '',
      content: formData.content || '',
      featuredImage: formData.featuredImage || 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1200&auto=format&fit=crop',
      featuredImageAlt: formData.featuredImageAlt || formData.title || '',
      pinterestImage: formData.pinterestImage || '',
      pinterestTitle: formData.pinterestTitle || formData.title,
      pinterestDescription: formData.pinterestDescription || formData.excerpt,
      category: formData.category || 'Häkelanleitungen',
      tags: Array.isArray(formData.tags) ? formData.tags : [],
      seoTitle: formData.seoTitle || `${formData.title} | Die Häkelwelt`,
      seoDescription: formData.seoDescription || formData.excerpt || '',
      published: formData.published ?? true,
      publishedAt: formData.publishedAt || new Date().toISOString().split('T')[0],
      createdAt: formData.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      readingTime: formData.readingTime || '5 Min. Lesezeit',
      author: formData.author || defaultAuthor,
    };

    onSavePost(postToSave);
    setIsCreatingNew(false);
    setEditingPost(null);
  };

  // Filtered posts
  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === 'published') return matchesSearch && p.published;
    if (activeFilter === 'draft') return matchesSearch && !p.published;
    return matchesSearch;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Top Breadcrumb / Return */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE0D3]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="flex items-center gap-1.5 text-xs text-[#6E5A4E] hover:text-[#C98A7F] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Blog</span>
          </button>
          <span className="text-[#DDD0C2]">|</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C98A7F]">
            Redaktionsbereich
          </span>
        </div>

        <button
          onClick={() => {
            if (confirm('Möchtest du alle Artikel auf die ursprünglichen Beispiel-Häkelanleitungen zurücksetzen?')) {
              onResetSeedData();
            }
          }}
          className="flex items-center gap-1.5 text-xs text-[#827165] hover:text-[#3D2E24] px-2.5 py-1 rounded bg-[#F2ECE3] hover:bg-[#EAE0D3]"
          title="Beispieldaten wiederherstellen"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Musterartikel zurücksetzen</span>
        </button>
      </div>

      {/* View 1: Editor Form */}
      {(isCreatingNew || editingPost) ? (
        <div className="bg-white rounded-2xl border border-[#E8DFD3] shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE0D3]">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#3D2E24]">
              {isCreatingNew ? 'Neuen Häkelartikel erstellen' : 'Häkelartikel bearbeiten'}
            </h2>
            <button
              onClick={() => {
                setIsCreatingNew(false);
                setEditingPost(null);
              }}
              className="text-xs px-3 py-1.5 bg-[#F2EBE1] hover:bg-[#EAE0D3] rounded-lg text-[#5C4A3E]"
            >
              Abbrechen
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Artikeltitel *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="z.B. Sommer-Cardigan häkeln: Leichte Muster für warme Tage"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-sm text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Slug */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  URL Slug (/blog/[slug])
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="sommer-cardigan-haekeln"
                  className="w-full px-4 py-2 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-xs font-mono text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Kategorie *
                </label>
                <select
                  value={formData.category || categories[0]?.name}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-sm text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Kurzbeschreibung (Auszug / Teaser)
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt || ''}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Ein warmer kurzer Einleitungssatz für die Blogkarten und Pinterest..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-sm text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Featured Image */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E] flex items-center justify-between">
                  <span>Titelbild (Featured Image)</span>
                  <span className="text-[10px] text-[#827165]">URL oder Datei</span>
                </label>
                <input
                  type="text"
                  value={formData.featuredImage || ''}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                  placeholder="https://... Bild-URL"
                  className="w-full px-4 py-2 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
                <label className="inline-flex items-center gap-1.5 text-xs text-[#C98A7F] cursor-pointer hover:underline">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Eigenes Foto hochladen</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, 'featuredImage')}
                  />
                </label>
                {formData.featuredImage && (
                  <div className="w-24 h-16 rounded-lg overflow-hidden border border-[#E8DFD3] mt-1">
                    <img
                      src={formData.featuredImage}
                      alt="Vorschau"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Image Alt Text */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Bild Alt-Text (Barrierefreiheit &amp; SEO)
                </label>
                <input
                  type="text"
                  value={formData.featuredImageAlt || ''}
                  onChange={(e) => setFormData({ ...formData, featuredImageAlt: e.target.value })}
                  placeholder="z.B. Nahaufnahme eines gestrickten Cardigans"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-sm text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Pinterest 2:3 Image */}
              <div className="space-y-2 p-4 bg-[#FAF6F0] rounded-xl border border-[#EAE0D3]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#E60023] flex items-center gap-1.5">
                  <Pin className="w-3.5 h-3.5" />
                  <span>Pinterest Bild (Optimal 2:3 Hochformat)</span>
                </label>
                <input
                  type="text"
                  value={formData.pinterestImage || ''}
                  onChange={(e) => setFormData({ ...formData, pinterestImage: e.target.value })}
                  placeholder="URL zum vertikalen Pin..."
                  className="w-full px-4 py-2 rounded-xl border border-[#DDD0C2] bg-white text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                />
                <label className="inline-flex items-center gap-1.5 text-xs text-[#E60023] cursor-pointer hover:underline">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Vertikales Pin-Bild hochladen</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, 'pinterestImage')}
                  />
                </label>
              </div>

              {/* Pinterest Description */}
              <div className="space-y-1.5 p-4 bg-[#FAF6F0] rounded-xl border border-[#EAE0D3]">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Pinterest Pin-Beschreibung
                </label>
                <textarea
                  rows={2}
                  value={formData.pinterestDescription || ''}
                  onChange={(e) => setFormData({ ...formData, pinterestDescription: e.target.value })}
                  placeholder="Klick-optimierter Text für die Pinterest-Suche..."
                  className="w-full px-4 py-2 rounded-xl border border-[#DDD0C2] bg-white text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                />
              </div>

              {/* Content Editor */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E] flex items-center justify-between">
                  <span>Artikelinhalt (Markdown) *</span>
                  <span className="text-[11px] text-[#827165]">
                    ## Überschrift, ### Untertitel, - Listenpunkt, **fett**
                  </span>
                </label>
                <textarea
                  rows={14}
                  required
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full font-mono text-xs sm:text-sm p-4 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-[#3D2E24] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Schlagwörter / Tags (Kommagetrennt)
                </label>
                <input
                  type="text"
                  value={Array.isArray(formData.tags) ? formData.tags.join(', ') : ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  placeholder="Cardigan häkeln, Häkelanleitungen, DIY"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* Reading time */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5C4A3E]">
                  Geschätzte Lesezeit
                </label>
                <input
                  type="text"
                  value={formData.readingTime || '5 Min. Lesezeit'}
                  onChange={(e) => setFormData({ ...formData, readingTime: e.target.value })}
                  placeholder="5 Min. Lesezeit"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDD0C2] bg-[#FAF7F2] text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
                />
              </div>

              {/* SEO Title & Description */}
              <div className="space-y-1.5 md:col-span-2 p-5 bg-[#F4EDE4] rounded-xl border border-[#EAE0D3]">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-[#7B8C77]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3D2E24]">
                    Google Suchmaschinen-Optimierung (SEO)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#5C4A3E]">SEO Titel</label>
                    <input
                      type="text"
                      value={formData.seoTitle || ''}
                      onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                      placeholder="Titel für Google Suchergebnisse..."
                      className="w-full px-3 py-2 bg-white rounded-lg border border-[#DDD0C2] text-xs text-[#3D2E24]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#5C4A3E]">Meta Description</label>
                    <input
                      type="text"
                      value={formData.seoDescription || ''}
                      onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                      placeholder="Kurze Beschreibung für Google Snippet..."
                      className="w-full px-3 py-2 bg-white rounded-lg border border-[#DDD0C2] text-xs text-[#3D2E24]"
                    />
                  </div>
                </div>
              </div>

              {/* Status Publish vs Draft */}
              <div className="md:col-span-2 flex items-center justify-between p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3]">
                <div>
                  <div className="text-sm font-semibold text-[#3D2E24]">Veröffentlichungsstatus</div>
                  <div className="text-xs text-[#6E5A4E]">
                    {formData.published
                      ? 'Der Artikel ist öffentlich auf Die Häkelwelt sichtbar.'
                      : 'Nur als interner Entwurf gespeichert.'}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, published: false })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      !formData.published
                        ? 'bg-[#EAE0D3] text-[#3D2E24] shadow-xs'
                        : 'text-[#827165] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    Entwurf
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, published: true })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      formData.published
                        ? 'bg-[#7B8C77] text-white shadow-xs'
                        : 'text-[#827165] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    Veröffentlicht
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EAE0D3]">
              <button
                type="button"
                onClick={() => {
                  setIsCreatingNew(false);
                  setEditingPost(null);
                }}
                className="px-5 py-2.5 rounded-xl border border-[#DDD0C2] text-xs font-semibold text-[#5C4A3E] hover:bg-[#F5EFE6]"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#C98A7F] hover:bg-[#B87A6F] text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Artikel speichern</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* View 2: Articles List & Overview */
        <div className="space-y-6">
          {/* Top Bar with Stats & Create Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#3D2E24]">
                Redaktion &amp; Artikel
              </h1>
              <p className="text-xs sm:text-sm text-[#6E5A4E] mt-1">
                Verwalte deine Häkelanleitungen, Pinterest-Pins und Blogbeiträge.
              </p>
            </div>

            <button
              id="admin-create-new-btn"
              onClick={startCreateNew}
              className="px-5 py-3 bg-[#C98A7F] hover:bg-[#B87A6F] text-white rounded-xl text-sm font-semibold shadow-sm flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Neuen Artikel schreiben</span>
            </button>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#EAE0D3] text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#827165] font-semibold">
                Gesamt
              </span>
              <div className="text-2xl font-bold text-[#3D2E24] mt-0.5">{posts.length}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#EAE0D3] text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#7B8C77] font-semibold">
                Veröffentlicht
              </span>
              <div className="text-2xl font-bold text-[#7B8C77] mt-0.5">
                {posts.filter((p) => p.published).length}
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#EAE0D3] text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#C98A7F] font-semibold">
                Entwürfe
              </span>
              <div className="text-2xl font-bold text-[#C98A7F] mt-0.5">
                {posts.filter((p) => !p.published).length}
              </div>
            </div>
          </div>

          {/* Filter & Search Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#EAE0D3]">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#A8988C] absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Artikel filtern..."
                className="w-full pl-9 pr-4 py-2 bg-[#FAF7F2] rounded-lg border border-[#DDD0C2] text-xs text-[#3D2E24] focus:outline-none focus:ring-2 focus:ring-[#C98A7F]"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#C98A7F] text-white'
                    : 'text-[#6E5A4E] hover:bg-[#F2ECE3]'
                }`}
              >
                Alle ({posts.length})
              </button>
              <button
                onClick={() => setActiveFilter('published')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeFilter === 'published'
                    ? 'bg-[#7B8C77] text-white'
                    : 'text-[#6E5A4E] hover:bg-[#F2ECE3]'
                }`}
              >
                Online ({posts.filter((p) => p.published).length})
              </button>
              <button
                onClick={() => setActiveFilter('draft')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeFilter === 'draft'
                    ? 'bg-[#EAE0D3] text-[#3D2E24]'
                    : 'text-[#6E5A4E] hover:bg-[#F2ECE3]'
                }`}
              >
                Entwürfe ({posts.filter((p) => !p.published).length})
              </button>
            </div>
          </div>

          {/* Articles Table / Cards */}
          <div className="bg-white rounded-2xl border border-[#EAE0D3] overflow-hidden shadow-xs">
            <div className="divide-y divide-[#F2ECE3]">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#FAF6F0] transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-[#E8DFD3]"
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold text-[#C98A7F]">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            post.published
                              ? 'bg-[#EBF2EA] text-[#4F684B]'
                              : 'bg-[#F2EBE1] text-[#827165]'
                          }`}
                        >
                          {post.published ? 'Veröffentlicht' : 'Entwurf'}
                        </span>
                      </div>

                      <h4 className="font-editorial text-lg font-bold text-[#3D2E24] truncate">
                        {post.title}
                      </h4>

                      <div className="flex items-center gap-3 text-xs text-[#827165] mt-1">
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                        {post.pinterestImage && (
                          <>
                            <span>•</span>
                            <span className="text-[#E60023] flex items-center gap-1 font-medium">
                              <Pin className="w-3 h-3" /> Pin vorhanden
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F2ECE3]">
                    <button
                      onClick={() => onNavigate({ type: 'article', slug: post.slug })}
                      className="p-2 text-[#6E5A4E] hover:text-[#3D2E24] hover:bg-[#F2ECE3] rounded-lg transition-colors"
                      title="Im Blog ansehen"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => startEdit(post)}
                      className="p-2 text-[#C98A7F] hover:bg-[#F5EAE7] rounded-lg transition-colors font-medium flex items-center gap-1"
                      title="Bearbeiten"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Möchtest du den Artikel „${post.title}“ wirklich löschen?`)) {
                          onDeletePost(post.id);
                        }
                      }}
                      className="p-2 text-[#A8988C] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Löschen"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredPosts.length === 0 && (
                <div className="py-12 text-center text-[#827165]">
                  <p className="font-editorial text-xl text-[#3D2E24]">
                    Keine Artikel gefunden
                  </p>
                  <p className="text-xs mt-1">
                    Passe deinen Suchfilter an oder klicke auf „Neuen Artikel schreiben“.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
