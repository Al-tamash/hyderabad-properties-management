import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site-config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: `${siteConfig.brand.name} | Property Management Services in Hyderabad`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: "Hyderabad Properties Management provides professional property management in Hyderabad. End-to-end care for flats, apartments, villas, plots, and commercial properties with verified tenants, photo-verified repairs, and zero escrow delays.",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${siteConfig.brand.name} | Property Management in Hyderabad`,
    description: siteConfig.brand.description,
    url: siteConfig.brand.url,
    siteName: siteConfig.brand.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.brand.url}/images/villa.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} - Professional Property Management Hyderabad`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.brand.name} | Property Management in Hyderabad`,
    description: siteConfig.brand.description,
    images: [`${siteConfig.brand.url}/images/villa.jpg`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      "@id": `${siteConfig.brand.url}/#business`,
      "name": siteConfig.brand.name,
      "legalName": siteConfig.brand.name,
      "url": siteConfig.brand.url,
      "logo": `${siteConfig.brand.url}/hpm-logo-transparent.png`,
      "image": `${siteConfig.brand.url}/images/villa.jpg`,
      "description": siteConfig.brand.description,
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.officeAddress,
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500028",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "areaServed": siteConfig.localities.map(loc => ({
        "@type": "City",
        "name": `${loc}, Hyderabad`
      })),
      "priceRange": "₹₹",
      "foundingDate": "2009"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true
                  });
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
