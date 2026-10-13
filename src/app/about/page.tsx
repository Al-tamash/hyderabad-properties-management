import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Professional Property Care Team in Hyderabad",
  description: "Learn about Hyderabad Properties Management. Trusted local on-ground presence since 2009 managing over 20+ residential and commercial properties with verified tenants and zero escrow delays.",
  alternates: {
    canonical: `${siteConfig.brand.url}/about`,
  },
  openGraph: {
    title: `About Us | ${siteConfig.brand.name}`,
    description: "Trusted local property management team in Hyderabad. Physical custody, tenant background checks, and transparent maintenance reporting.",
    url: `${siteConfig.brand.url}/about`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/villa.jpg`,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteConfig.brand.name}`,
    description: "Trusted local property management team in Hyderabad. Physical custody, tenant background checks, and transparent maintenance reporting.",
    images: [`${siteConfig.brand.url}/images/villa.jpg`],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
