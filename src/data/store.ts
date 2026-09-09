import { Post, Category } from '../types';
import { defaultPosts, defaultCategories } from './seedData';

const STORAGE_KEY_POSTS = 'die_haekelwelt_posts_v4';
const STORAGE_KEY_CATEGORIES = 'die_haekelwelt_categories_v4';

const DELETED_POST_IDS = new Set(['post-1', 'post-2', 'post-3', 'post-4', 'post-5', 'post-6']);

export function getStoredPosts(): Post[] {
  try {
    // Clear old versions
    localStorage.removeItem('die_haekelwelt_posts_v1');
    localStorage.removeItem('die_haekelwelt_posts_v2');
    localStorage.removeItem('die_haekelwelt_posts_v3');
    
    const raw = localStorage.getItem(STORAGE_KEY_POSTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(defaultPosts));
      return defaultPosts;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(defaultPosts));
      return defaultPosts;
    }
    // Filter out removed posts (post-1 to post-6)
    const filtered = parsed.filter((p: Post) => !DELETED_POST_IDS.has(p.id));
    
    // Ensure panda post is present with latest content
    const updated = filtered.map((p: Post) => {
      const defaultMatch = defaultPosts.find((dp) => dp.id === p.id);
      if (defaultMatch && (p.title.startsWith('Tuto Amigurumi') || p.id === 'post-amigurumi-panda')) {
        return defaultMatch;
      }
      return p;
    });
    const missingPosts = defaultPosts.filter((dp) => !updated.some((p: Post) => p.id === dp.id));
    const finalPosts = [...missingPosts, ...updated];
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(finalPosts));
    return finalPosts;
  } catch (err) {
    console.warn('Error reading stored posts:', err);
    return defaultPosts;
  }
}

export function saveStoredPosts(posts: Post[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
  } catch (err) {
    console.warn('Error saving stored posts:', err);
  }
}

export function getStoredCategories(): Category[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(defaultCategories));
      return defaultCategories;
    }
    return JSON.parse(raw);
  } catch {
    return defaultCategories;
  }
}

export function resetToSeedData(): Post[] {
  localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(defaultPosts));
  localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(defaultCategories));
  return defaultPosts;
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
