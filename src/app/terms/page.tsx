import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/site-config";

export const metadata = buildMetadata({
  title: "Terms of Use | Hyderabad Properties Management Website",
  description:
    "The terms that apply when you use the Hyderabad Properties Management website, covering content accuracy, enquiries, liability and governing law in India.",
  path: "/terms",
});

const LAST_UPDATED = "29 October 2026";

export default function TermsPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <section className="bg-[var(--color-primary)] py-16 text-white">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-gray-300">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-[var(--color-muted)]">
          <p>
            These terms apply to your use of this website, operated by{" "}
            {siteConfig.brand.name}. By browsing the site or sending an enquiry you
            agree to them.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Website information
            </h2>
            <p className="mt-2">
              We keep service descriptions and office details accurate and up to date,
              but the website is provided for general information. It is not a
              quotation, a tenancy offer, or legal, tax or investment advice. Fees,
              scope and responsibilities are confirmed only in a written agreement
              signed by both parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Enquiries
            </h2>
            <p className="mt-2">
              An enquiry sent through this website is a request to be contacted, not a
              binding instruction. Please do not send confidential documents or
              payment details through the enquiry form. We may record the details you
              share so we can respond.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Intellectual property
            </h2>
            <p className="mt-2">
              The text, layout, photographs and logo on this site belong to{" "}
              {siteConfig.brand.name} unless stated otherwise. You may view and print
              pages for your own reference, but you may not republish them commercially
              without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Third-party links
            </h2>
            <p className="mt-2">
              The site links to Google Maps, WhatsApp and other external services. We
              do not control those services and are not responsible for their content
              or availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Liability
            </h2>
            <p className="mt-2">
              We work to keep the site available and accurate, but we do not promise
              uninterrupted access. To the extent permitted by law, we are not liable
              for loss arising from reliance on general information on this site. This
              does not limit liability that cannot be excluded under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Governing law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of India. Disputes relating to this
              website are subject to the exclusive jurisdiction of the courts at
              Hyderabad, Telangana.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms? Write to{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-[var(--color-accent-strong)] underline underline-offset-2 [overflow-wrap:anywhere]"
              >
                {siteConfig.contact.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-medium text-[var(--color-accent-strong)] underline underline-offset-2"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
