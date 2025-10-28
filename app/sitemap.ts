import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://comotozze.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/ru`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/zh`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    }
  ];
}
