import AOS from "aos";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Index";
import { useEffect } from "react";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
