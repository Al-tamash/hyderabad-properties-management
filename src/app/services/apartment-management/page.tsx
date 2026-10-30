import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Building2, Users, Wrench, Shield, ClipboardCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Apartment Management in Hyderabad | Society & Facility Care",
  description: "Apartment and society management in Hyderabad: common-area upkeep, lift and generator AMC oversight, security coordination and clear monthly owner reports.",
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
        heroDescription: "Day-to-day management for apartment buildings and societies — common areas, staff, AMCs and resident issues.",
        heroImage: "/images/apartment.jpg",
        overviewHeading: "Looking After the Whole Building",
        overviewDescription: [
          "An apartment building has a lot of moving parts: lifts, pumps, guards, housekeeping, residents, and a committee that wants answers.",
          "We take over the day-to-day running. That includes common-area upkeep, coordinating security staff, tracking AMC visits, and managing the rent roll for individual units.",
          "You get one point of contact for the building instead of ten vendors. Residents have someone to call, and you get a clear monthly report on what was spent and what was fixed."
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
          { title: "Building Inspections", desc: "Regular checks on the structure and the systems.", icon: <Building2 /> },
          { title: "Vendor Management", desc: "Coordinating AMCs for lifts, pumps and generators.", icon: <Wrench /> },
          { title: "Security Oversight", desc: "Managing guards and CCTV coverage.", icon: <Shield /> },
          { title: "Resident Comms", desc: "Handling complaints, notices and society meetings.", icon: <MessageSquare /> },
          { title: "Common Areas", desc: "Upkeep of lobbies, parking and shared amenities.", icon: <Users /> },
          { title: "Reporting", desc: "A monthly report on spend and maintenance.", icon: <ClipboardCheck /> }
        ],
        howItWorks: [
          { step: 1, title: "Building Audit", desc: "A full assessment of the building and its systems." },
          { step: 2, title: "Vendor Setup", desc: "Putting maintenance contracts in place." },
          { step: 3, title: "Security Protocol", desc: "Setting access and safety rules." },
          { step: 4, title: "Resident Onboarding", desc: "Opening a channel for residents to reach us." },
          { step: 5, title: "Daily Ops", desc: "Routine cleaning and maintenance." },
          { step: 6, title: "Monthly Review", desc: "Reporting and budget tracking." }
        ],
        gallery: [
          "/images/portfolio/apartment-building-facade-hyderabad.jpg",
          "/images/portfolio/tazeen-heights-apartment-moinabad.jpg",
          "/images/apartment.jpg",
          "/images/apt_lobby.jpg",
          "/images/apt_maintenance.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "HPM took over our building last year. Common areas are clean, and the lifts finally get serviced on time.",
            name: "Rajesh Gupta",
            location: "Building Owner, Gachibowli"
          },
          {
            quote: "Their vendor coordination is solid. One call and the plumber or the lift technician is arranged.",
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
          { question: "What is included in apartment management?", answer: "Common-area upkeep, security guard coordination, AMC management for lifts and generators, and handling resident issues." },
          { question: "Do you collect society dues?", answer: "Yes. We can collect maintenance dues and keep the society accounts in order." },
          { question: "How do you handle emergency repairs?", answer: "We keep an on-call vendor list for plumbing bursts, electrical faults and similar emergencies." },
          { question: "Do you provide security guards?", answer: "We work with security agencies to place and supervise trained guards at your premises." },
          { question: "How do you report to the owner/committee?", answer: "A monthly report covering money spent, maintenance carried out and any resident issues." },
          { question: "Can you manage individual units as well?", answer: "Yes. Flat Management can be added for owners who want their own units looked after alongside the building." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need management services for an Apartment complex in Hyderabad."
      }}
    />
  );
}
