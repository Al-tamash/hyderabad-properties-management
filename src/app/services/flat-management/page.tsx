import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Search, ShieldCheck, FileSignature, Wallet, Wrench, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Flat Management Services in Hyderabad | Tenant KYC & Rent Collection",
  description: "End-to-end flat and individual apartment unit management in Hyderabad. Strict tenant police verification, 11-month agreement execution, on-time rent remittance, and photo-verified repairs.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/flat-management`,
  },
  openGraph: {
    title: `Flat Management Services in Hyderabad | ${siteConfig.brand.name}`,
    description: "Professional flat rental management in Hyderabad. Zero-hassle tenancy, strict background checks, and digital rent remittance.",
    url: `${siteConfig.brand.url}/services/flat-management`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/flat.jpg`,
        width: 1200,
        height: 630,
        alt: "Flat Management Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Flat Management Services in Hyderabad | ${siteConfig.brand.name}`,
    description: "Professional flat rental management in Hyderabad. Zero-hassle tenancy, strict background checks, and digital rent remittance.",
    images: [`${siteConfig.brand.url}/images/flat.jpg`],
  },
};

export default function FlatManagementPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Flat Management Services in Hyderabad",
        "serviceType": "Property Management",
        "description": "End-to-end flat and individual apartment unit management in Hyderabad including tenant KYC verification, 11-month agreement execution, on-time rent remittance, and photo-verified repairs.",
        "provider": {
          "@type": "LocalBusiness",
          "name": siteConfig.brand.name,
          "url": siteConfig.brand.url
        },
        "areaServed": {
          "@type": "City",
          "name": "Hyderabad"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does flat management include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It includes everything from tenant sourcing, KYC, lease execution, rent collection, to ongoing maintenance and repair coordination."
            }
          },
          {
            "@type": "Question",
            "name": "How do you verify tenants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We conduct strict police verifications, employment checks, and previous landlord references before approving any tenant."
            }
          },
          {
            "@type": "Question",
            "name": "How is rent collected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rent is collected digitally and transferred directly to your designated bank account without any escrow holding."
            }
          },
          {
            "@type": "Question",
            "name": "How are maintenance requests handled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tenants raise requests with us. We get a quote, seek your approval, complete the work, and provide photo proof along with the vendor invoice."
            }
          },
          {
            "@type": "Question",
            "name": "Will I receive repair photos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we mandate before-and-after photo evidence for every single repair executed at your property."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I receive property updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You will receive a monthly rent remittance report, plus immediate updates for any maintenance or tenant-related matters."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ExpandedServicePage
        data={{
        id: "flat",
        title: "Flat Management",
        heroDescription: "Complete custody for individual rental units. We handle everything from tenant placement to ongoing maintenance.",
        heroImage: "/images/flat.jpg",
        overviewHeading: "Stress-Free Rental Flat Management",
        overviewDescription: [
          "Our flat management service helps property owners enjoy the benefits of rental income without the daily hassles of property management.",
          "Whether you are an NRI or a local investor, we handle tenant sourcing, KYC verification, and maintenance requests on your behalf. You receive rent directly into your account with complete transparency.",
          "Hyderabad Properties Management helps protect your property's value through regular inspections, timely repairs, and photo-verified maintenance updates."
        ],
        overviewImage: "/images/flat.jpg",
        keyInclusions: [
          "Tenant search & marketing",
          "Rigorous background verification (KYC)",
          "11-month agreement execution",
          "Monthly rent collection & remittance",
          "Plumbing & electrical maintenance",
          "Photo proof of all repairs",
          "Move-in/Move-out condition reports",
          "Direct owner communication"
        ],
        whatWeHandle: [
          { title: "Tenant Sourcing", desc: "We market your property and find reliable, verified tenants.", icon: <Search /> },
          { title: "KYC & Verification", desc: "Strict police and employment verification for complete safety.", icon: <ShieldCheck /> },
          { title: "Agreement Execution", desc: "Drafting and executing legally binding 11-month rental agreements.", icon: <FileSignature /> },
          { title: "Rent Collection", desc: "Timely monthly rent collection transferred directly to your account.", icon: <Wallet /> },
          { title: "Maintenance", desc: "Plumbing, electrical, and general repairs handled by trusted vendors.", icon: <Wrench /> },
          { title: "Photo Proof", desc: "Before and after photos provided for all maintenance work.", icon: <Camera /> }
        ],
        howItWorks: [
          { step: 1, title: "Property Audit", desc: "Initial inspection and rental valuation." },
          { step: 2, title: "Marketing", desc: "Listing and showcasing your flat." },
          { step: 3, title: "Tenant KYC", desc: "Thorough background and police verification." },
          { step: 4, title: "Agreement", desc: "Signing the rental contract." },
          { step: 5, title: "Move-In", desc: "Handover with detailed condition report." },
          { step: 6, title: "Management", desc: "Ongoing rent collection and maintenance." }
        ],
        gallery: [
          "/images/flat.jpg",
          "/images/inspection.jpg",
          "/images/maintenance.jpg",
          "/images/agreement.jpg",
          "/images/handshake.jpg"
        ],
        reviews: [
          {
            quote: "Hyderabad Properties Management made managing my Hyderabad rental property much easier while I was living away.",
            name: "Rahul Sharma",
            location: "Property Owner, Dubai"
          },
          {
            quote: "Their tenant verification process is incredible. I have peace of mind knowing my flat is in good hands.",
            name: "Sneha Reddy",
            location: "Property Owner, USA"
          },
          {
            quote: "Maintenance requests are handled swiftly and I always receive photo updates. Highly recommended.",
            name: "Vikram Kumar",
            location: "Local Investor, Hyderabad"
          }
        ],
        faq: [
          { question: "What does flat management include?", answer: "It includes everything from tenant sourcing, KYC, lease execution, rent collection, to ongoing maintenance and repair coordination." },
          { question: "How do you verify tenants?", answer: "We conduct strict police verifications, employment checks, and previous landlord references before approving any tenant." },
          { question: "How is rent collected?", answer: "Rent is collected digitally and transferred directly to your designated bank account without any escrow holding." },
          { question: "How are maintenance requests handled?", answer: "Tenants raise requests with us. We get a quote, seek your approval, complete the work, and provide photo proof along with the vendor invoice." },
          { question: "Will I receive repair photos?", answer: "Yes, we mandate before-and-after photo evidence for every single repair executed at your property." },
          { question: "How often will I receive property updates?", answer: "You will receive a monthly rent remittance report, plus immediate updates for any maintenance or tenant-related matters." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need rental & tenant management for my Flat in Hyderabad."
      }}
      />
    </>
  );
}
