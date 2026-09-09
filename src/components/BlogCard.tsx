import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { PinterestIcon } from './PinterestIcon';
import { Post } from '../types';

interface BlogCardProps {
  post: Post;
  onClick: () => void;
  onPinterestPin?: (e: React.MouseEvent, post: Post) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick, onPinterestPin }) => {
  // Format date nicely in German
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article
      id={`blog-card-${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EDE4D8] hover:border-[#DFCFC0] hover:shadow-md transition-all duration-300"
    >
      {/* Image Container with Pinterest Save Button */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#F3ECE1]">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt || post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2]/95 backdrop-blur-sm text-[#5C4A3E] rounded-full border border-[#E8DFD3] shadow-xs">
            {post.category}
          </span>
        </div>

        {/* Pinterest Quick Pin Button */}
        {onPinterestPin && (
          <button
            onClick={(e) => onPinterestPin(e, post)}
            className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-[#E60023] hover:text-white text-[#E60023] rounded-full shadow-sm transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            title="Auf Pinterest merken"
            aria-label="Auf Pinterest pinnen"
          >
            <PinterestIcon className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Meta Line: Date & Reading time */}
          <div className="flex items-center gap-3 text-xs text-[#827165]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C98A7F]" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C98A7F]" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={onClick}
            className="font-editorial text-xl sm:text-2xl font-bold text-[#3D2E24] group-hover:text-[#C98A7F] transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#6E5A4E] line-clamp-3 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>

        {/* Read Article CTA */}
        <div className="pt-5 mt-4 border-t border-[#F5EFE6] flex items-center justify-between">
          <button
            onClick={onClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3D2E24] group-hover:text-[#C98A7F] transition-colors"
          >
            <span>Artikel lesen</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <span className="text-xs text-[#8E7E73] italic">
            Von {post.author.name}
          </span>
        </div>
      </div>
    </article>
  );
};
