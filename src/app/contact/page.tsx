import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hyderabad Properties Management Office & Support",
  description: "Get in touch with Hyderabad Properties Management. Visit our office in Mehdipatnam, call +91 95027 86217, or chat with us on WhatsApp for property inspections and management quotes.",
  alternates: {
    canonical: `${siteConfig.brand.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.brand.name}`,
    description: "Get in touch with our team for property management services, tenant verification, and maintenance coordination in Hyderabad.",
    url: `${siteConfig.brand.url}/contact`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/commercial.jpg`,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.brand.name}`,
    description: "Get in touch with our team for property management services, tenant verification, and maintenance coordination in Hyderabad.",
    images: [`${siteConfig.brand.url}/images/commercial.jpg`],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
