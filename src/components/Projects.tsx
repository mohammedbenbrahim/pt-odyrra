import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- TYPES ---
type Category =
  | 'All'
  | 'Reels'
  | 'Pictures'
  | 'Websites'
  | 'APP'
  | 'Ads'
  | 'Shopify'
  | 'BTS'
  | 'Project';

interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

// --- DATA ---
const CATEGORIES: Category[] = [
  'All',
  'Reels',
  'Websites',
  'APP',
  'Ads',
  'BTS',
  'Project',
];

const PROJECTS: Project[] = [
  { id: 1, title: 'WeCare', category: 'Reels', imageUrl: '/gallery/re.mp4' },
  { id: 2, title: 'Nomade', category: 'Reels', imageUrl: '/gallery/r1.mp4' },
  { id: 3, title: 'coolers', category: 'Reels', imageUrl: '/gallery/fr.mp4' },
  { id: 4, title: 'Harvard School', category: 'Project', imageUrl: '/gallery/pd.jpg' },
  { id: 5, title: '2M Rachid Show', category: 'Project', imageUrl: '/gallery/ds1.png' },
  { id: 6, title: 'Auto Hall UX/UI', category: 'APP', imageUrl: '/gallery/app.png' },
  { id: 7, title: 'Auto Hall', category: 'Project', imageUrl: '/gallery/ssi.jpg' },
  { id: 8, title: '2M Production', category: 'Project', imageUrl: '/gallery/pp.jpg' },
  { id: 9, title: 'Agency Redesign', category: 'Websites', imageUrl: '/gallery/ag.png' },
  { id: 10, title: ' Shopify Ads', category: 'Ads', imageUrl: '/gallery/shopify.jpg' },
  { id: 11, title: 'E-commerce Redesign', category: 'Websites', imageUrl: '/gallery/brutt.png' },
  { id: 12, title: 'Tissot', category: 'BTS', imageUrl: '/gallery/tis.jpg' },
  { id: 13, title: 'Facebook Manager Ads', category: 'Ads', imageUrl: '/gallery/ad.JPG' },


];

// --- HELPERS ---
const isVideo = (url: string) =>
  url.endsWith('.mp4') || url.endsWith('.webm');

// --- COMPONENT ---
export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [mediaErrors, setMediaErrors] = useState<Set<number>>(new Set());

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleMediaError = (id: number) => {
    setMediaErrors((prev) => new Set(prev).add(id));
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Selected <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A curated collection of visual stories and digital experiences.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 scale-105'
                  : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
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
                className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* MEDIA */}
                {mediaErrors.has(project.id) ? (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Media not found
                  </div>
                ) : isVideo(project.imageUrl) ? (
                  <video
                    src={project.imageUrl}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => handleMediaError(project.id)}
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => handleMediaError(project.id)}
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* ICON */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight size={18} />
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 w-full p-4 md:p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-white">
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
