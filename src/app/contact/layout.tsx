import type { Metadata } from "next";
import { siteConfig } from "@/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Hyderabad Properties Management Desk",
  description: "Get in touch with Hyderabad Properties Management. Located beside Mehdipatnam Bus Depot. Contact us via phone (+91 95027 86217), WhatsApp, or inquiry form for property management solutions.",
  alternates: {
    canonical: `${siteConfig.brand.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.brand.name}`,
    description: "Contact our dedicated property management desk in Mehdipatnam, Hyderabad for customized property care, leasing, and maintenance.",
    url: `${siteConfig.brand.url}/contact`,
    images: [
      {
        url: `${siteConfig.brand.url}/images/commercial.jpg`,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.brand.name}`,
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
