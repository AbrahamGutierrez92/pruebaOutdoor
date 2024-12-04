import Banner from "../components/Banner";
import Banner_inferior from "../components/Banner_inferior";
import Blog from "../components/Blog";
import ContactoUs from "../components/ContactoUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Outdoor from "../components/Outdoor";
import Servicios from "../components/Servicios";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
    <Banner/>
    <Banner_inferior/>
    <Outdoor/>
    <Servicios/>
    <Gallery/>
    <Testimonials/>
    <Blog/>
    <ContactoUs/>
    <Footer/>
    </>
  )
}

export default Home;