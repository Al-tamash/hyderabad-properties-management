import Link from "next/link";
import { siteConfig } from "@/site-config";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8 border-t border-[var(--color-divider)]/10 mt-auto">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/hpm-logo-dark.png" 
              alt={siteConfig.brand.name} 
              className="h-10 w-auto object-contain brightness-110"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {siteConfig.brand.tagline}
          </p>
          <address className="text-gray-400 text-sm not-italic">
            <p>{siteConfig.contact.officeAddress}</p>
            <p>{siteConfig.contact.workingHours}</p>
          </address>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)] h-10 flex items-center">Services</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/services/flat-management" className="hover:text-white transition-colors">Flat Management</Link></li>
            <li><Link href="/services/apartment-management" className="hover:text-white transition-colors">Apartment Management</Link></li>
            <li><Link href="/services/villa-farmhouse" className="hover:text-white transition-colors">Villa & Farmhouse</Link></li>
            <li><Link href="/services/plot-land-management" className="hover:text-white transition-colors">Plot / Land Management</Link></li>
            <li><Link href="/services/commercial-property" className="hover:text-white transition-colors">Commercial Property</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)] h-10 flex items-center">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)] h-10 flex items-center">Contact</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors tabular-nums">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                {siteConfig.contact.email.replace('@', ' (at) ')}
              </Link>
            </li>
          </ul>
          
          {/* SEO Hidden Social Links */}
          <div className="hidden">
            <a href="https://facebook.com/hyderabadpropertiesmanagement">Facebook</a>
            <a href="https://twitter.com/hyderabadpropertiesmanagement">Twitter</a>
            <a href="https://instagram.com/hyderabadpropertiesmanagement">Instagram</a>
            <a href="https://linkedin.com/company/hyderabadpropertiesmanagement">LinkedIn</a>
            <a href="https://youtube.com/@hyderabadpropertiesmanagement">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 pt-8 border-t border-white/10 text-center text-sm text-gray-500 pb-16 md:pb-0 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {siteConfig.brand.foundedYear} {siteConfig.brand.name}. All rights reserved.
        </div>
        <div>
          Designed by <a href="https://www.edonesolution.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">eDone Solutions</a>
        </div>
      </div>
    </footer>
  );
}
