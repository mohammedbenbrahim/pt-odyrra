import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <nav 
          className={`
            pointer-events-auto w-[90%] md:w-auto min-w-[300px]
            bg-white/80 backdrop-blur-xl backdrop-saturate-150 
            border border-white/20 
            rounded-full pl-4 pr-3 py-2 
            flex items-center justify-between gap-6 
            transition-all duration-300
            ${isScrolled ? 'shadow-xl shadow-black/5' : 'shadow-lg shadow-black/5'}
          `}
        >
          
          {/* LOGO */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity pl-2"
          >
            {/* 👇 FIXED: Size reduced to w-10 and path fixed (removed /public) */}
            <img 
              src="/gallery/lll.png" 
              alt="Odyrra Logo" 
              className="w-9 h-9 object-contain" 
            />
            <span className="font-bold text-slate-900 text-lg tracking-tight hidden xs:block">
              Odyrra
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-black transition-colors rounded-full hover:bg-slate-100/80"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="ml-2 rounded-full bg-black text-white hover:bg-slate-800 px-6"
              size="sm"
            >
              Contact
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              className="absolute top-24 left-5 right-5 bg-white border border-slate-200 rounded-3xl shadow-2xl p-3 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-6 py-4 text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors font-bold text-lg text-center"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="h-px bg-slate-100 my-2 mx-4" />

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-black text-white font-bold text-lg py-4 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xl shadow-slate-200"
                >
                  Book a Call
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};