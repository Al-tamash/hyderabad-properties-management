import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Building2, Users, Wrench, Shield, ClipboardCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Apartment & Society Management in Hyderabad | Multi-Unit Property Administration",
  description: "Institutional-grade apartment complex and multi-unit building management in Hyderabad. Full common-area upkeep, lift/generator AMC oversight, security personnel coordination, and resident mediation.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/apartment-management`,
  },
  openGraph: {
    title: `Apartment & Society Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Complete administration and facility care for residential apartment buildings and societies across Hyderabad.",
    url: `${siteConfig.brand.url}/services/apartment-management`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/apartment.jpg`,
        width: 1200,
        height: 630,
        alt: "Apartment Management Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Apartment & Society Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Complete administration and facility care for residential apartment buildings and societies across Hyderabad.",
    images: [`${siteConfig.brand.url}/images/apartment.jpg`],
  },
};

export default function ApartmentManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "apartment",
        title: "Apartment Management",
        heroDescription: "Professional oversight for entire apartment complexes and multi-unit buildings. Complete society coordination.",
        heroImage: "/images/apartment.jpg",
        overviewHeading: "Comprehensive Multi-Unit Administration",
        overviewDescription: [
          "Managing an entire apartment building or society requires specialized oversight, vendor coordination, and resident mediation.",
          "Our Apartment Management service provides institutional-grade administration for multi-unit properties. We handle everything from common area maintenance and security personnel coordination to individual unit rent rolls.",
          "We act as the single point of contact for all building operations, ensuring a premium living experience for residents while protecting the asset value for the landlord or society."
        ],
        overviewImage: "/images/apartment.jpg",
        keyInclusions: [
          "Apartment/property inspection",
          "Common-area maintenance coordination",
          "Vendor coordination (Lifts, Generators, Pumps)",
          "Maintenance monitoring",
          "Security/upkeep coordination",
          "Resident communication & notices",
          "Repair management",
          "Regular reporting & compliance",
          "Property condition monitoring"
        ],
        whatWeHandle: [
          { title: "Building Inspections", desc: "Regular audits of structural and functional health.", icon: <Building2 /> },
          { title: "Vendor Management", desc: "Coordinating AMCs for lifts, pumps, and generators.", icon: <Wrench /> },
          { title: "Security Oversight", desc: "Managing guards and surveillance protocols.", icon: <Shield /> },
          { title: "Resident Comms", desc: "Handling complaints, notices, and society meetings.", icon: <MessageSquare /> },
          { title: "Common Areas", desc: "Upkeep of lobbies, parking, and shared amenities.", icon: <Users /> },
          { title: "Reporting", desc: "Detailed monthly operational and financial reports.", icon: <ClipboardCheck /> }
        ],
        howItWorks: [
          { step: 1, title: "Building Audit", desc: "Complete assessment of all facilities." },
          { step: 2, title: "Vendor Setup", desc: "Establishing maintenance contracts." },
          { step: 3, title: "Security Protocol", desc: "Implementing access and safety rules." },
          { step: 4, title: "Resident Onboarding", desc: "Establishing communication channels." },
          { step: 5, title: "Daily Ops", desc: "Routine cleaning and maintenance." },
          { step: 6, title: "Monthly Review", desc: "Reporting and budget tracking." }
        ],
        gallery: [
          "/images/apartment.jpg",
          "/images/apt_lobby.jpg",
          "/images/apt_maintenance.jpg",
          "/images/handshake.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "Hyderabad Properties Management transformed our building's operations. The common areas are spotless and the lifts are always working.",
            name: "Rajesh Gupta",
            location: "Building Owner, Gachibowli"
          },
          {
            quote: "Their vendor coordination is top-notch. They handle everything smoothly so I don't have to worry about a thing.",
            name: "Anita Desai",
            location: "Society Secretary, Jubilee Hills"
          },
          {
            quote: "Excellent resident communication. Disputes are handled professionally and maintenance is prompt.",
            name: "Suresh Rao",
            location: "Property Investor, Kondapur"
          }
        ],
        faq: [
          { question: "What is included in apartment management?", answer: "We handle common area upkeep, security guard coordination, AMC management for lifts/generators, and resident mediation." },
          { question: "Do you collect society dues?", answer: "Yes, we can administer the collection of maintenance dues and manage the society accounts." },
          { question: "How do you handle emergency repairs?", answer: "We have a 24/7 on-call vendor network for critical emergencies like plumbing bursts or electrical faults." },
          { question: "Do you provide security guards?", answer: "We coordinate with top-tier security agencies to deploy and monitor trained guards at your premises." },
          { question: "How do you report to the owner/committee?", answer: "We provide comprehensive monthly reports covering financials, maintenance logs, and resident issues." },
          { question: "Can you manage individual units as well?", answer: "Yes, we offer Flat Management as an add-on for owners wanting their specific units managed alongside the building." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need management services for an Apartment complex in Hyderabad."
      }}
    />
  );
}
