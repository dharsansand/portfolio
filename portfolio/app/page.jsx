import Banner from "./banner";
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return ( 
    <>
      <Banner />
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>

    </>
  );
}