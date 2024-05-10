import { useEffect } from "react";
import Banner from "./Banner";
import OpenPosition from "./OpenPosition";
import { Helmet } from "react-helmet";

const Career = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers at MAT DOC</title>
      </Helmet>
      <Banner />
      <OpenPosition />
    </>
  );
};

export default Career;
