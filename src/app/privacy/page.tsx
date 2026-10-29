import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy | Hyderabad Properties Management (HPM)",
  description:
    "How Hyderabad Properties Management handles the details you share through our website, WhatsApp and email enquiries, and what we never do with your data.",
  path: "/privacy",
});

const LAST_UPDATED = "29 October 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <section className="bg-[var(--color-primary)] py-16 text-white">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-gray-300">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-8 px-4 text-[var(--color-muted)]">
          <p>
            {siteConfig.brand.name} respects your privacy. This policy explains what
            information we receive when you use this website, why we receive it, and
            the choices you have.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Information you give us
            </h2>
            <p className="mt-2">
              Our enquiry form asks for your name, email address, phone number, the
              service you are interested in, and your message. The form does not
              submit data to a server on this website. When you press send, your
              device opens WhatsApp or your email app with the message already
              written, and you choose whether to send it. We only receive the
              details once you send that message.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              How we use it
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>To reply to your enquiry and arrange a property visit.</li>
              <li>To prepare a quote or management proposal you have asked for.</li>
              <li>To keep a record of our correspondence for as long as needed.</li>
            </ul>
            <p className="mt-2">
              We do not sell your details, and we do not add you to marketing lists
              without your agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Cookies and embedded services
            </h2>
            <p className="mt-2">
              This website does not set advertising or analytics cookies. The Contact
              page embeds Google Maps and Street View. Those embeds are loaded from
              Google and may set cookies or collect usage data under Google&apos;s own
              privacy policy. If you prefer to avoid them, contact us by phone, email
              or WhatsApp instead.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Sharing
            </h2>
            <p className="mt-2">
              Messages sent through WhatsApp are handled by Meta under its privacy
              terms. Our website is hosted by Vercel, which processes standard server
              logs such as IP address and request time for security and reliability.
              We share information with third parties only where needed to deliver a
              service you asked for, or where the law requires it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Your choices
            </h2>
            <p className="mt-2">
              You can ask us what information we hold about you, request a correction,
              or ask us to delete it. Write to{" "}
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

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              Contact
            </h2>
            <p className="mt-2">
              {siteConfig.brand.name}
              <br />
              {siteConfig.contact.officeAddress}
              <br />
              Hyderabad, Telangana 500028, India
              <br />
              {siteConfig.contact.workingHours}, Monday to Saturday
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
