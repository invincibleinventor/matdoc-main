import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import EligibilityCriteria from "../NeetCounsellingProcess/EligibilityCriteria";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";
import { Assets } from "../../assets/Assets";

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

  // Eligibility criteria for participating in MCC NEET-UG Counselling;

  const eligibilityTitle = (
    <>
      {" "}
      Eligibility criteria for participating
      <br className="hidden lg:block" />
      in MCC NEET-UG Counselling
    </>
  );

  const eligibilityDescription = (
    <>
      To participate in the MCC NEET UG counselling schedule and process, you
      must
      <br className="hidden lg:block" />
      fulfil certain eligibility criteria. These criteria are set by the Medical
      Counselling <br className="hidden lg:block" />
      Committee (MCC) and are as follows
    </>
  );

  const eligibilityData = [
    {
      id: 1,
      desc: (
        <>
          <span className="font-bold"> Nationality: </span> You must be a
          citizen of India or an Overseas Citizen of India (OCI).
        </>
      ),
      classes: "bg-yellow-550",
    },
    {
      id: 2,
      desc: (
        <>
          <span className="font-bold"> Age: </span> Candidates must be at least
          17 years old as of December 31 of the admission year.
        </>
      ),
      classes: "bg-green-550",
    },
    {
      id: 3,
      desc: (
        <>
          <span className="font-bold"> Educational Qualification: </span>{" "}
          Candidates must pass the 10+2 examination or equivalent with Physics,
          Chemistry, Biology/Biotechnology, and English as compulsory subjects.
          You should also obtain a minimum aggregate score of 50% in PCB (40%
          for SC/ST/OBC candidates).
        </>
      ),
      classes: "bg-orange-550",
    },
    {
      id: 4,
      desc: (
        <>
          <span className="font-bold"> NEET-UG Qualification: </span> You should
          be qualified for the NEET-UG examination and obtain the minimum
          qualifying percentile as specified by the MCC.
        </>
      ),
      classes: "bg-violet-550",
    },
    {
      id: 5,
      desc: (
        <>
          <span className="font-bold"> Category-specific Criteria: </span>{" "}
          Candidates belonging to reserved categories (SC/ST/OBC) must fulfil
          specific criteria as per government norms.
        </>
      ),
      classes: "bg-blue-550",
    },
  ];
  const eligibilityPara = (
    <>
      It is necessary to understand that achieving the qualifying requirements
      does not
      <br className="hidden lg:block" />
      guarantee admission. The final admission is based on the candidate's
      NEET-UG score, <br className="hidden lg:block" />
      choice filling, and seat availability.
    </>
  );

  // Timeline for MCC NEET-UG Counselling

  const processTitle = (
    <>
      Timeline for MCC NEET-UG <br className="hidden lg:block" />
      Counselling
    </>
  );
  const processDescription = (
    <>
      To stay on top of the MCC NEET UG counselling schedule and process, it is
      crucial <br className="hidden lg:block" /> to be aware of the important
      dates and timelines. The MCC releases a detailed
      <br className="hidden lg:block" />
      schedule that includes registration dates, choice filling dates, seat
      allotment dates, <br className="hidden lg:block" />
      and reporting dates. Here are the key things to keep in mind
    </>
  );
  const processData = [
    {
      id: 1,
      title: "Registration",
      description:
        "The registration process generally starts in July. You must complete the online registration by providing your personal and academic details, NEET-UG roll number, and other required information.",
      img: Assets.RegistrationMcc,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Choice Filling",
      description:
        "After the registration process, you must fill in your choices of colleges and courses based on your preferences. The choice-filling window is usually open for a specific period, and you must carefully prioritize your choices.",
      img: Assets.ChoiceFilling,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Seat Allotment?",
      description:
        "Once the choice-filling period is over, the MCC conducts multiple rounds of seat allotment. The seat allotment is based on the candidate's NEET-UG rank, choices filled, and availability of seats. On the MCC website, you can check the results of each round.",

      img: Assets.Seat,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Report to the College you are allotted",
      description:
        "After the seat allotment, candidates who are allotted a seat must report to the allotted college within the specified time frame. Failure to report on time may result in the cancellation of your allotted seat.",
      img: Assets.Report,
      classes: "shadow-violet",
    },
    {
      id: 5,
      title: "Document Verification",
      description:
        "At the time of reporting, you must carry all the necessary documents for verification. These include the NEET-UG scorecard, admit card, mark sheets, identity proof, category certificate (if applicable), and other relevant documents. The college authorities will verify the documents and confirm the admission.",
      img: Assets.Verification,
      classes: "shadow-sandle",
    },
    {
      id: 6,
      title: "Fee Payment and Admission Process",
      description:
        "Once the documents are verified, you are required to pay the admission fees to confirm your seat. The fee payment process varies from college to college, and you must follow the instructions provided by the respective college.",
      para: "It is important to note that the above dates are subject to change. You must also regularly check the MCC website for updates and notifications regarding the counselling process.",
      img: Assets.Fee,
      classes: "shadow-green",
    },
  ];
  return (
    <>
      <Helmet>
        <title>NEET UG Counselling Date and Timeline for 2024</title>
      </Helmet>
      <Banner title={title} description={description} />
      <EligibilityCriteria
        eligibilityTitle={eligibilityTitle}
        eligibilityDescription={eligibilityDescription}
        eligibilityData={eligibilityData}
        eligibilityPara={eligibilityPara}
      />
      <WhatIsProcess
        processTitle={processTitle}
        processDescription={processDescription}
        processData={processData}
      />
    </>
  );
};

export default NeetUgCounsellingDate;
