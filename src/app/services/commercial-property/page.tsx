import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Building, Users, Wallet, Wrench, Shield, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Property Management in Hyderabad | Office & Retail Leasing",
  description: "Professional commercial property management in Hyderabad (Hitec City, Madhapur, Financial District). Commercial lease administration, CAM maintenance tracking, vendor management, and property tax compliance.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/commercial-property`,
  },
  openGraph: {
    title: `Commercial Property Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Institutional-grade commercial real estate management in Hyderabad. Office space, retail units, and standalone commercial building administration.",
    url: `${siteConfig.brand.url}/services/commercial-property`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/commercial.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial Property Management Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Commercial Property Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Institutional-grade commercial real estate management in Hyderabad. Office space, retail units, and standalone commercial building administration.",
    images: [`${siteConfig.brand.url}/images/commercial.jpg`],
  },
};

export default function CommercialPropertyPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "commercial",
        title: "Commercial Property Management",
        heroDescription: "Institutional-grade administration for retail shops, corporate offices, and commercial lease setups.",
        heroImage: "/images/commercial.jpg",
        overviewHeading: "Fiduciary Custody for Commercial Assets",
        overviewDescription: [
          "Commercial real estate requires a highly professional approach to lease administration, facility maintenance, and tenant relations.",
          "Our Commercial Property Management vertical serves high-net-worth landlords and institutional investors by providing end-to-end operational oversight.",
          "We handle complex vendor negotiations, monitor property tax payments, track society dues, and ensure that your commercial space operates seamlessly, preserving its premium yield."
        ],
        overviewImage: "/images/commercial.jpg",
        keyInclusions: [
          "Commercial property inspections",
          "Tenant coordination & lease administration",
          "Rent monitoring & escalation tracking",
          "Maintenance coordination (HVAC, Electrical)",
          "Vendor management",
          "Repair coordination",
          "Property condition reports",
          "Property tax & society dues tracking",
          "Regular owner updates"
        ],
        whatWeHandle: [
          { title: "Inspections", desc: "Thorough audits of commercial facilities and systems.", icon: <Building /> },
          { title: "Tenant Relations", desc: "Professional mediation with corporate tenants.", icon: <Users /> },
          { title: "Rent Monitoring", desc: "Tracking rent, CAM charges, and lease escalations.", icon: <Wallet /> },
          { title: "Vendor Mgt", desc: "Coordinating AMCs for HVAC, fire safety, and lifts.", icon: <Wrench /> },
          { title: "Compliance", desc: "Tracking property tax and municipal dues.", icon: <Shield /> },
          { title: "Reporting", desc: "Detailed institutional-grade financial reporting.", icon: <ClipboardCheck /> }
        ],
        howItWorks: [
          { step: 1, title: "Asset Audit", desc: "Comprehensive facility inspection." },
          { step: 2, title: "Lease Review", desc: "Analyzing terms and escalation clauses." },
          { step: 3, title: "Vendor Setup", desc: "Establishing critical maintenance contracts." },
          { step: 4, title: "Tenant Intro", desc: "Establishing a single point of contact." },
          { step: 5, title: "Operations", desc: "Daily monitoring and maintenance." },
          { step: 6, title: "Reporting", desc: "Monthly financial and operational updates." }
        ],
        gallery: [
          "/images/commercial.jpg",
          "/images/handshake.jpg",
          "/images/inspection.jpg",
          "/images/maintenance.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "Hyderabad Properties Management handles the leasing and maintenance of our Hitec City office space impeccably. They are highly professional.",
            name: "Sanjay M.",
            location: "Commercial Landlord, Hitec City"
          },
          {
            quote: "Tracking CAM charges and lease escalations used to be a mess. Now everything is automated and perfectly reported.",
            name: "Deepak R.",
            location: "Retail Shop Owner, Banjara Hills"
          },
          {
            quote: "Their vendor management for HVAC and fire systems is top tier. A truly institutional-grade service.",
            name: "Aditi S.",
            location: "Corporate Investor"
          }
        ],
        faq: [
          { question: "What types of commercial properties do you manage?", answer: "We manage retail shops, corporate office floors, standalone commercial buildings, and warehouses." },
          { question: "Do you handle lease negotiations?", answer: "We administer existing leases, track escalations, and can assist in drafting renewals." },
          { question: "How do you manage specialized maintenance like HVAC?", answer: "We engage and coordinate with specialized, certified vendors for complex systems like central AC, elevators, and fire safety." },
          { question: "Do you track property tax?", answer: "Yes, we monitor property tax deadlines and society dues to ensure your property remains compliant." },
          { question: "Can you manage multi-tenant buildings?", answer: "Absolutely. We manage rent rolls, common area maintenance (CAM) apportioning, and dispute resolution for multi-tenant properties." },
          { question: "What kind of reporting do you provide?", answer: "We provide detailed monthly logs covering rent collection, CAM utilization, vendor payments, and maintenance histories." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I have a commercial space in Hyderabad requiring professional management."
      }}
    />
  );
}
