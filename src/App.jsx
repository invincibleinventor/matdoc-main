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
import NeetCounsellingProcess from "./screens/NeetCounsellingProcess/Index";
import TopCollegesForNeet from "./screens/TopCollegesForNeet/Index";
import NeetUgCounsellingDate from "./screens/NeetUgCounsellingDate/Index";
import NeetCutOff from "./screens/NeetCutOff/Index";
import DedicatedCompanion from "./screens/Home/DedicatedCompainon";
import SignIn from "./screens/Auth/SignIn";
import Blog from "./screens/Blog/Index";

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

  const isLoginPage = window.location.pathname === "/auth/login";
  return (
    <>
      <BrowserRouter>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/#yourdedicatedfeatures"
            element={<DedicatedCompanion />}
          />
          <Route path="/enquiry-form" element={<EnquiryNow />} />
          <Route path="/neet-ug" element={<UGExam />} />
          <Route path="/neet-pg" element={<PGExam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Carrer />} />
          <Route
            path="/neet-counselling-process"
            element={<NeetCounsellingProcess />}
          />

          <Route
            path="/top-colleges-for-neet"
            element={<TopCollegesForNeet />}
          />
          <Route
            path="/neet-ug-counselling-date"
            element={<NeetUgCounsellingDate />}
          />
          <Route path="/neet-cut-off" element={<NeetCutOff />} />
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {!isLoginPage && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
