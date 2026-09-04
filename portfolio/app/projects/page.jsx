import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Featured Projects & Portfolio | Dharsan S - MERN Developer",
  description:
    "Explore featured projects built by Dharsan S: Enterprise ERP/CRM platforms, Automated Payroll engines, Real-time dashboards, and full-stack web applications using React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Dharsan Projects",
    "MERN Stack Projects",
    "Next.js Portfolio Projects",
    "ERP CRM Web Applications",
    "Node.js Backend Systems",
    "React Web Apps",
    "Full Stack Developer Portfolio",
    "Puppeteer Automation Projects",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Featured Projects & Portfolio | Dharsan S",
    description:
      "Showcasing enterprise platforms, automated systems, and high-performance full-stack web apps built by Dharsan S.",
    url: "https://dharsanportfolio.vercel.app/projects",
    type: "website",
  },
};

export default function Page() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dharsan S - Featured Projects & Portfolio",
    url: "https://dharsanportfolio.vercel.app/projects",
    description:
      "Curated portfolio of enterprise ERP/CRM systems, real-time dashboards, automated microservices, and web applications built with the MERN stack.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "Enterprise ERP & CRM Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Integrated enterprise system managing sales pipelines, inventory ledgers, and role-based access control.",
        },
        {
          "@type": "SoftwareApplication",
          name: "Automated Payroll & Payslip Engine",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
          description:
            "Automated compensation calculation system with Puppeteer PDF generation and Redis caching.",
        },
        {
          "@type": "SoftwareApplication",
          name: "Real-time Operations Dashboard",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Live KPI monitoring cockpit featuring Socket.io real-time updates and interactive charts.",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsClient />
    </>
  );
}