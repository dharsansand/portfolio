import SkillsClient from "./SkillClient";

export const metadata = {
  title: "Technical Skills & Tech Stack | Dharsan S - MERN Developer",
  description:
    "Explore the technical skills and tech stack of Dharsan S: React.js, Next.js, Node.js, Express, MongoDB, MySQL, Redux Toolkit, ERP/CRM architecture, and REST APIs.",
  keywords: [
    "Dharsan Skills",
    "MERN Stack Skills",
    "Full Stack Tech Stack",
    "React Node js Skills",
    "Frontend Backend Technologies",
    "MongoDB Database Architecture",
    "ERP CRM HRM System Skills",
    "Next js Developer Skills",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Technical Skills & Competencies | Dharsan S",
    description:
      "Comprehensive breakdown of frontend, backend, database, and system architecture expertise by Dharsan S.",
    url: "https://dharsanportfolio.vercel.app/skills",
    type: "website",
  },
};

export default function Page() {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Dharsan S - Technical Skills & Tech Stack",
    url: "https://dharsanportfolio.vercel.app/skills",
    description:
      "Core technical competencies including React, Next.js, Node.js, Express, MongoDB, and Enterprise Architecture.",
    mainEntity: {
      "@type": "Person",
      name: "Dharsan S",
      knowsAbout: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Puppeteer",
        "Redis",
        "Socket.io",
        "ERP/CRM Systems",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      <SkillsClient />
    </>
  );
}