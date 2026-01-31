import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- TYPES ---
type Category = 'All' | 'Reels' | 'Pictures' | 'Websites' | 'APP' | 'Ads' | 'Shopify' | 'BTS' | 'Podcast';

interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

// --- DATA SECTION ---
const CATEGORIES: Category[] = [
  'All', 'Reels', 'Pictures', 'Websites', 'APP', 'Ads', 'Shopify', 'BTS', 'Podcast'
];

const PROJECTS: Project[] = [
  { id: 1, title: 'Harvard School', category: 'Podcast', imageUrl: '/gallery/pd.jpg' },
  { id: 2, title: '2M', category: 'Pictures', imageUrl: '/gallery/2m.jpg' },
  { id: 3, title: 'Auto Hall UX/UI', category: 'APP', imageUrl: '/gallery/app.png' },
  { id: 4, title: 'Auto Hall', category: 'Pictures', imageUrl: '/gallery/ssi.jpg' },
  { id: 5, title: '2M Production', category: 'BTS', imageUrl: '/gallery/pp.jpg' },
  { id: 6, title: 'Agency Redesign', category: 'Websites', imageUrl: '/gallery/ag.png' },
  { id: 7, title: 'Ads', category: 'Ads', imageUrl: '/gallery/shopify.jpg' },
  { id: 8, title: 'E-commerce Redesign', category: 'Websites', imageUrl: '/gallery/brutt.png' },
  { id: 9, title: 'Tissot', category: 'BTS', imageUrl: '/gallery/tis.jpg' },
];

// --- COMPONENT SECTION ---
export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  
  // Filter logic
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Selected <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
             A curated collection of visual stories and digital experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {/* 👇 UPDATED LINE BELOW: grid-cols-2 for mobile, gap-3 for tighter spacing */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // 👇 UPDATED: Added md: prefixes to handle hover states better on touch devices
                className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500"
              >
                {/* Image Handling */}
                {imageErrors.has(project.id) ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200 text-slate-400">
                    <span className="text-2xl md:text-4xl mb-2">🖼️</span>
                    <span className="text-[10px] md:text-xs font-mono uppercase">Image Not Found</span>
                  </div>
                ) : (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Arrow Button */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} className="md:w-5 md:h-5" />
                </div>

                {/* Text Content */}
                {/* 👇 UPDATED: Adjusted padding (p-4) and text sizes for the 2-col layout */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-1 md:mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};