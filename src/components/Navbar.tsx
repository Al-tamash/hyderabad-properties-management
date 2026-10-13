"use client";

import Link from "next/link";
import { siteConfig } from "@/site-config";
import { Phone, MessageCircle, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.brand.name}, I would like to know more about your services.`)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/hpm-logo-transparent.png" 
            alt={siteConfig.brand.name} 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`font-medium transition-colors ${pathname === "/" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"}`}>Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className={`flex items-center gap-1 font-medium transition-colors py-2 ${pathname.startsWith("/services") ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </div>
            
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-[var(--color-divider)] rounded-md py-2 flex flex-col z-50">
                <Link href="/services/flat-management" className={`px-4 py-2 hover:bg-[var(--color-background)] transition-colors ${pathname === "/services/flat-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-foreground)]"}`}>Flat Management</Link>
                <Link href="/services/apartment-management" className={`px-4 py-2 hover:bg-[var(--color-background)] transition-colors ${pathname === "/services/apartment-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-foreground)]"}`}>Apartment Management</Link>
                <Link href="/services/villa-farmhouse" className={`px-4 py-2 hover:bg-[var(--color-background)] transition-colors ${pathname === "/services/villa-farmhouse" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-foreground)]"}`}>Villa & Farmhouse</Link>
                <Link href="/services/plot-land-management" className={`px-4 py-2 hover:bg-[var(--color-background)] transition-colors ${pathname === "/services/plot-land-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-foreground)]"}`}>Plot / Land Management</Link>
                <Link href="/services/commercial-property" className={`px-4 py-2 hover:bg-[var(--color-background)] transition-colors ${pathname === "/services/commercial-property" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-foreground)]"}`}>Commercial Property</Link>
              </div>
            )}
          </div>

          <Link href="/about" className={`font-medium transition-colors ${pathname === "/about" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"}`}>About Us</Link>
          <Link href="/contact" className={`font-medium transition-colors ${pathname === "/contact" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"}`}>Contact</Link>
          
          <div className="flex items-center gap-4 ml-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 hover:bg-[var(--color-accent)]/90 transition-colors">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-[var(--color-primary)]" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--color-divider)] bg-[var(--color-background)] p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" className={`${pathname === "/" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-primary)] font-medium"}`} onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="flex flex-col gap-2">
            <span className={`font-medium flex items-center justify-between ${pathname.startsWith("/services") ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-primary)]"}`} onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </span>
            {servicesOpen && (
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-[var(--color-divider)] ml-2">
                <Link href="/services/flat-management" className={`text-sm py-1 ${pathname === "/services/flat-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)]"}`} onClick={() => setIsOpen(false)}>Flat Management</Link>
                <Link href="/services/apartment-management" className={`text-sm py-1 ${pathname === "/services/apartment-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)]"}`} onClick={() => setIsOpen(false)}>Apartment Management</Link>
                <Link href="/services/villa-farmhouse" className={`text-sm py-1 ${pathname === "/services/villa-farmhouse" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)]"}`} onClick={() => setIsOpen(false)}>Villa & Farmhouse</Link>
                <Link href="/services/plot-land-management" className={`text-sm py-1 ${pathname === "/services/plot-land-management" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)]"}`} onClick={() => setIsOpen(false)}>Plot / Land Management</Link>
                <Link href="/services/commercial-property" className={`text-sm py-1 ${pathname === "/services/commercial-property" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-muted)]"}`} onClick={() => setIsOpen(false)}>Commercial Property</Link>
              </div>
            )}
          </div>

          <Link href="/about" className={`${pathname === "/about" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-primary)] font-medium"}`} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-primary)] font-medium"}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
