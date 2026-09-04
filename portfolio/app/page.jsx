import Banner from "./banner";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Full Stack Developer & Engineering Portfolio",
  description:
    "Official portfolio of Dharsan S. Specializing in Full Stack Development, MERN stack architecture, enterprise ERP/CRM web applications, and scalable software solutions.",
  keywords: [
    "Full Stack Developer",
    "Full Stack Development",
    "Full Stack Web Developer",
    "MERN Stack Portfolio",
    "Dharsan Portfolio",
    "Web Application Architecture",
    "Hire Full Stack Developer",
    "DharsanPortfolio",
  ],
  alternates: {
    canonical: "https://dharsanportfolio.vercel.app",
  },
  openGraph: {
    title: "Dharsan S | Full Stack Developer & Engineering Portfolio",
    description:
      "Showcasing full stack projects, enterprise solutions, and high-performance web systems built by Dharsan S.",
    url: "https://dharsanportfolio.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <ScrollToTop />
    </>
  );
}