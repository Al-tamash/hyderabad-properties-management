import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Map, AlertTriangle, ShieldCheck, Leaf, Camera, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Plot & Land Management in Hyderabad | Anti-Encroachment & Inspections",
  description: "Protect your vacant land and residential plots across Hyderabad from encroachment. Quarterly geo-tagged inspection reports, boundary fencing checks, signboards, and weed clearance.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/plot-land-management`,
  },
  openGraph: {
    title: `Open Plot & Land Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Physical custody and boundary protection for vacant land plots in Hyderabad. Geo-tagged visual inspections and anti-encroachment vigilance.",
    url: `${siteConfig.brand.url}/services/plot-land-management`,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.brand.url}/images/plot.jpg`,
        width: 1200,
        height: 630,
        alt: "Plot and Land Management Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Open Plot & Land Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Physical custody and boundary protection for vacant land plots in Hyderabad. Geo-tagged visual inspections and anti-encroachment vigilance.",
    images: [`${siteConfig.brand.url}/images/plot.jpg`],
  },
};

export default function PlotLandManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "plot",
        title: "Plot & Land Management",
        heroDescription: "Vigilant protection for vacant plots. We ensure your open land remains secure, maintained, and free from encroachment.",
        heroImage: "/images/plot.jpg",
        overviewHeading: "Absolute Custody for Open Land",
        overviewDescription: [
          "Vacant plots and open land are highly vulnerable to encroachment, illegal dumping, and boundary disputes if left unmonitored.",
          "Our Plot Management service provides rigorous, on-ground vigilance. We conduct regular physical inspections, verify boundary pillars, and install prominent anti-encroachment boards to establish clear ownership.",
          "Through quarterly geo-tagged photo and video reports, we provide absolute proof of your land's security, giving peace of mind to NRI owners and distant investors."
        ],
        overviewImage: "/images/plot.jpg",
        keyInclusions: [
          "Regular site visits & condition checks",
          "Boundary pillar & fencing monitoring",
          "Anti-encroachment warning boards",
          "Vegetation/debris clearing coordination",
          "Encroachment monitoring",
          "Geo-tagged photo/video documentation",
          "Local vendor & neighborhood coordination",
          "Detailed owner reporting"
        ],
        whatWeHandle: [
          { title: "Site Visits", desc: "Routine physical inspections of the plot.", icon: <Map /> },
          { title: "Boundary Checks", desc: "Ensuring pillars and fences are intact.", icon: <ShieldCheck /> },
          { title: "Warning Boards", desc: "Installing 'Property of XYZ' boards to deter trespassers.", icon: <AlertTriangle /> },
          { title: "Weed Clearing", desc: "Coordinating bush clearing to maintain visibility.", icon: <Leaf /> },
          { title: "Visual Proof", desc: "Geo-tagged photos and drone videos if required.", icon: <Camera /> },
          { title: "Reporting", desc: "Comprehensive condition reports sent quarterly.", icon: <FileText /> }
        ],
        howItWorks: [
          { step: 1, title: "Initial Survey", desc: "Mapping the plot boundaries." },
          { step: 2, title: "Board Installation", desc: "Erecting ownership warning signs." },
          { step: 3, title: "Fencing Check", desc: "Securing the perimeter." },
          { step: 4, title: "Regular Patrols", desc: "Scheduled physical site visits." },
          { step: 5, title: "Clearing", desc: "Removing illegal dumping or weeds." },
          { step: 6, title: "Reporting", desc: "Sending geo-tagged proof to the owner." }
        ],
        gallery: [
          "/images/plot.jpg",
          "/images/agreement.jpg",
          "/images/handshake.jpg",
          "/images/inspection.jpg",
          "/images/maintenance.jpg"
        ],
        reviews: [
          {
            quote: "I haven't visited India in 5 years, but the geo-tagged videos from Hyderabad Properties Management give me 100% confidence my land is safe.",
            name: "Sunil Reddy",
            location: "Plot Owner, Kokapet (NRI)"
          },
          {
            quote: "They immediately spotted a broken fence and had it fixed before any encroachment could happen. Incredible vigilance.",
            name: "Ramesh C.",
            location: "Land Investor, Shamshabad"
          },
          {
            quote: "The anti-encroachment boards and regular clearing have kept my plot completely secure and visibly owned.",
            name: "Kavita S.",
            location: "Property Owner, Tellapur"
          }
        ],
        faq: [
          { question: "How do you prove the inspection actually happened?", answer: "We provide geo-tagged photos and videos with timestamps, proving our personnel were physically on your land." },
          { question: "What happens if you spot encroachment?", answer: "We immediately notify you, involve local authorities if instructed, and coordinate with legal counsel to resolve the issue swiftly." },
          { question: "Do you install fencing?", answer: "We do not build fences ourselves, but we coordinate with trusted local vendors to erect or repair barbed wire or compound walls." },
          { question: "How often do you visit the plot?", answer: "Standard frequency is quarterly, but we offer monthly or custom visit schedules based on the vulnerability of the location." },
          { question: "Do you clear the land?", answer: "Yes, we coordinate the hiring of labor or machinery to clear weeds, bushes, and illegally dumped debris." },
          { question: "Is this service available for agricultural land?", answer: "Yes, we manage both residential plots and large open agricultural land parcels." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need boundary inspection & custody for my Plot in Hyderabad."
      }}
    />
  );
}
