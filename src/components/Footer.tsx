import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
      {/* Logo with Link */}
<a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
  <img 
    src="/gallery/lll.png" 
    alt="Odyrra Logo" 
    className="w-16 h-16 object-contain" 
  />
  <span className="font-semibold text-foreground">Odyrra</span>
</a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Odyrra. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/odyrra_/"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              X
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
