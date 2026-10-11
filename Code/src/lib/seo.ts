export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
}

export const defaultSEO = {
  title: "SMK Interior | Premium Interior Designers in Chennai",
  description: "SMK Interior crafts luxury residential and commercial interior spaces in Chennai. Turnkey home interiors, modular kitchens, bedrooms, and commercial fitouts.",
  siteUrl: "https://smkinterior.com",
  defaultImage: "/logo.jpeg"
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "SMK Interior",
    "image": defaultSEO.defaultImage,
    "@id": defaultSEO.siteUrl,
    "url": defaultSEO.siteUrl,
    "telephone": "+918056294510",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.267, GST Road, Guduvanchery, Near Udhayam Stores",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
      "postalCode": "603202",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8436,
      "longitude": 80.0617
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://facebook.com/smkinterior",
      "https://instagram.com/smkinterior",
      "https://pinterest.com/smkinterior"
    ]
  };
}
