"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/site-config";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.brand.name}, I would like to know more about your property management services.`)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[var(--color-primary)] text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
    </a>
  );
}
