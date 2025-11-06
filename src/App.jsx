import Header from "./layout/Header";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Work from "./layout/Work";
import Gallery from "./layout/Gallery";
import Team from "./layout/Team";
import Footer from "./layout/Footer";
import FeaturedSection from "./layout/FeaturedSection";

const App = () => {
  return (
    <div className="w-full ">
      <Header />
      <About />
      <Work />
      <FeaturedSection />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
