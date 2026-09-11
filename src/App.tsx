import React, { useState, useEffect } from 'react';
import {
  Header
} from './components/Header';
import {
  Footer
} from './components/Footer';
import {
  Hero
} from './components/Hero';
import {
  AboutSection
} from './components/AboutSection';
import {
  BlogCard
} from './components/BlogCard';
import {
  ArticleView
} from './components/ArticleView';
import {
  AdminDashboard
} from './components/AdminDashboard';
import {
  SearchModal
} from './components/SearchModal';
import {
  PinterestPinModal
} from './components/PinterestPinModal';
import {
  SEOInspectorModal
} from './components/SEOInspectorModal';
import {
  AboutView
} from './components/AboutView';
import {
  Post,
  Category,
  ViewMode
} from './types';
import {
  getStoredPosts,
  saveStoredPosts,
  getStoredCategories,
  resetToSeedData
} from './data/store';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { PinterestIcon } from './components/PinterestIcon';

export default function App() {
  const [posts, setPosts] = useState<Post[]>(() => getStoredPosts());
  const [categories] = useState<Category[]>(() => getStoredCategories());
  const [currentView, setCurrentView] = useState<ViewMode>({ type: 'home' });
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('Alle');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pinnedPost, setPinnedPost] = useState<Post | null>(null);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/admin') {
        setCurrentView({ type: 'admin' });
      } else if (path === '/ueber-mich' || path === '/about') {
        setCurrentView({ type: 'about' });
      } else if (path === '/blog') {
        setCurrentView({ type: 'blog' });
      } else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setCurrentView({ type: 'article', slug });
      } else if (path.startsWith('/kategorie/')) {
        const catSlug = path.replace('/kategorie/', '');
        const matched = categories.find((c) => c.slug === catSlug);
        if (matched) {
          setCurrentView({ type: 'category', category: matched.name });
        } else {
          setCurrentView({ type: 'home' });
        }
      } else {
        setCurrentView({ type: 'home' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, [categories]);

  const navigateTo = (view: ViewMode) => {
    setCurrentView(view);
    let path = '/';
    if (view.type === 'admin') path = '/admin';
    else if (view.type === 'about') path = '/ueber-mich';
    else if (view.type === 'blog') path = '/blog';
    else if (view.type === 'article') path = `/blog/${view.slug}`;
    else if (view.type === 'category') {
      const cat = categories.find((c) => c.name === view.category);
      path = `/kategorie/${cat?.slug || view.category.toLowerCase()}`;
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Article handlers for Admin
  const handleSavePost = (updatedPost: Post) => {
    const exists = posts.some((p) => p.id === updatedPost.id);
    let newPosts: Post[];
    if (exists) {
      newPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    } else {
      newPosts = [updatedPost, ...posts];
    }
    setPosts(newPosts);
    saveStoredPosts(newPosts);
  };

  const handleDeletePost = (postId: string) => {
    const newPosts = posts.filter((p) => p.id !== postId);
    setPosts(newPosts);
    saveStoredPosts(newPosts);
  };

  const handleResetSeedData = () => {
    const defaultData = resetToSeedData();
    setPosts(defaultData);
  };

  // Find active article if in article view
  const currentArticle =
    currentView.type === 'article'
      ? posts.find((p) => p.slug === currentView.slug) || posts[0]
      : null;

  // Filtered posts for home / blog / category
  const filteredPosts = posts.filter((p) => {
    if (!p.published && currentView.type !== 'admin') return false;
    if (currentView.type === 'category') {
      return p.category === currentView.category;
    }
    if (activeCategoryFilter !== 'Alle') {
      return p.category === activeCategoryFilter;
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#3D2E24] font-sans antialiased">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {currentView.type === 'home' && (
          <div>
            {/* Hero Section with Crochet Lifestyle Image */}
            <Hero
              onDiscoverClick={() => {
                const el = document.getElementById('main-blog-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* About / Female Creator Section */}
            <AboutSection onLearnMore={() => navigateTo({ type: 'about' })} />

            {/* MAIN BLOG SECTION ("Neueste Häkelideen") */}
            <section
              id="main-blog-section"
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C98A7F] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aktuelle Anleitungen &amp; Muster</span>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#3D2E24]">
                    Neueste Häkelideen
                  </h2>
                </div>

                {/* Category Filter Pills for quick filtering */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
                  <button
                    onClick={() => setActiveCategoryFilter('Alle')}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
                      activeCategoryFilter === 'Alle'
                        ? 'bg-[#3D2E24] text-white shadow-xs'
                        : 'bg-[#F2ECE3] text-[#5C4A3E] hover:bg-[#EAE0D3]'
                    }`}
                  >
                    Alle
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryFilter(cat.name)}
                      className={`px-3.5 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
                        activeCategoryFilter === cat.name
                          ? 'bg-[#C98A7F] text-white shadow-xs'
                          : 'bg-[#F2ECE3] text-[#5C4A3E] hover:bg-[#EAE0D3]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Blog Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => navigateTo({ type: 'article', slug: post.slug })}
                    onPinterestPin={(e, p) => {
                      e.stopPropagation();
                      setPinnedPost(p);
                    }}
                  />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-16 text-center text-[#827165]">
                  <p className="font-editorial text-2xl text-[#3D2E24]">
                    Keine Beiträge in dieser Kategorie
                  </p>
                  <button
                    onClick={() => setActiveCategoryFilter('Alle')}
                    className="mt-3 text-xs font-semibold text-[#C98A7F] underline underline-offset-4"
                  >
                    Alle Häkelanleitungen anzeigen
                  </button>
                </div>
              )}

              {/* Pinterest Callout Section */}
              <div className="mt-16 bg-[#F5ECE8] border border-[#E8DFD3] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex items-center gap-4 text-center md:text-left">
                  <div className="p-3.5 bg-[#E60023] text-white rounded-2xl flex-shrink-0 shadow-sm flex items-center justify-center">
                    <PinterestIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#3D2E24]">
                      Folgst du Die Häkelwelt schon auf Pinterest?
                    </h3>
                    <p className="text-sm text-[#6E5A4E] mt-1 max-w-xl">
                      Über 500+ vertikale Häkel-Pins, Musterdiagramme, Farbkombinationen und schnelle DIY-Maschen für deine tägliche Inspiration.
                    </p>
                  </div>
                </div>

                <a
                  href="https://de.pinterest.com/Sophie_die/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#E60023] hover:bg-[#D5001F] text-white rounded-xl font-semibold text-sm shadow-xs transition-colors flex items-center gap-2.5 whitespace-nowrap"
                >
                  <PinterestIcon className="w-4 h-4" />
                  <span>Auf Pinterest folgen</span>
                </a>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: BLOG LISTING */}
        {currentView.type === 'blog' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C98A7F]">
                Das Häkelmagazin
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#3D2E24]">
                Alle Häkelanleitungen &amp; Artikel
              </h1>
              <p className="text-base text-[#6E5A4E]">
                Entdecke alle kostenlosen Anleitungen, Maschentipps und kreativen DIY-Projekte.
              </p>
            </div>

            {/* Categories bar */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-10 text-xs">
              <button
                onClick={() => setActiveCategoryFilter('Alle')}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategoryFilter === 'Alle'
                    ? 'bg-[#3D2E24] text-white'
                    : 'bg-[#F2ECE3] text-[#5C4A3E] hover:bg-[#EAE0D3]'
                }`}
              >
                Alle Artikel
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategoryFilter === cat.name
                      ? 'bg-[#C98A7F] text-white'
                      : 'bg-[#F2ECE3] text-[#5C4A3E] hover:bg-[#EAE0D3]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => navigateTo({ type: 'article', slug: post.slug })}
                  onPinterestPin={(e, p) => {
                    e.stopPropagation();
                    setPinnedPost(p);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: CATEGORY VIEW */}
        {currentView.type === 'category' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C98A7F]">
                Kategorie
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#3D2E24]">
                {currentView.category}
              </h1>
              <p className="text-base text-[#6E5A4E]">
                {categories.find((c) => c.name === currentView.category)?.description ||
                  `Alle aktuellen Häkelideen und Anleitungen im Bereich ${currentView.category}.`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => navigateTo({ type: 'article', slug: post.slug })}
                  onPinterestPin={(e, p) => {
                    e.stopPropagation();
                    setPinnedPost(p);
                  }}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 text-[#827165]">
                <p className="font-editorial text-2xl text-[#3D2E24]">
                  Noch keine Artikel in dieser Kategorie
                </p>
                <button
                  onClick={() => navigateTo({ type: 'blog' })}
                  className="mt-4 px-6 py-2.5 bg-[#C98A7F] text-white rounded-xl text-xs font-semibold"
                >
                  Zu allen Häkelanleitungen
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 4: ARTICLE DETAIL PAGE */}
        {currentView.type === 'article' && currentArticle && (
          <ArticleView
            post={currentArticle}
            allPosts={posts}
            onNavigate={navigateTo}
            onOpenPinterest={(p) => setPinnedPost(p)}
          />
        )}

        {/* VIEW 5: ABOUT PAGE */}
        {currentView.type === 'about' && (
          <AboutView onNavigate={navigateTo} />
        )}

        {/* VIEW 6: ADMIN DASHBOARD */}
        {currentView.type === 'admin' && (
          <AdminDashboard
            posts={posts}
            categories={categories}
            onSavePost={handleSavePost}
            onDeletePost={handleDeletePost}
            onResetSeedData={handleResetSeedData}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        categories={categories}
        onNavigate={navigateTo}
        onOpenSEOInspector={() => setSeoModalOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        posts={posts}
        onNavigate={navigateTo}
        initialQuery={searchQuery}
      />

      {/* Pinterest Pin Modal */}
      <PinterestPinModal
        post={pinnedPost}
        onClose={() => setPinnedPost(null)}
      />

      {/* SEO & Sitemap Inspector Modal */}
      <SEOInspectorModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
        posts={posts}
        categories={categories}
      />
    </div>
  );
}
