import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-5 overflow-hidden">
      
      {/* 👇 FIXED BACKGROUND: 
          1. Changed 'to-blue-50' to 'to-blue-100' for better visibility.
          2. Removed 'via-white' so the gradient is smoother top-to-bottom.
      */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-white to-blue-100"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #dbeafe 100%)' }} 
      />
      
      {/* Optional: Floating Blur Blob (Reduced opacity slightly) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm shadow-blue-500/5 transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-blue-600 text-[10px] md:text-xs font-extrabold tracking-[0.15em] uppercase">
              Next-Gen Branding Agency
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]"
        >
          Visual Stories
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            That Convert
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Odyrra transforms scaling brands through high-impact visual storytelling and performance-led digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection('#contact')}
            size="lg"
            className="rounded-full px-8 h-14 text-base bg-black text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-200"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book a Discovery Call
          </Button>
          
          <Button
            onClick={() => scrollToSection('#projects')}
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base border-slate-200 bg-white/50 hover:bg-white hover:text-blue-600 transition-all"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};