import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Home, Droplets, Leaf, Shield, Wrench, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Villa & Farmhouse Management in Hyderabad | HPM Care",
  description: "Villa and farmhouse management in Hyderabad with scheduled inspections, landscaping and pool coordination, security checks and photo-verified reports.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/villa-farmhouse`,
  },
  openGraph: {
    title: `Villa & Farmhouse Caretaking in Hyderabad | ${siteConfig.brand.name}`,
    description: "Caretaking and maintenance for villas and farmhouses in Hyderabad. Scheduled visits, garden and pool care, security checks and video updates.",
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
    description: "Caretaking and maintenance for villas and farmhouses in Hyderabad. Scheduled visits, garden and pool care, security checks and video updates.",
    images: [`${siteConfig.brand.url}/images/villa.jpg`],
  },
};

export default function VillaFarmhouseManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "villa",
        title: "Villa & Farmhouse Management",
        heroDescription: "Caretaking for villas and farmhouses that sit empty between visits — cleaning, garden, pool and security.",
        heroImage: "/images/villa.jpg",
        overviewHeading: "Care for Homes That Sit Empty",
        overviewDescription: [
          "A villa that is closed up for weeks starts to show it: dust, damp, an overgrown garden, a pool gone green.",
          "We arrange deep cleaning, garden work, pool servicing and security, and we check the house between visits. If you are coming for the weekend, we open it up and have it ready before you arrive.",
          "You get a regular video walkthrough, so you can see the house rather than take our word for it."
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
          { title: "Regular Inspections", desc: "Scheduled visits to check security and catch damage early.", icon: <Home /> },
          { title: "Pool Upkeep", desc: "Chemical balancing, cleaning and pump maintenance.", icon: <Droplets /> },
          { title: "Landscaping", desc: "Lawn mowing, pruning and garden care.", icon: <Leaf /> },
          { title: "Security", desc: "Guard coordination for farmhouses away from the city.", icon: <Shield /> },
          { title: "Repairs", desc: "Fixing structural, plumbing or electrical problems.", icon: <Wrench /> },
          { title: "Weekend Prep", desc: "Cleaning and stocking before you arrive.", icon: <Calendar /> }
        ],
        howItWorks: [
          { step: 1, title: "Estate Audit", desc: "A full assessment of the property and what it needs." },
          { step: 2, title: "Caretaker Assign", desc: "Assigning staff for regular upkeep." },
          { step: 3, title: "Schedule Setup", desc: "Setting cleaning and gardening routines." },
          { step: 4, title: "Monitoring", desc: "Weekly checks and utility payments." },
          { step: 5, title: "Visit Prep", desc: "Getting the house ready before you arrive." },
          { step: 6, title: "Reporting", desc: "Photo and video logs each month." }
        ],
        gallery: [
          "/images/portfolio/villa-farmhouse-lawn-sunset-hyderabad.jpg",
          "/images/portfolio/duplex-villa-garden-hyderabad.jpg",
          "/images/villa.jpg",
          "/images/villa_garden.jpg",
          "/images/inspection.jpg",
          "/images/agreement.jpg"
        ],
        reviews: [
          {
            quote: "My Shankarpally farmhouse used to be a headache to maintain. Now, it's always ready for my family's weekend trips.",
            name: "Arjun Reddy",
            location: "Farmhouse Owner, Shankarpally"
          },
          {
            quote: "The garden and pool are always in good shape, and the house is ready by the time we get there.",
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
          { question: "How often do you inspect the villa/farmhouse?", answer: "Weekly as standard, and daily if full-time staff are posted at the property." },
          { question: "Do you handle swimming pool maintenance?", answer: "Yes. We coordinate vendors for cleaning, chlorination and pump checks." },
          { question: "Can you prepare the house for our weekend visit?", answer: "Yes. Weekend Prep includes deep cleaning, airing the house out and switching the utilities on." },
          { question: "Do you manage the garden and lawn?", answer: "Yes. We arrange landscaping to keep the lawn, plants and trees healthy." },
          { question: "How is security handled for remote farmhouses?", answer: "We can arrange manned guards, and we check that boundary lighting and CCTV are working." },
          { question: "Will I get visual proof of the property's condition?", answer: "Yes. Photo and video reports are sent after each round of checks." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I want to discuss caretaking & upkeep for my Villa/Farmhouse."
      }}
    />
  );
}
