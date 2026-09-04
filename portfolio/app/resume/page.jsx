import ResumeClient from "./ResumClient";

export const metadata = {
  title: "Resume & Credentials | Dharsan S - Full Stack Developer",
  description:
    "View and download the official curriculum vitae of Dharsan S. Full Stack Developer (MERN) specializing in React.js, Next.js, Node.js, Express, MongoDB, and enterprise ERP/CRM solutions.",
  keywords: [
    "Dharsan S Resume",
    "Dharsan CV",
    "Full Stack Developer Resume",
    "MERN Stack Developer CV",
    "React Developer Resume",
    "Node.js Backend Developer CV",
    "Next.js Developer Resume",
    "Dharsan S Portfolio Resume",
    "Software Engineer Resume India",
    "ERP CRM Developer Resume",
    "Dharsan Download Resume",
    "Dharsan Credentials",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/resume",
  },
  openGraph: {
    title: "Curriculum Vitae | Dharsan S - Full Stack Developer",
    description:
      "Explore the professional experience, technical skills, and credentials of Dharsan S. Available for full-time roles and engineering consultations.",
    url: "https://dharsanportfolio.vercel.app/resume",
    type: "profile",
    images: [
      {
        url: "https://dharsanportfolio.vercel.app/og-image.jpg", // Replace with your actual OG image URL if available
        width: 1200,
        height: 630,
        alt: "Dharsan S - Resume & Credentials",
      },
    ],
  },
};

export default function ResumePage() {
  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Dharsan S - Resume & Credentials",
    url: "https://dharsanportfolio.vercel.app/resume",
    mainEntity: {
      "@type": "Person",
      name: "Dharsan S",
      jobTitle: "Full Stack Developer (MERN)",
      email: "dharsansand@gmail.com",
      telephone: "+919384428585",
      url: "https://dharsanportfolio.vercel.app",
      sameAs: [
          "https://www.linkedin.com/in/dharsan-s-b7741a252",
        "https://github.com/dharsansand",
        "https://instagram.com/dharsan._.27",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Dr. N.G.P. Institute Of Technology (Anna University)",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Bachelor of Engineering (B.E.) in Computer Science",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "MERN Stack Full Stack Development Certification",
        },
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "RESTful APIs",
        "ERP/CRM System Architecture",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
      />
      <ResumeClient />
    </>
  );
}