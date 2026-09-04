import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Me — Dharsan S | Biography & Career Journey",
  description:
    "Dharsan About Me: Read the background, professional journey, education at Anna University, and engineering experience of Dharsan S.",
  keywords: [
    "About me Dharsan",
    "Dharsan About Me",
    "About Dharsan S",
    "Dharsan biography",
    "Dharsan experience",
    "Who is Dharsan",
    "Dharsan education Dr NGP IT",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/about",
  },
  openGraph: {
    title: "About Me — Dharsan S | Story, Background & Career",
    description:
      "Learn about Dharsan S — professional roadmap, engineering background, and career achievements.",
    url: "https://dharsanportfolio.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "https://i.pinimg.com/736x/e9/f9/9b/e9f99b387ccdc8fe05554f9cc5508d8d.jpg",
        width: 800,
        height: 600,
        alt: "About Dharsan S - Personal Profile",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Dharsan S",
      alternateName: ["Dharsan", "Dharsan Developer"],
      url: "https://dharsanportfolio.vercel.app/about",
      description: "Dharsan S - MERN Stack Developer based in Coimbatore.",
      sameAs: [
        "https://www.linkedin.com/in/dharsan-s-b7741a252",
        "https://github.com/dharsansand",
        "https://instagram.com/dharsan._.27",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Anna University (Dr. N.G.P. IT)",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}