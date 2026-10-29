import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/site-config";

const linkClass = "inline-block py-1 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8 border-t border-[var(--color-divider)]/10 mt-auto">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/hpm-logo-dark.png"
              alt={siteConfig.brand.name}
              width={869}
              height={256}
              loading="lazy"
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
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li><Link href="/services/flat-management" className={linkClass}>Flat Management</Link></li>
            <li><Link href="/services/apartment-management" className={linkClass}>Apartment Management</Link></li>
            <li><Link href="/services/villa-farmhouse" className={linkClass}>Villa &amp; Farmhouse</Link></li>
            <li><Link href="/services/plot-land-management" className={linkClass}>Plot / Land Management</Link></li>
            <li><Link href="/services/commercial-property" className={linkClass}>Commercial Property</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)] h-10 flex items-center">Company</h3>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li><Link href="/about" className={linkClass}>About Us</Link></li>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={linkClass}>Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6 text-[var(--color-accent)] h-10 flex items-center">Contact</h3>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className={`${linkClass} tabular-nums`}>
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={`${linkClass} [overflow-wrap:anywhere]`}
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=17.3927101,78.4421488"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 pt-8 border-t border-white/10 text-center text-sm text-gray-400 pb-16 md:pb-0 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {siteConfig.brand.foundedYear}&ndash;{new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
        </div>
        <div>
          Designed by <a href="https://www.edonesolution.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors font-medium">eDone Solutions</a>
        </div>
      </div>
    </footer>
  );
}
