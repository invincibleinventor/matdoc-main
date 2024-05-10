import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";

const NeetUgCounsellingDate = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  const title = (
    <>
      <span className="ml-2 highlight-container highlight-blue">
        <span className="highlight"> NEET UG Counselling </span>
      </span>
      Date
      <br className="hidden lg:block" />
      and Timeline for
      <span className="ml-2 highlight-container highlight-orange">
        <span className="highlight"> 2024 </span>
      </span>
    </>
  );
  const description = (
    <>
      The Medical Counselling Committee (MCC) NEET UG counselling schedule and{" "}
      <br className="hidden lg:block" />
      process is an important step for students like you who wish to secure
      admission into <br className="hidden lg:block" />
      various UG medical and dental programs in India. From registration to
      choice filling, <br className="hidden lg:block" /> seat allotment, and
      document verification, we will take you through each stage,{" "}
      <br className="hidden lg:block" />
      highlighting key points and important documents required at every step.
    </>
  );

  return (
    <>
      <Helmet>
        <title>NEET UG Counselling Date and Timeline for 2024</title>
      </Helmet>
      <Banner title={title} description={description} />
    </>
  );
};

export default NeetUgCounsellingDate;
