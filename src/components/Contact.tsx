import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from 'framer-motion';

export const Contact = () => {
  // Initialize Cal.com settings
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", {
        "theme": "light",
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 text-sm font-bold tracking-widest uppercase block mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Let's talk!
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Book a time below for a free consultation.
          </p>
        </motion.div>

        {/* 👇 THE EMBEDDED CALENDAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full rounded-3xl overflow-hidden  bg-white"
        >
          <Cal 
            namespace="30min"
            calLink="mohammed-benbrahim-dverbz/30min"
            style={{ width: "100%", height: "100%", minHeight: "600px" }}
            config={{
              layout: "month_view",
              theme: "light"
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};