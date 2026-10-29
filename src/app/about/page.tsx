import { buildMetadata } from "@/lib/metadata";
import AboutClient from "./AboutClient";

export const metadata = buildMetadata({
  title: "About Us | Trusted Hyderabad Property Management Team",
  description:
    "Meet the team behind Hyderabad Properties Management: local custodians for flats, villas, plots and commercial property, serving Hyderabad owners since 2009.",
  path: "/about",
  image: "/og-image.jpg",
  imageAlt: "Hyderabad Properties Management team",
});

export default function AboutPage() {
  return <AboutClient />;
}
