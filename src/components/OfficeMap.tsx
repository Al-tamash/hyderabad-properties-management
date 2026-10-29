import { siteConfig } from "@/site-config";
import { MapPin, Navigation, ExternalLink, Clock } from "lucide-react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.397317655552!2d78.4421488!3d17.3927101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971fcc34209f%3A0x7ab2120f4e142f78!2sHyderabad%20properties%20management!5e0!3m2!1sen!2sin!4v1793254888644!5m2!1sen!2sin";

const STREET_VIEW_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!4v1793255022037!6m8!1m7!1sCAoSHENJQUJJaEJBUHlwU2dJVDNfcG51Y0pJSTZVWGk.!2m2!1d17.3927831813241!2d78.44223035982985!3f319.20747130662295!4f-2.808684064460408!5f0.7820865974627469";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=17.3927101,78.4421488";
const PLACE_URL = "https://www.google.com/maps/search/?api=1&query=17.3927101,78.4421488";
const STREET_VIEW_URL =
  "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=17.3927831813241,78.44223035982985&heading=319.2&pitch=-2.8";

export function OfficeMap() {
  return (
    <section
      aria-labelledby="office-map-heading"
      className="py-20 md:py-28 bg-[var(--color-background)] border-t border-[var(--color-divider)]"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent-strong)] font-semibold uppercase tracking-wider text-sm mb-2">
            Visit Us
          </p>
          <h2
            id="office-map-heading"
            className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-4"
          >
            Find Our Office in Mehdipatnam
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
            {siteConfig.contact.officeAddress}. Open {siteConfig.contact.workingHours},
            Monday to Saturday.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <figure className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-divider)] shadow-sm bg-gray-100">
              <iframe
                src={MAP_EMBED_SRC}
                title={`Google Map showing the ${siteConfig.brand.name} office in Mehdipatnam, Hyderabad`}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-strong)] transition-colors"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>

          <figure className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-divider)] shadow-sm bg-gray-100">
              <iframe
                src={STREET_VIEW_EMBED_SRC}
                title={`Street View of the ${siteConfig.brand.name} office on the road in Mehdipatnam, Hyderabad`}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={STREET_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-strong)] transition-colors"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Open in Street View
              </a>
              <span className="inline-flex items-center gap-2 text-[var(--color-muted)]">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {siteConfig.contact.workingHours}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
