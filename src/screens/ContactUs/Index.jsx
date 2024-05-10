import { useEffect } from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - MAT DOC</title>
      </Helmet>
      <Banner />
    </>
  );
};

export default ContactUs;
