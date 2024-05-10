import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import ImportantMedicalClg from "./ImportantMedicalClg";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";
import { Assets } from "../../assets/Assets";

const TopCollegesForNeet = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  const title = (
    <>
      What are the
      <span className="ml-2 highlight-container highlight-blue">
        <span className="highlight"> Top Colleges </span>
      </span>
      for
      <br className="hidden lg:block" /> NEET under
      <span className="ml-2 highlight-container highlight-orange">
        <span className="highlight"> Private & Govt </span>
      </span>
      in
      <br className="hidden lg:block" /> India?
    </>
  );
  const description = (
    <>
      If you are a student dreaming of becoming a doctor in India, then this
      site is for you.
    </>
  );
  const para = (
    <>
      The NEET (National Eligibility cum Entrance Test) is an entrance
      examination that opens <br className="hidden lg:block" /> the doors to top
      medical colleges in the country. But you might not know which
      <br className="hidden lg:block" />
      colleges are the best for you. Keep reading to find out.
    </>
  );

  // What is NEET Counselling Process

  const processTitle = (
    <>
      Factors that you must consider
      <br className="hidden lg:block" /> when selecting a medical college{" "}
    </>
  );

  const processData = [
    {
      id: 1,
      title: "Reputation and Rankings",
      description:
        " You must research the college's reputation among students, alumni, and medical professionals. Look for rankings in national and international surveys to learn about the college's standing.",
      img: Assets.Rankings,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Accreditation and Recognition",
      description:
        "Make sure that the college is recognized by the Medical Council of India (MCI) and is affiliated with a reputable university. Accreditation guarantees that the college complies with the relevant educational and training requirements.",
      img: Assets.Recognition,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Faculty and Infrastructure",
      description:
        "A strong faculty with good expertise will strengthen the quality of education and provide valuable guidance to students. Additionally, you can take a look at the infrastructure and facilities available, including libraries, laboratories, and research centres.",
      img: Assets.Infrastructure,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Specialisations Offered",
      description:
        "Examine the range of specializations and departments available at the top colleges for NEET. If you have a specific field of interest, ensure that the college has the specific departments and opportunities for your specialisation.",
      img: Assets.Offered,
      classes: "shadow-violet",
    },
    {
      id: 5,
      title: "Campus Life and Facilities",
      description:
        "Check out the campus environment, accommodation options, sports facilities, and extracurricular activities. A holistic college experience can contribute to your overall development and well-being.",
      img: Assets.Campus,
      classes: "shadow-sandle",
    },
    {
      id: 6,
      title: "Placement Opportunities",
      description:
        "Research the placement history and opportunities provided by the college. Check the success rate of graduates in securing jobs or pursuing further education in reputed institutions.",
      para: "Now that you have learnt about the important factors to consider, let's dive into the top colleges for NEET in India, starting with government institutions.",
      img: Assets.Placement,
      classes: "shadow-green",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          What are the Top Colleges for NEET under Private & Govt in India?
        </title>
      </Helmet>
      <Banner title={title} description={description} para={para} />
      <ImportantMedicalClg />
      <WhatIsProcess processTitle={processTitle} processData={processData} />
    </>
  );
};

export default TopCollegesForNeet;
