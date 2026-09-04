import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Dharsan S | Hire Full Stack & MERN Developer",
  description:
    "Get in touch with Dharsan S for freelance web development, full-time engineering roles, and enterprise software consultation in Coimbatore.",
  keywords: [
    "Contact Dharsan S",
    "Hire Dharsan",
    "Hire MERN Stack Developer",
    "Hire Full Stack Developer Coimbatore",
    "Dharsan Contact Details",
    "Dharsan Email Phone Number",
    "Freelance React Developer Coimbatore",
    "Web Developer Consultation",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Dharsan S | Hire Full Stack & MERN Developer",
    description:
      "Available for freelance projects & full-time roles. Get in touch with Dharsan S directly via email, phone, or inquiry form.",
    url: "https://dharsanportfolio.vercel.app/contact",
    type: "website",
  },
};

export default function Page() {
  
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Dharsan S",
    url: "https://dharsanportfolio.vercel.app/contact",
    mainEntity: {
      "@type": "Person",
      name: "Dharsan S",
      jobTitle: "MERN Stack Developer",
      email: "dharsansand@gmail.com",
      telephone: "+919384428585",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}