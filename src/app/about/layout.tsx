import type { Metadata } from "next";
import { siteConfig } from "@/site-config";

export const metadata: Metadata = {
  title: "About Us | Trusted Property Custodians in Hyderabad",
  description: "Learn about Hyderabad Properties Management. 17+ years of trusted experience managing 20+ residential and commercial properties with verified tenants, transparent maintenance, and complete peace of mind for local and NRI owners.",
  alternates: {
    canonical: `${siteConfig.brand.url}/about`,
  },
  openGraph: {
    title: `About Us | ${siteConfig.brand.name}`,
    description: "17+ years of experience in end-to-end property custody, strict tenant KYC, and photo-verified maintenance in Hyderabad.",
    url: `${siteConfig.brand.url}/about`,
    images: [
      {
        url: `${siteConfig.brand.url}/images/villa.jpg`,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.brand.name}`,
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
