import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Home, Droplets, Leaf, Shield, Wrench, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Villa & Farmhouse Caretaking in Hyderabad | Luxury Estate Management",
  description: "Discreet, high-end caretaking for luxury villas, gated communities, and weekend farmhouses in Hyderabad (Shankarpally, Tellapur, Moinabad). Deep cleaning, swimming pool upkeep, gardening, and 24/7 security.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/villa-farmhouse`,
  },
  openGraph: {
    title: `Villa & Farmhouse Caretaking in Hyderabad | ${siteConfig.brand.name}`,
    description: "Premium estate caretaking and maintenance for villas and farmhouses in Hyderabad. Weekend arrival preparation and weekly video updates.",
    url: `${siteConfig.brand.url}/services/villa-farmhouse`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/villa.jpg`,
        width: 1200,
        height: 630,
        alt: "Villa and Farmhouse Caretaking Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Villa & Farmhouse Caretaking in Hyderabad | ${siteConfig.brand.name}`,
    description: "Premium estate caretaking and maintenance for villas and farmhouses in Hyderabad. Weekend arrival preparation and weekly video updates.",
    images: [`${siteConfig.brand.url}/images/villa.jpg`],
  },
};

export default function VillaFarmhouseManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "villa",
        title: "Villa & Farmhouse Management",
        heroDescription: "Discreet, premium caretaking for luxury retreats, weekend farmhouses, and high-value estates.",
        heroImage: "/images/villa.jpg",
        overviewHeading: "Premium Care for Luxury Estates",
        overviewDescription: [
          "Luxury villas and farmhouses require consistent upkeep to prevent degradation, even when unoccupied. Our premium caretaking service ensures your estate is always in pristine condition.",
          "We coordinate deep cleaning, landscaping, swimming pool maintenance, and 24/7 security. For weekend retreats, we prepare the property ahead of your arrival so you can simply walk in and relax.",
          "Trust Hyderabad Properties Management to preserve the beauty, functionality, and security of your highest-value residential assets."
        ],
        overviewImage: "/images/villa.jpg",
        keyInclusions: [
          "Regular property inspections",
          "Deep cleaning & dusting",
          "Gardening & landscaping coordination",
          "Utility monitoring (electricity, water, internet)",
          "Repair coordination",
          "Weekend property preparation",
          "Emergency support & rapid response",
          "Swimming pool maintenance",
          "Photo/video updates"
        ],
        whatWeHandle: [
          { title: "Regular Inspections", desc: "Routine checks to ensure security and prevent damage.", icon: <Home /> },
          { title: "Pool Upkeep", desc: "Chemical balancing, cleaning, and pump maintenance.", icon: <Droplets /> },
          { title: "Landscaping", desc: "Lawn mowing, pruning, and garden care.", icon: <Leaf /> },
          { title: "Security", desc: "Vigilance and guard coordination for remote farmhouses.", icon: <Shield /> },
          { title: "Repairs", desc: "Prompt fixing of structural, plumbing, or electrical issues.", icon: <Wrench /> },
          { title: "Weekend Prep", desc: "Cleaning and stocking before the owner's arrival.", icon: <Calendar /> }
        ],
        howItWorks: [
          { step: 1, title: "Estate Audit", desc: "Detailed mapping of the property's needs." },
          { step: 2, title: "Caretaker Assign", desc: "Deploying trusted staff for regular upkeep." },
          { step: 3, title: "Schedule Setup", desc: "Defining cleaning and gardening routines." },
          { step: 4, title: "Monitoring", desc: "Weekly checks and utility payments." },
          { step: 5, title: "Visit Prep", desc: "Readying the estate before you arrive." },
          { step: 6, title: "Reporting", desc: "Monthly photo and video condition logs." }
        ],
        gallery: [
          "/images/villa.jpg",
          "/images/villa_garden.jpg",
          "/images/inspection.jpg",
          "/images/handshake.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "My Shankarpally farmhouse used to be a headache to maintain. Now, it's always ready for my family's weekend trips.",
            name: "Arjun Reddy",
            location: "Farmhouse Owner, Shankarpally"
          },
          {
            quote: "The landscaping and pool are flawlessly maintained. Hyderabad Properties Management provides true luxury caretaking.",
            name: "Priya T.",
            location: "Villa Owner, Tellapur"
          },
          {
            quote: "I get video updates of my property every week. I know my investment is secure and well-cared for.",
            name: "Mohan V.",
            location: "NRI Owner, UK"
          }
        ],
        faq: [
          { question: "How often do you inspect the villa/farmhouse?", answer: "We conduct weekly comprehensive inspections, and daily checks if full-time staff are deployed." },
          { question: "Do you handle swimming pool maintenance?", answer: "Yes, we coordinate with specialized vendors for regular cleaning, chlorination, and pump checks." },
          { question: "Can you prepare the house for our weekend visit?", answer: "Absolutely. We offer 'Weekend Prep' which includes deep cleaning, airing out the property, and turning on utilities." },
          { question: "Do you manage the garden and lawn?", answer: "Yes, we coordinate professional landscaping to keep your lawns, plants, and trees healthy." },
          { question: "How is security handled for remote farmhouses?", answer: "We can coordinate 24/7 manned security guards and ensure proper boundary lighting and CCTV function." },
          { question: "Will I get visual proof of the property's condition?", answer: "Yes, we send detailed photo and video reports regularly." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I want to discuss caretaking & upkeep for my Villa/Farmhouse."
      }}
    />
  );
}
