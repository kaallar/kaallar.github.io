import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Guarantee from "../components/Guarantee";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import FAQ from "../components/FAQ";

function Home({ language }) {
  return (
    <>
      <Hero language={language} />
      <Trust language={language} />
      <Services language={language} />
      <Gallery language={language} />
      <Process language={language} />
      <Testimonials language={language} />
      <Pricing language={language} />
      <Guarantee language={language} />
      <FAQ language={language} />
      <Footer language={language} />
    </>
  );
}

export default Home;