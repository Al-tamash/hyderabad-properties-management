import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Building, Users, Wallet, Wrench, Shield, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Property Management in Hyderabad | HPM Leasing",
  description: "Commercial property management in Hyderabad for offices, retail and warehouses: leasing, rent collection, compliance support and maintenance coordination.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/commercial-property`,
  },
  openGraph: {
    title: `Commercial Property Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Commercial property management in Hyderabad for offices, retail units and standalone buildings — leases, rent, maintenance and compliance dates.",
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
    description: "Commercial property management in Hyderabad for offices, retail units and standalone buildings — leases, rent, maintenance and compliance dates.",
    images: [`${siteConfig.brand.url}/images/commercial.jpg`],
  },
};

export default function CommercialPropertyPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "commercial",
        title: "Commercial Property Management",
        heroDescription: "Management for shops, offices and commercial buildings — leases, rent, maintenance and statutory dates.",
        heroImage: "/images/commercial.jpg",
        overviewHeading: "Running a Commercial Building",
        overviewDescription: [
          "Commercial property runs on dates: rent due dates, escalation dates, tax deadlines, AMC renewals. Miss one and it costs money.",
          "We manage offices, retail units and standalone commercial buildings for owners who would rather not track all of that themselves.",
          "We handle vendor negotiations, keep an eye on property tax and society dues, and make sure repairs are done before a tenant has to complain."
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
          { title: "Inspections", desc: "Regular checks on the building and its systems.", icon: <Building /> },
          { title: "Tenant Relations", desc: "Day-to-day contact with corporate tenants.", icon: <Users /> },
          { title: "Rent Monitoring", desc: "Tracking rent, CAM charges and lease escalations.", icon: <Wallet /> },
          { title: "Vendor Mgt", desc: "Coordinating AMCs for HVAC, fire safety and lifts.", icon: <Wrench /> },
          { title: "Compliance", desc: "Keeping track of property tax and municipal dues.", icon: <Shield /> },
          { title: "Reporting", desc: "A clear monthly statement of income and spend.", icon: <ClipboardCheck /> }
        ],
        howItWorks: [
          { step: 1, title: "Asset Audit", desc: "A full inspection of the building and its systems." },
          { step: 2, title: "Lease Review", desc: "Reading the terms and escalation clauses." },
          { step: 3, title: "Vendor Setup", desc: "Putting maintenance contracts in place." },
          { step: 4, title: "Tenant Intro", desc: "Introducing a single point of contact." },
          { step: 5, title: "Operations", desc: "Day-to-day monitoring and repairs." },
          { step: 6, title: "Reporting", desc: "A monthly update on money and maintenance." }
        ],
        gallery: [
          "/images/portfolio/ss-convention-showroom-building-hyderabad.jpg",
          "/images/portfolio/barka-plaza-commercial-complex-hyderabad.jpg",
          "/images/commercial.jpg",
          "/images/handshake.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "HPM handles the leasing and maintenance of our Hitec City office. They are easy to reach and things get done.",
            name: "Sanjay M.",
            location: "Commercial Landlord, Hitec City"
          },
          {
            quote: "Keeping track of CAM charges and escalations used to be a mess. Now I get one clear statement each month.",
            name: "Deepak R.",
            location: "Retail Shop Owner, Banjara Hills"
          },
          {
            quote: "HVAC and fire systems are looked after properly, and I get the service reports without having to ask.",
            name: "Aditi S.",
            location: "Corporate Investor"
          }
        ],
        faq: [
          { question: "What types of commercial properties do you manage?", answer: "Retail shops, office floors, standalone commercial buildings and warehouses." },
          { question: "Do you handle lease negotiations?", answer: "We administer existing leases, track escalations, and can help draft renewals." },
          { question: "How do you manage specialised maintenance like HVAC?", answer: "We bring in certified vendors for central AC, lifts and fire safety, and check that the work has actually been done." },
          { question: "Do you track property tax?", answer: "Yes. We keep an eye on property tax deadlines and society dues so nothing lapses." },
          { question: "Can you manage multi-tenant buildings?", answer: "Yes. We handle rent rolls, CAM apportioning and tenant disputes for buildings with multiple occupants." },
          { question: "What kind of reporting do you provide?", answer: "A monthly statement covering rent collected, CAM spend, vendor payments and maintenance carried out." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I have a commercial space in Hyderabad requiring professional management."
      }}
    />
  );
}
