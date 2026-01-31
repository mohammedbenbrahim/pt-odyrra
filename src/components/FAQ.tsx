import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What specific services does Odyrra offer?',
    answer:
      'We are a full-service creative agency. Our core pillars are Brand Strategy, Visual Identity Design, Social Media Management, Content Creation (Reels/Photos), and High-Performance Paid Ads. We handle everything from the initial concept to the final campaign launch.',
  },
  {
    question: 'Do you work with startups or established brands?',
    answer:
      'Both! We love helping startups build their visual identity from scratch, and we equally enjoy helping established brands refresh their look or scale their digital presence. Our strategies are custom-tailored to your current growth stage.',
  },
  {
    question: 'How do you measure success for a campaign?',
    answer:
      'We don’t just look at "likes." We focus on tangible metrics: Engagement Rate, Click-Through Rate (CTR), Lead Generation, and ultimately, Return on Ad Spend (ROAS). We provide monthly reports so you can see exactly how our work is driving business results.',
  },
  {
    question: 'Can you handle our video production and editing?',
    answer:
      'Yes, absolutely. Video is king right now. We have an in-house team for shooting, editing, and producing high-quality Reels, TikToks, and brand films that stop the scroll and capture attention.',
  },
  {
    question: 'What is your typical pricing model?',
    answer:
      'We offer both project-based pricing (for things like a Logo Redesign or Website) and monthly retainer packages (for ongoing Social Media Management or Paid Ads). After our initial discovery call, we will recommend the package that best fits your goals and budget.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 md:px-6 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Common <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Everything you need to know about working with Odyrra to scale your brand.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md data-[state=open]:border-blue-100 transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-blue-600 hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 pb-6 leading-relaxed font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};