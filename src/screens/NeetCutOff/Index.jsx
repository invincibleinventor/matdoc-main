import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import EligibilityCriteria from "../NeetCounsellingProcess/EligibilityCriteria";
import { Assets } from "../../assets/Assets";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";
import NeetMarks from "./NeetMarks";
import EducationQualification from "../NeetCounsellingProcess/EducationQualification";
import StateQuota from "../NeetCounsellingProcess/StateQuota";

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
      img: Assets.NeetCutOffExam,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Number of Applicants",
      description:
        " The number of applicants appearing for the NEET exam also impacts the cut-off marks. If there is a large pool of candidates, the competition increases, and the cut-off marks may be higher. ",
      img: Assets.NeetCutOffApplicants,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Availability of Seats",
      description:
        "The availability of seats in medical colleges affects the cut-off marks. If there are limited seats, the cut-off marks may be higher as the competition for those seats intensifies.",
      img: Assets.NeetCutOffAvailability,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Category of the Candidate",
      description:
        "The cut-off marks vary for different categories of candidates, such as General, OBC, SC, ST, and PH. Depending upon the Central reservation policy/state-wide reservation policies candidates from reserved categories have a certain percentage of seats reserved for them.",
      img: Assets.NeetCutOffCategory,
      classes: "shadow-violet",
    },
    {
      id: 5,
      title: "Previous Year's Cut-off Trends",
      description:
        "Analyzing the cut-off trends from previous years can give you an idea of the expected cut-off marks for the current year. It helps in understanding the competition and setting realistic goals.",
      img: Assets.NeetCutOffTrends,
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

  // NEET Cut-off Marks for Previous Years

  const neetCutOffTitle = <> NEET Cut-off Marks for Previous Years</>;

  const neetCutOffData = [
    {
      id: 1,
      desc: (
        <>
          <ul className="ml-5 list-disc">
            <li className="pl-3 mt-3 first:mt-0 ">
              To get an idea of the NEET cut-off 2024, it is helpful to look at
              the cut-off marks from previous years. While the cut-off marks can
              vary each year, analyzing the trends can provide valuable
              insights.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              In 2023, the NEET cut-off marks for the General category were 137
              out of 720, while for OBC, SC, and ST categories, it was 107 out
              of 720. These marks give an indication of the minimum scores
              required for different categories.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              The cut-off marks for the ST category can be around 75 to 100
              marks lower than the General category. For example, if the General
              category cut-off marks are 675, the ST category may have a cut-off
              of around 575-600.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              It is important to note that these cut-off marks are based on the
              All India Quota seats and may vary for state-level and private
              medical colleges. It is advisable to check the official websites
              of the respective colleges for accurate information.
            </li>
          </ul>
        </>
      ),
      classes: "bg-violet-550",
    },
  ];

  // How to Calculate NEET Marks

  const neetCalculateTitle = <> NEET Cut-off Marks for Previous Years</>;
  const neetCalculateDescription = (
    <>
      Calculating the marks with a NEET rank predictor is a straightforward
      process, but it <br className="hidden lg:block" />
      is essential to understand the formula to ensure accuracy. Here is a
      step-by-step
      <br className="hidden lg:block" />
      guide to calculating the cut-off marks
    </>
  );
  const neetCalculateData = [
    {
      id: 1,
      desc: (
        <>
          <ul className="ml-5 list-disc">
            <li className="pl-3 mt-3 first:mt-0 ">
              Determine the total number of questions answered correctly by a
              candidate.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              Multiply the number of correct answers by the marks assigned to
              each question (4 marks each).
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              Deduct the negative marks for incorrect answers. For each
              incorrect answer, deduct 1 mark.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              The final score obtained is the candidate's NEET score.
            </li>
            <li className="pl-3 mt-3 first:mt-0 ">
              Compare the NEET score with the cut-off marks to determine
              eligibility.
            </li>
          </ul>
          <div className="w-[90%] mx-auto bg-gray-800 rounded text-lg text-white py-2 px-3 mt-5">
            For example, if a candidate answers 150 questions correctly out of
            180 and has 30 incorrect answers, the calculation would be as
            follows
          </div>
        </>
      ),
      classes: "bg-red-550",
    },
  ];

  // Strategies to Achieve the Desired NEET Cut-off Marks

  const educationTitle = (
    <>
      Strategies to Achieve the Desired
      <br className="hidden lg:block" /> NEET Cut-off Marks{" "}
    </>
  );
  const educationdescription = (
    <>
      Now that you understand the factors influencing the NEET UG rank predictor
      and <br className="hidden lg:block" /> the cut-off marks and how to
      calculate them, it's time to focus on strategies to{" "}
      <br className="hidden lg:block" />
      achieve the desired cut-off marks. You can use these tips to prepare
      yourself for the <br className="hidden lg:block" />
      NEET examination
    </>
  );

  const educationData = [
    {
      id: 1,
      title: "Plan out your study timetable",
      desc: "Develop a comprehensive study plan that covers all the subjects and topics included in the NEET rank predictor and the syllabus. Allocate sufficient time for each subject and ensure regular practice.",
    },
    {
      id: 2,
      title: "Practice Mock Tests",
      desc: "Take regular mock tests to assess your performance and identify areas that need improvement. Mock tests help you get accustomed to the exam format and improve your time management skills.",
    },
    {
      id: 3,
      title: "Focus on Weak Areas",
      desc: "Identify your weak areas and dedicate additional time and effort to improve them. Seek assistance from instructors, mentors, or internet resources to explain questions and deepen your comprehension.",
    },
    {
      id: 4,
      title: "Revise Regularly",
      desc: "Regular revision is crucial to retain information and reinforce concepts. Make a habit of revising important topics at regular intervals to ensure long-term retention.",
    },
    {
      id: 5,
      title: "Stay Updated",
      desc: "Keep yourself updated with the latest news and updates regarding the NEET exam. Stay informed about any changes in the exam pattern, syllabus, or eligibility criteria by checking it up on the NEET UG rank predictor.",
    },
    {
      id: 6,
      title: "Time Management",
      desc: "Develop effective time management skills to ensure that you can complete the exam within the given time frame. To increase your speed and accuracy, practice answering questions in a timed format.",
    },
  ];

  const educationPara = (
    <>
      By using these tactics and remaining committed to your preparation, you
      can improve your chances of meeting
      <br className="hidden lg:block" /> the necessary cut-off marks and being
      admitted to your ideal medical institution.
    </>
  );

  // NEET Cut-off Marks for Top Medical Colleges in India

  const neetCutOffMedicalTitle = (
    <>
      NEET Cut-off Marks for
      <br className="hidden lg:block" />
      Top Medical Colleges in India
    </>
  );
  const neetCutOffMedicalDescription = (
    <>
      The marks for NEET cut-off 2024 for admission to top medical colleges in
      India can
      <br className="hidden lg:block" /> be higher compared to other colleges.
      These colleges are known for their excellent
      <br className="hidden lg:block" />
      infrastructure, faculty, and research opportunities. Here are the cut-off
      marks for <br className="hidden lg:block" />
      some of the top medical colleges in India:
    </>
  );
  const neetCutOffMedicalData = [
    {
      id: 1,
      title: "All India Institute of Medical Sciences (AIIMS), Delhi",
      description:
        " The cut-off marks for AIIMS Delhi, can be quite high, with the General category requiring a score above 710. The cut-off marks for reserved categories are relatively lower.",
      img: Assets.AIIMS,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Armed Forces Medical College (AFMC), Pune:",
      description:
        "AFMC is a prestigious institution, and the cut-off marks are typically high. The General category may require a score above 625, while the cut-off marks for reserved categories may vary. ",
      img: Assets.AFMC,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Christian Medical College (CMC), Vellore",
      description:
        "CMC Vellore, is known for its quality education and research facilities. The cut-off marks for the General category can range from 600 to 650, depending on the competition.",
      img: Assets.CMC,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Maulana Azad Medical College (MAMC), Delhi",
      description:
        "MAMC Delhi, is a sought-after medical college, and the cut-off marks can be competitive. The General category may require a score above 700, while the cut-off marks for reserved categories may vary.",
      img: Assets.MAMC,
      classes: "shadow-violet",
    },
  ];
  const neetCutOffMedicalPara = (
    <>
      These are just a few examples, and the cut-off marks for other top medical
      colleges in India may vary. It is <br className="hidden lg:block" />{" "}
      advisable to check the official websites of the respective colleges for
      accurate and updated information.
    </>
  );

  // NEET Cut-off Marks for Reserved Categories

  const reservedCategoriesTitle = (
    <>
      NEET Cut-off Marks for Reserved
      <br className="hidden lg:block" />
      Categories
    </>
  );

  const reservedCategoriesDescription = (
    <>
      The NEET UG rank predictor predicts that the cut-off marks for reserved
      categories
      <br className="hidden lg:block" />
      are relatively lower compared to the General category in All India
      Counselling. Here <br className="hidden lg:block" />
      are the approximate cut-off marks for reserved categories:
    </>
  );

  const reservedCategoriesData = [
    {
      id: 1,
      desc: (
        <>
          <span className="font-bold"> OBC Category: </span> The cut-off marks
          for the OBC category can be around 10 to 15 marks lower than the
          General category. For example, if the General category cut-off marks
          are 600, the OBC category may have a cut-off of around 585-595.
        </>
      ),
      classes: "bg-yellow-550",
    },
    {
      id: 2,
      desc: (
        <>
          <span className="font-bold"> SC Category: </span> The cut-off marks
          for the SC category can be around 50 to 75 marks lower than the
          General category. For example, if the General category cut-off marks
          are 675, the SC category may have a cut-off of around 600-625.
        </>
      ),
      classes: "bg-green-550",
    },
    {
      id: 3,
      desc: (
        <>
          <span className="font-bold"> ST Category: </span> The cut-off marks
          for the ST category can be around 75 to 100 marks lower than the
          General category. For example, if the General category cut-off marks
          are 675, the ST category may have a cut-off of around 575-300.
        </>
      ),
      classes: "bg-blue-550",
    },
  ];
  const reservedCategoriesPara = (
    <>
      It is important to note that these percentages may vary each year and
      across different
      <br className="hidden lg:block" />
      ranes in colleges.
    </>
  );

  // Conclusion: Tips for Success in NEET 2024 and Importance of Cut-off Marks

  const conclusionQuotaTitle = (
    <>
      Conclusion: Tips for Success in NEET 2024 and Importance of Cut-off Marks
    </>
  );
  const conclusionQuotaDesc = (
    <>
      Create a study plan, practice regularly, focus on weak areas, and stay
      updated with the latest information. Develop effective time management
      skills and revise regularly to ensure a solid foundation of knowledge.
    </>
  );
  const conclusionQuotaPara = (
    <>
      Remember, the NEET UG rank predictor and the NEET cut-off marks are not
      the end goal but a stepping stone towards your dream medical college. Aim
      high, stay motivated, and give your best in the exam. With determination,
      hard work, and the right guidance, you can crack the code and make your
      NEET 2024 aspirations a reality.
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
      <EligibilityCriteria
        eligibilityTitle={neetCutOffTitle}
        eligibilityData={neetCutOffData}
      />
      <EligibilityCriteria
        eligibilityTitle={neetCalculateTitle}
        eligibilityDescription={neetCalculateDescription}
        eligibilityData={neetCalculateData}
      />
      <NeetMarks />
      <EducationQualification
        educationTitle={educationTitle}
        educationData={educationData}
        educationdescription={educationdescription}
        educationPara={educationPara}
      />
      <WhatIsProcess
        processTitle={neetCutOffMedicalTitle}
        processDescription={neetCutOffMedicalDescription}
        processData={neetCutOffMedicalData}
        processPara={neetCutOffMedicalPara}
      />
      <EligibilityCriteria
        eligibilityTitle={reservedCategoriesTitle}
        eligibilityDescription={reservedCategoriesDescription}
        eligibilityData={reservedCategoriesData}
        eligibilityPara={reservedCategoriesPara}
      />
      <StateQuota
        stateQuotaDesc={conclusionQuotaDesc}
        stateQuotaTitle={conclusionQuotaTitle}
        stateQuotaPara={conclusionQuotaPara}
      />
    </>
  );
};

export default NeetCutOff;
