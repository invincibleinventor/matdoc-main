import AOS from "aos";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Index";
import { useEffect } from "react";
import EnquiryNow from "./screens/EnquiryNow";
import UGExam from "./screens/UGExam/Index";
import PGExam from "./screens/PGExam/Index";
import ContactUs from "./screens/ContactUs/Index";
import Carrer from "./screens/Carrer/Index";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry-form" element={<EnquiryNow />} />
          <Route path="/neet-ug" element={<UGExam />} />
          <Route path="/neet-pg" element={<PGExam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Carrer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
