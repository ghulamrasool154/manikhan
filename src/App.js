import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Benefit from "./components/Benefit/Benefit";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Process from "./components/Process/Process";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Home />
        <About />
        <Benefit />
        <Portfolio />
        <Service />
        <Process />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
