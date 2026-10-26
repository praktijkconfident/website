import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.praktijkconfident.nl';
  const routes = ['', '/aanbod', '/over-mij', '/contact', '/gratis', '/gratis/overgang-zonder-gedoe'];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
