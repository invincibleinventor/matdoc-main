import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import EligibilityCriteria from "../NeetCounsellingProcess/EligibilityCriteria";
import { Assets } from "../../assets/Assets";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";

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

  // Understanding NEET Cut-off Marks

  const eligibilityTitle = (
    <>
      {" "}
      Understanding NEET Cut-off
      <br className="hidden lg:block" />
      Marks
    </>
  );

  const eligibilityData = [
    {
      id: 1,
      desc: "The NEET cut-off marks are the minimum scores that a candidate must obtain in order to qualify for admission to medical colleges in India. These marks are determined by various factors and are different for each category of candidates. Understanding how the cut-off marks are calculated is essential for NEET aspirants.",
      classes: "bg-yellow-550",
    },
    {
      id: 2,
      desc: "There are two types of cut-off marks in the NEET rank predictor – the qualifying cut-off and the admission cut-off. The qualifying cut-off is the minimum score required to be eligible for admission in MBBS/BDS seats in any college for the admission session, while the admission cut-off is the minimum score required for admission to a specific college or course.",
      classes: "bg-blue-550",
    },
    {
      id: 3,
      desc: "The cut-off marks are determined based on the number of candidates appearing for the exam, the difficulty level of the paper, the availability of seats, and other factors. The cut-off marks can vary from year to year, so it is important to stay updated with the latest information.",
      classes: "bg-green-550",
    },
    {
      id: 4,
      desc: "To calculate the NEET cut-off marks, the total number of questions answered correctly by a candidate is multiplied by the total marks for each question (4 marks per correct answer). Then, the negative marks for incorrect answers are deducted (1 mark is deducted for every wrong answer). The final score obtained is compared with the cut-off marks to determine eligibility.",
      classes: "bg-orange-550",
    },
  ];

  // Factors Influencing NEET Cut-off Marks

  const processTitle = (
    <>
      Factors Influencing NEET Cut-off <br className="hidden lg:block" /> Marks
    </>
  );
  const processDescription = (
    <>
      Several factors influence the NEET cut-off marks and can vary each year.{" "}
      <br className="hidden lg:block" /> Understanding these factors can give
      you valuable insights into what to expect and{" "}
      <br className="hidden lg:block" />
      how to plan your preparation.
    </>
  );
  const processData = [
    {
      id: 1,
      title: "Difficulty Level of the Exam",
      description:
        " The difficulty level of the NEET exam plays a significant role in determining the cut-off marks. If the exam is relatively easier, the cut-off marks may be higher, and vice versa.",
      img: Assets.Modes,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Number of Applicants",
      description:
        " The number of applicants appearing for the NEET exam also impacts the cut-off marks. If there is a large pool of candidates, the competition increases, and the cut-off marks may be higher. ",
      img: Assets.Registration,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Availability of Seats",
      description:
        "The availability of seats in medical colleges affects the cut-off marks. If there are limited seats, the cut-off marks may be higher as the competition for those seats intensifies.",
      img: Assets.Conducted,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Category of the Candidate",
      description:
        "The cut-off marks vary for different categories of candidates, such as General, OBC, SC, ST, and PH. Depending upon the Central reservation policy/state-wide reservation policies candidates from reserved categories have a certain percentage of seats reserved for them.",
      img: Assets.Number,
      classes: "shadow-violet",
    },
    {
      id: 5,
      title: "Previous Year's Cut-off Trends",
      description:
        "Analyzing the cut-off trends from previous years can give you an idea of the expected cut-off marks for the current year. It helps in understanding the competition and setting realistic goals.",
      img: Assets.Exploring,
      classes: "shadow-sandle",
    },
  ];
  const processPara = (
    <>
      By considering these factors and staying informed about the latest
      updates, you can better strategize <br className="hidden lg:block" /> your
      preparation and increase your chances of achieving the desired cut-off
      marks.
    </>
  );
  return (
    <>
      <Helmet>
        <title>Cracking the NEET Cut-off for Medical Career</title>
      </Helmet>
      <Banner title={title} description={description} />
      <EligibilityCriteria
        eligibilityTitle={eligibilityTitle}
        eligibilityData={eligibilityData}
      />
      <WhatIsProcess
        processTitle={processTitle}
        processDescription={processDescription}
        processData={processData}
        processPara={processPara}
      />
    </>
  );
};

export default NeetCutOff;
