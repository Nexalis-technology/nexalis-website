import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
// import Services from '../components/Services';
import EndToEndSolutions from '../components/EndToEndSolutions';
// import Portfolio from '../components/Portfolio';
import AiDemo from '../components/AiDemo';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AiDemo />
        <WhyChooseUs />
        {/* <Services /> */}
        <EndToEndSolutions />
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
