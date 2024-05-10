import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";

const NeetCutOff = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  const title = (
    <>
      Cracking the
      <span className="ml-2 highlight-container highlight-blue">
        <span className="highlight"> NEET Cut-off </span>
      </span>
      for
      <br className="hidden lg:block" />
      <span className="ml-2 highlight-container highlight-orange">
        <span className="highlight">Medical Career </span>
      </span>
    </>
  );
  const description = (
    <>
      Are you a NEET aspirant preparing for the 2024 exam? If so, understanding
      the cut-off
      <br className="hidden lg:block" />
      marks is crucial for your success. But deciphering the cut-off marks can
      often feel like
      <br className="hidden lg:block" />
      cracking a code. Don't worry, we've got you covered.
    </>
  );
  return (
    <>
      <Helmet>
        <title>Cracking the NEET Cut-off for Medical Career</title>
      </Helmet>
      <Banner title={title} description={description} />
    </>
  );
};

export default NeetCutOff;
