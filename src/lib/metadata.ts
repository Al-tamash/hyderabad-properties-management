import type { Metadata } from "next";
import { siteConfig } from "@/site-config";

const DEFAULT_IMAGE = "/og-image.jpg";

interface PageMetaArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt,
}: PageMetaArgs): Metadata {
  const url = `${siteConfig.brand.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteConfig.brand.url}${image}`,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.brand.url}${image}`],
    },
  };
}
