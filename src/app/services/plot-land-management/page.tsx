import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import { ExpandedServicePage } from "@/components/ExpandedServicePage";
import { Map, AlertTriangle, ShieldCheck, Leaf, Camera, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Plot & Land Management in Hyderabad | Inspections",
  description: "Open plot and land management in Hyderabad with boundary checks, anti-encroachment boards, debris clearing and geo-tagged quarterly inspection reports.",
  alternates: {
    canonical: `${siteConfig.brand.url}/services/plot-land-management`,
  },
  openGraph: {
    title: `Open Plot & Land Management in Hyderabad | ${siteConfig.brand.name}`,
    description: "Physical checks and boundary protection for vacant plots in Hyderabad, with geo-tagged inspection reports.",
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
    description: "Physical checks and boundary protection for vacant plots in Hyderabad, with geo-tagged inspection reports.",
    images: [`${siteConfig.brand.url}/images/plot.jpg`],
  },
};

export default function PlotLandManagementPage() {
  return (
    <ExpandedServicePage
      data={{
        id: "plot",
        title: "Plot & Land Management",
        heroDescription: "Regular visits and documented checks for vacant plots — boundaries, encroachment and upkeep.",
        heroImage: "/images/plot.jpg",
        overviewHeading: "Keeping an Eye on Empty Land",
        overviewDescription: [
          "An empty plot is easy to ignore, which is exactly when boundaries get moved and debris gets dumped.",
          "We visit on a schedule, check the boundary pillars and fencing, and put up boards that make it clear the land is owned and watched.",
          "Every visit is recorded with geo-tagged photos and video and sent to you as a quarterly report. You see the land as it is, without having to fly down."
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
          { title: "Site Visits", desc: "Physical inspections of the plot on a set schedule.", icon: <Map /> },
          { title: "Boundary Checks", desc: "Checking that pillars and fences are intact.", icon: <ShieldCheck /> },
          { title: "Warning Boards", desc: "Putting up 'Private Property' boards with the owner's name.", icon: <AlertTriangle /> },
          { title: "Weed Clearing", desc: "Clearing bushes so the plot stays visible from the road.", icon: <Leaf /> },
          { title: "Visual Proof", desc: "Geo-tagged photos, plus drone footage where needed.", icon: <Camera /> },
          { title: "Reporting", desc: "A condition report every quarter.", icon: <FileText /> }
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
            quote: "I haven't visited India in 5 years, but the geo-tagged videos from HPM give me confidence that my land is being watched.",
            name: "Sunil Reddy",
            location: "Plot Owner, Kokapet (NRI)"
          },
          {
            quote: "They spotted a broken fence on one of their visits and had it repaired before anyone could walk in.",
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
          { question: "How do you prove the inspection actually happened?", answer: "Geo-tagged photos and video with timestamps, so you can see our staff were on your land." },
          { question: "What happens if you spot encroachment?", answer: "We tell you straight away, involve the authorities if you ask us to, and work with your lawyer if the matter goes further." },
          { question: "Do you install fencing?", answer: "We do not build fences ourselves, but we coordinate local vendors to erect or repair barbed wire or compound walls." },
          { question: "How often do you visit the plot?", answer: "Quarterly as standard. Monthly or custom schedules are available for plots in more exposed locations." },
          { question: "Do you clear the land?", answer: "Yes. We arrange labour or machinery to clear weeds, bushes and illegally dumped debris." },
          { question: "Is this service available for agricultural land?", answer: "Yes. We manage residential plots as well as larger agricultural parcels." }
        ],
        whatsappMessage: "Hi Hyderabad Properties Management, I need boundary inspection & custody for my Plot in Hyderabad."
      }}
    />
  );
}
