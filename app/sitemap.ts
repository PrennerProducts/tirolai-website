import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tirolai.at';
  const today = new Date().toISOString();

  return [
    { url: `${baseUrl}/`, lastModified: today },
    { url: `${baseUrl}/services`, lastModified: today },
    { url: `${baseUrl}/services/ki-potenzialanalyse`, lastModified: today },
    { url: `${baseUrl}/services/ai-prototyping`, lastModified: today },
    { url: `${baseUrl}/services/prozessautomatisierung`, lastModified: today },
    { url: `${baseUrl}/services/web-app-entwicklung`, lastModified: today },
    { url: `${baseUrl}/services/iot-predictive`, lastModified: today },
    { url: `${baseUrl}/services/ai-schulungen`, lastModified: today },
    { url: `${baseUrl}/services/foerderberatung`, lastModified: today },
    { url: `${baseUrl}/references`, lastModified: today },
    { url: `${baseUrl}/about`, lastModified: today },
    { url: `${baseUrl}/contact`, lastModified: today },
    { url: `${baseUrl}/datenschutz`, lastModified: today },
    { url: `${baseUrl}/impressum`, lastModified: today },
  ];
}
