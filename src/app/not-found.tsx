import Link from "next/link";
import { Home, Phone, SearchX } from "lucide-react";
import { siteConfig } from "@/site-config";

export const metadata = {
  title: "Page Not Found | Hyderabad Properties Management",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-divider)] text-[var(--color-accent-strong)]">
          <SearchX className="h-10 w-10" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-strong)]">
          Error 404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-[var(--color-muted)]">
          The page may have moved or the link may be out of date. You can head back
          home, browse our services, or call our Mehdipatnam office directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary)]/90"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-[var(--color-primary)] transition-colors hover:bg-gray-50"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
