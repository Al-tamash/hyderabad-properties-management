import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Search, ShieldCheck, FileSignature, Wallet, Wrench, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Flat Management in Hyderabad | Verified Tenants & Rent",
  description: "Flat management in Hyderabad covering tenant sourcing, police-verified KYC, 11-month rental agreements, rent collection and photo-verified repair estimates.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/flat-management`,
  },
  openGraph: {
    title: `Flat Management Services in Hyderabad | ${siteConfig.brand.name}`,
    description: "Flat rental management in Hyderabad — tenant sourcing, police-verified KYC, agreements, rent collection and repairs.",
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
    description: "Flat rental management in Hyderabad — tenant sourcing, police-verified KYC, agreements, rent collection and repairs.",
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
        "description": "Flat and individual apartment unit management in Hyderabad, including tenant KYC, 11-month agreements, rent collection and photo-verified repairs.",
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
              "text": "Tenant sourcing, KYC checks, the rental agreement, rent collection, and ongoing maintenance and repairs."
            }
          },
          {
            "@type": "Question",
            "name": "How do you verify tenants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Police verification, employment checks and references from the previous landlord, before we approve anyone."
            }
          },
          {
            "@type": "Question",
            "name": "How is rent collected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rent is collected digitally and transferred to your bank account. We do not hold it in escrow."
            }
          },
          {
            "@type": "Question",
            "name": "How are maintenance requests handled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The tenant reports the problem to us. We get a quote, ask for your approval, get the work done, and send photos with the vendor invoice."
            }
          },
          {
            "@type": "Question",
            "name": "Will I receive repair photos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Before and after photos are required for every repair, without exception."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I receive property updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A monthly rent statement, plus a message whenever something needs your attention."
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
        heroDescription: "Rental management for individual flats — finding tenants, agreements, rent and repairs.",
        heroImage: "/images/flat.jpg",
        overviewHeading: "Management for a Rented Flat",
        overviewDescription: [
          "Owning a rented flat should mean rent in your account and a property that is looked after. That is the part we handle.",
          "Whether you live abroad or in the next locality, we find the tenant, verify them, manage the agreement and deal with repair calls. Rent is transferred directly to your account.",
          "We also inspect the flat between tenancies and keep photo records, so you know what condition it is in without a visit."
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
          { title: "Tenant Sourcing", desc: "We market the flat and screen the people who apply.", icon: <Search /> },
          { title: "KYC & Verification", desc: "Police and employment verification before a tenant is approved.", icon: <ShieldCheck /> },
          { title: "Agreement Execution", desc: "Drafting and registering the 11-month rental agreement.", icon: <FileSignature /> },
          { title: "Rent Collection", desc: "Monthly rent collected and transferred to your account.", icon: <Wallet /> },
          { title: "Maintenance", desc: "Plumbing, electrical and general repairs through known vendors.", icon: <Wrench /> },
          { title: "Photo Proof", desc: "Before and after photos for every repair.", icon: <Camera /> }
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
          "/images/portfolio/tazeen-heights-apartment-moinabad.jpg",
          "/images/flat.jpg",
          "/images/inspection.jpg",
          "/images/maintenance.jpg",
          "/images/agreement.jpg",
          "/images/handshake.jpg"
        ],
        reviews: [
          {
            quote: "HPM made my Hyderabad rental much easier to manage while I was living away.",
            name: "Rahul Sharma",
            location: "Property Owner, Dubai"
          },
          {
            quote: "Their tenant verification is thorough. I know exactly who is living in my flat.",
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
          { question: "What does flat management include?", answer: "Tenant sourcing, KYC checks, the rental agreement, rent collection, and ongoing maintenance and repairs." },
          { question: "How do you verify tenants?", answer: "Police verification, employment checks and references from the previous landlord, before we approve anyone." },
          { question: "How is rent collected?", answer: "Rent is collected digitally and transferred to your bank account. We do not hold it in escrow." },
          { question: "How are maintenance requests handled?", answer: "The tenant reports the problem to us. We get a quote, ask for your approval, get the work done, and send photos with the vendor invoice." },
          { question: "Will I receive repair photos?", answer: "Yes. Before and after photos are required for every repair, without exception." },
          { question: "How often will I receive property updates?", answer: "A monthly rent statement, plus a message whenever something needs your attention." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need rental & tenant management for my Flat in Hyderabad."
      }}
      />
    </>
  );
}
