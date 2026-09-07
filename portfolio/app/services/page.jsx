import ServicesClient from "./servicesClient";

export const metadata = {
  title: "Engineering Services & Solutions | Dharsan S - Full-Stack Developer",
  description:
    "Explore engineering and development services offered by Dharsan S: Custom ERP & CRM Development, MERN Full-Stack Web Apps, MongoDB Database Optimization, Process Automation, REST APIs, and Enterprise RBAC Security.",
  keywords: [
    "Dharsan Services",
    "Custom ERP Development",
    "CRM System Development",
    "MERN Stack Development Services",
    "Full-Stack Web App Development",
    "MongoDB Database Optimization",
    "Business Process Automation",
    "Puppeteer PDF Automation",
    "RESTful API Development",
    "Razorpay Payment Integration",
    "Enterprise RBAC Security",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/services",
  },
  openGraph: {
    title: "Specialized Engineering Services | Dharsan S",
    description:
      "Enterprise software architecture, full-stack web applications, process automation, and database optimization services by Dharsan S.",
    url: "https://dharsanportfolio.vercel.app/services",
    type: "website",
    images: [
      {
        url: "https://i.pinimg.com/736x/e9/f9/9b/e9f99b387ccdc8fe05554f9cc5508d8d.jpg",
        width: 800,
        height: 600,
        alt: "Dharsan S - Engineering Services",
      },
    ],
  },
};

export default function Page() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dharsan S - Engineering & Full-Stack Development Services",
    url: "https://dharsanportfolio.vercel.app/services",
    image: "https://i.pinimg.com/736x/e9/f9/9b/e9f99b387ccdc8fe05554f9cc5508d8d.jpg",
    priceRange: "$$",
    telephone: "+919384428585",
    description: "Dharsan S - MERN Stack Developer based in Coimbatore.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    ],
    provider: {
      "@type": "Person",
      "@id": "https://dharsanportfolio.vercel.app/#person",
      name: "Dharsan S",
      jobTitle: "MERN Stack Developer & System Architect",
      url: "https://dharsanportfolio.vercel.app",
      sameAs: [
        "https://www.linkedin.com/in/dharsan-full-stack-developer/",
        "https://github.com/dharsansand",
        "https://instagram.com/dharsan._.27",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom ERP & CRM Development",
            description:
              "Tailored enterprise systems automating lead management, real-time inventory ledgers, and sales pipelines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Applications",
            description:
              "Scalable, responsive end-to-end web applications engineered with React, Next.js, Node.js, and Express.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Database Optimization",
            description:
              "MongoDB aggregation pipeline tuning, relational schema design, and indexing strategies reducing query latency up to 60%.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Process Automation",
            description:
              "Automated operations including Puppeteer-based PDF generation and high-volume Excel ETL data processing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RESTful API & Payment Integration",
            description:
              "Secure backend microservices, validation logic, and third-party integrations such as Razorpay.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Security & RBAC",
            description:
              "Multi-tier Role-Based Access Control, JWT refresh token cycles, and route protection middleware.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}