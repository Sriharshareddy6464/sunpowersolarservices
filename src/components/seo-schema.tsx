import React from "react";

export default function SEOSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sun Power Solar Services",
    "image": "https://static.wixstatic.com/media/74a41e_c64e351ae02a47598c25cb646a80f5b5~mv2.jpg/v1/fill/w_82,h_75,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sun%20Power%20Logo_page-0001_edited.jpg",
    "telePhone": "+91-7075758209",
    "email": "sunpowersolarservice@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12-1-373, Road No. 2, Indraprastha Colony, Anand Nagar, Nagole",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3753,
      "longitude": 78.5583
    },
    "url": "https://www.sunpowersolarservices.co.in",
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "areaServed": [
      "Hyderabad",
      "Secunderabad",
      "Telangana"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a rooftop solar system cost in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A residential rooftop solar system in Hyderabad costs around ₹65,000–₹80,000 per kW. For a 3 kW system, the cost is ~₹1,95,000, which drops to ~₹1,17,000 after the ₹78,000 PM Surya Ghar subsidy."
        }
      },
      {
        "@type": "Question",
        "name": "Is TSSPDCL net metering included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sun Power Solar Services handles complete TSSPDCL and TSNPDCL net meter approvals and installation within 21 days."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
