"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/site-config";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/services/flat-management", label: "Flat Management" },
  { href: "/services/apartment-management", label: "Apartment Management" },
  { href: "/services/villa-farmhouse", label: "Villa & Farmhouse" },
  { href: "/services/plot-land-management", label: "Plot / Land Management" },
  { href: "/services/commercial-property", label: "Commercial Property" },
];

const linkClass = (active: boolean) =>
  `font-medium transition-colors ${
    active
      ? "text-[var(--color-accent-strong)] font-semibold"
      : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
  }`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const closeAll = () => {
    setIsOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.brand.name} home`}>
          <Image
            src="/hpm-logo-transparent.png"
            alt={siteConfig.brand.name}
            width={869}
            height={256}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass(pathname === "/")}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setDesktopServicesOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              aria-haspopup="true"
              onClick={() => setDesktopServicesOpen((open) => !open)}
              className={`flex items-center gap-1 py-2 ${linkClass(
                pathname.startsWith("/services")
              )}`}
            >
              Services
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition-transform ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {desktopServicesOpen && (
              <div
                id="desktop-services-menu"
                className="absolute top-full left-0 w-64 bg-white shadow-lg border border-[var(--color-divider)] rounded-md py-2 flex flex-col z-50"
              >
                {SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDesktopServicesOpen(false)}
                    className={`px-4 py-2.5 hover:bg-[var(--color-background)] transition-colors ${
                      pathname === item.href
                        ? "text-[var(--color-accent-strong)] font-semibold"
                        : "text-[var(--color-foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={linkClass(pathname === "/about")}>
            About Us
          </Link>
          <Link href="/contact" className={linkClass(pathname === "/contact")}>
            Contact
          </Link>

          <div className="flex items-center gap-4 ml-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-[var(--color-accent-strong)] text-white px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 hover:bg-[var(--color-primary)] transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-primary)] hover:bg-[var(--color-divider)]"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-[var(--color-divider)] bg-[var(--color-background)] p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
        >
          <Link
            href="/"
            className={`py-2 ${linkClass(pathname === "/")}`}
            onClick={closeAll}
          >
            Home
          </Link>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-menu"
              onClick={() => setMobileServicesOpen((open) => !open)}
              className={`flex items-center justify-between py-2 ${linkClass(
                pathname.startsWith("/services")
              )}`}
            >
              Services
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div
                id="mobile-services-menu"
                className="flex flex-col gap-1 pl-4 border-l-2 border-[var(--color-divider)] ml-2"
              >
                {SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm py-2.5 ${
                      pathname === item.href
                        ? "text-[var(--color-accent-strong)] font-semibold"
                        : "text-[var(--color-muted)]"
                    }`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`py-2 ${linkClass(pathname === "/about")}`}
            onClick={closeAll}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`py-2 ${linkClass(pathname === "/contact")}`}
            onClick={closeAll}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
