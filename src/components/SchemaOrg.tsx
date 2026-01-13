const SchemaOrg = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Trisna Wiratama",
    "url": "https://www.trisnawiratama.co.id",
    "logo": "https://www.trisnawiratama.co.id/logo.png",
    "description": "Distributor alat kesehatan, laboratory supply, dan general trade terpercaya di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Contoh No. 123, Kel. Suka Maju, Kec. Kebayoran Baru",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-21-1234-5678",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/trisnawiratama",
      "https://www.instagram.com/trisnawiratama",
      "https://www.linkedin.com/company/trisnawiratama"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaOrg;
