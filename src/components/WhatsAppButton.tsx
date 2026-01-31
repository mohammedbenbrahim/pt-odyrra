import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  // 👇 Replace with your actual WhatsApp number (International format, no +)
  const phoneNumber = "212769747484"; 
  const message = "Hello! I'm interested in Odyrra's services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <MessageCircle size={32} fill="white" className="text-white" />
      
      {/* Tooltip Label (Appears on Hover) */}
      <span className="absolute right-16 px-3 py-1 bg-white text-slate-800 text-sm font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};