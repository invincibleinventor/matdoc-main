import { useEffect } from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import WhatIsProcess from "./WhatIsProcess";
import { Assets } from "../../assets/Assets";
import EligibilityCriteria from "./EligibilityCriteria";
import EducationQualification from "./EducationQualification";
import StateQuota from "./StateQuota";
import NeetProcess from "./NeetProcess";
import PostDeclaration from "./PostDeclaration";
import NEETSelection from "./NEETSelection";
import Frequently from "./FAQ";

const NeetCounsellingProcess = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  const title = (
    <>
      Why is
      <span className="ml-2 highlight-container highlight-blue">
        <span className="highlight"> NEET Counselling </span>
      </span>
      <br className="hidden lg:block" /> process the gateway to your
      <br className="hidden lg:block" />
      <span className="ml-2 highlight-container highlight-orange">
        <span className="highlight">Medical Career?</span>
      </span>
    </>
  );
  const description = (
    <>
      Congratulations on clearing the NEET exam! Now, let's delve into the
      pivotal next step: <br className="hidden lg:block" />
      NEET counselling. This process serves as the gateway to your dream of
      pursuing a <br className="hidden lg:block" />
      medical career in esteemed institutions across India and one such good
      place for NEET <br className="hidden lg:block" />
      counselling is
      <span className="font-bold "> MAT DOC. </span>
    </>
  );
  const para = (
    <>
      So, what exactly is NEET counselling, and how does it work? Let's take a
      look at what it <br className="hidden lg:block" /> exactly means.
    </>
  );

  // What is NEET Counselling Process

  const processTitle = (
    <>
      What is NEET Counselling <br className="hidden lg:block" /> process?
    </>
  );
  const processDescription = (
    <>
      NEET counselling is the crucial phase following the successful completion
      of the <br className="hidden lg:block" /> exam. It's the mechanism through
      which aspiring medical students secure <br className="hidden lg:block" />
      admission to prestigious medical colleges nationwide. Based on their All
      India Rank <br className="hidden lg:block" />
      (AIR) and preferred college choices, seats are allocated to deserving
      candidates.
    </>
  );
  const processData = [
    {
      id: 1,
      title: "Modes of NEET Counselling",
      description:
        " The NEET counselling schedule is implemented in online mode from December 2022. Online counselling involves digital form  submissions and online choice/allotment procedures. There are    however a few states which still continue with offline    counselling. Offline counselling requires candidates to physically    report to designated venues.",
      img: Assets.Modes,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Registration Fee",
      description:
        " Candidates need to pay a non-refundable registration fee which may vary anywhere between Rs. 1000/- to Rs 5,000/- during the registration process. Additionally, a refundable security deposit which varies between Rs. 10,000/- to Rs 2 lakhs may be mandated based on the Counselling. ",
      img: Assets.Registration,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "When is NEET Counselling Conducted?",
      description:
        "NEET counselling typically commences post the exam results announcement and the thing that happens much before is the NEET counselling schedule. Only candidates meeting the NEET cut-off criteria are eligible to participate in this process.",
      para: "For 85% of state quota seats and private colleges within a state, respective state counselling authorities oversee the counselling process.",
      img: Assets.Conducted,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Number of Rounds",
      description:
        "The NEET counselling process consists of four rounds, inclusive of a stray round conducted for Govt/Deemed/Central universities.",
      img: Assets.Number,
      classes: "shadow-violet",
    },
    {
      id: 5,
      title: "Exploring Alternatives",
      description:
        "In the event a candidate fails to secure a seat in a medical college or a dental college, fret not! There are  myriad of equally enriching career avenues awaiting exploration. From Pharmacy to Clinical Research, the possibilities are endless.",
      img: Assets.Exploring,
      classes: "shadow-sandle",
    },
    {
      id: 6,
      title: "Participation in Subsequent Rounds",
      description:
        "Based on the NEET counselling schedule, after the first round is over candidates whose seats are allotted in the first round can either complete the admission process or join and opt for an upgrade in subsequent rounds. They also have the option to surrender their seat for participation in subsequent rounds.",
      img: Assets.Participation,
      classes: "shadow-green",
    },
  ];

  // Eligibility Criteria

  const eligibilityTitle = (
    <>
      {" "}
      Understanding NEET Eligibility
      <br className="hidden lg:block" />
      Criteria
    </>
  );

  const eligibilityDescription = (
    <>
      {" "}
      Eligibility for NEET entails a range of criteria, including educational
      qualifications, <br className="hidden lg:block" />
      nationality, minimum qualification scores, and more. Here's a list of
      category-wise <br className="hidden lg:block" />
      NEET eligibility guidelines crucial for understanding the NEET Selection
      Process.
    </>
  );

  const eligibilityData = [
    {
      id: 1,
      desc: "Candidates must attain the age of 17 years at the time of admission   to the 1st year MBBS/BDS undergraduate course or achieve the specified age by 31st December of the admission year.",
      classes: "bg-yellow-550",
    },
    {
      id: 2,
      desc: "Aspirants eyeing admission to the BSc Nursing programme through NEET counselling registration must be aged between 17 and 35 years as of December 31 of the relevant year.",
      classes: "bg-green-550",
    },
    {
      id: 3,
      desc: "There's no upper age limit for candidates aspiring for MBBS/BDS courses across India.",
      classes: "bg-orange-550",
    },
    {
      id: 4,
      desc: "General category candidates require a minimum of 50% aggregate marks in qualifying exams, while the threshold for SC/ST/OBC candidates is 40%.",
      classes: "bg-violet-550",
    },
    {
      id: 5,
      desc: "NEET includes three subjects such as physics, chemistry, and biology.",
      classes: "bg-blue-550",
    },
    {
      id: 6,
      desc: "You can attempt N number of times for the NEET examination.",
      classes: "bg-red-550",
    },
    {
      id: 7,
      desc: "Candidates appearing for board exams in the academic year of NEET and those who have appeared for Class 12 exams with an improvement are also eligible.",
      classes: "bg-green-550",
    },
  ];

  //  Education Qualification

  const educationTitle = <>Educational Qualification for NEET</>;

  const educationData = [
    {
      id: 1,
      desc: "Candidates must have cleared Class 12 Board Exams from a  recognized board with Physics, Chemistry, Biology/Biotechnology, and English as compulsory subjects.",
    },
    {
      id: 2,
      desc: "They should have secured the requisite marks in Physics, Chemistry, and Biology/Biotechnology and obtained a minimum aggregate score in these subjects.",
    },
    {
      id: 3,
      desc: "The minimum qualifying marks vary for different categories, with Scheduled Caste/Scheduled Tribes/Other Backward Classes and Persons with Disabilities having a different criteria.",
    },
    {
      id: 4,
      desc: "Candidates taking the Class XII exams are also eligible to take the entrance exam on a provisional basis, provided they meet the requirements outlined in the NEET notice.",
    },
    {
      id: 5,
      desc: "It's imperative for candidates to furnish proof of their date of birth while completing the NEET Application Form, ensuring adherence to the stipulated guidelines.",
    },
    {
      id: 6,
      desc: "With a clear understanding of the NEET seat allotment and eligibility criteria, aspiring candidates can embark on their journey towards pursuing their medical aspirations with confidence and clarity.",
    },
  ];

  // State Quota

  const stateQuotaTitle = <>State Quota and All India Quota Eligibility</>;
  const stateQuotaDesc = (
    <>
      Candidates aspiring for state quota seats must fulfil specific
      domicile/nativity/residence and schooling criteria. On the other hand, All
      India Quota seats are open to Indian citizens meeting age and academic
      requisites.
    </>
  );
  const stateQuotaPara = (
    <>
      You must always remember that the NEET counselling registration and its
      selection process is based upon a merit list (comprising All India Rank /
      State Rank) prepared by the National Testing Agency (NTA) post the
      successful conduct of the examination.
    </>
  );

  // Conclusion

  const conclusionQuotaTitle = <>Conclusion</>;
  const conclusionQuotaDesc = (
    <>
      The NEET counselling process is not just a procedural step, it's your
      bridge to a fulfilling medical career. Understanding its intricacies and
      eligibility criteria empowers you to navigate this journey seamlessly. As
      you embark on this transformative path, remember, each step brings you
      closer to realizing your aspirations. Best of luck on your NEET
      counselling journey!
    </>
  );

  return (
    <>
      <Helmet>
        <title>
          Why is NEET counselling process the gateway to your Medical Career?
        </title>
      </Helmet>
      <Banner title={title} description={description} para={para} />
      <WhatIsProcess
        processTitle={processTitle}
        processDescription={processDescription}
        processData={processData}
      />
      <EligibilityCriteria
        eligibilityTitle={eligibilityTitle}
        eligibilityDescription={eligibilityDescription}
        eligibilityData={eligibilityData}
      />
      <EducationQualification
        educationTitle={educationTitle}
        educationData={educationData}
      />
      <StateQuota
        stateQuotaDesc={stateQuotaDesc}
        stateQuotaPara={stateQuotaPara}
        stateQuotaTitle={stateQuotaTitle}
      />
      <NeetProcess />
      <PostDeclaration />
      <NEETSelection />
      <Frequently />
      <StateQuota
        stateQuotaDesc={conclusionQuotaDesc}
        stateQuotaTitle={conclusionQuotaTitle}
      />
    </>
  );
};

export default NeetCounsellingProcess;
