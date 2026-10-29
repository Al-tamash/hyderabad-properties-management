import { buildMetadata } from "@/lib/metadata";
import ContactClient from "./ContactClient";
import { OfficeMap } from "@/components/OfficeMap";

export const metadata = buildMetadata({
  title: "Contact Us | Hyderabad Properties Management Office",
  description:
    "Contact Hyderabad Properties Management in Mehdipatnam. Call +91 95027 86217, message us on WhatsApp, or send an enquiry for a property management quote.",
  path: "/contact",
  image: "/og-image.jpg",
  imageAlt: "Contact Hyderabad Properties Management",
});

export default function ContactPage() {
  return (
    <>
      <ContactClient />
      <OfficeMap />
    </>
  );
}
