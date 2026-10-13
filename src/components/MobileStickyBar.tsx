"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/site-config";

export function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.brand.name}, I would like to consult regarding my property.`)}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-background)] border-t border-[var(--color-divider)] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="flex h-16">
        <a 
          href={`tel:${siteConfig.contact.phone}`} 
          className="flex-1 flex items-center justify-center gap-2 text-[var(--color-primary)] font-semibold border-r border-[var(--color-divider)] hover:bg-[var(--color-divider)]/20 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Direct
        </a>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
