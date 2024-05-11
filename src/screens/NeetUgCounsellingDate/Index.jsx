import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import EligibilityCriteria from "../NeetCounsellingProcess/EligibilityCriteria";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";
import { Assets } from "../../assets/Assets";
import EducationQualification from "../NeetCounsellingProcess/EducationQualification";
import NeetProcess from "../NeetCounsellingProcess/NeetProcess";
import StateQuota from "../NeetCounsellingProcess/StateQuota";

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

  //  Registration process for MCC NEET-UG Counselling

  const educationTitle = (
    <>
      Registration process for MCC <br className="hidden lg:block" /> NEET-UG
      Counselling
    </>
  );
  const educationdescription = (
    <>
      The registration process for MCC NEET UG counselling is an essential step
      for <br className="hidden lg:block" /> candidates aspiring to secure
      admission to UG medical and dental programs.
    </>
  );

  const educationData = [
    {
      id: 1,
      title: "Check the site",
      desc: "The registration process is conducted online, and candidates must visit the official MCC website to access the registration portal.",
    },
    {
      id: 2,
      title: "Read the instructions",
      desc: "Before starting the registration process, you must carefully read the instructions provided on the website. To avoid any errors during the registration process, you must read the instructions properly.",
    },
    {
      id: 3,
      title: "Fill in your details",
      desc: "You must provide your personal information, academic details, NEET-UG roll number, and other necessary details as specified in the registration form. It is always safe to double-check the information you entered to ensure accuracy.",
    },
    {
      id: 4,
      title: "Generate a password",
      desc: "Candidates must choose a strong password to secure their account. The password should be a combination of alphabets, numbers, and special characters to enhance security.",
    },
    {
      id: 5,
      title: "Submit the registration form",
      desc: "Once all the details are filled in, candidates must review the information entered and submit the registration form. It is advisable to take a printout of the registration form for future reference.",
    },
    {
      id: 6,
      title: "Pay the registration fee",
      desc: "After submitting the registration form, candidates must pay the registration fee. The fee can be paid online through various payment modes such as net banking, credit card, or debit card. The registration fee is non-refundable and varies for different categories. Once the registration process is complete, you proceed to the choice-filling stage. It is important to note that if you do not register within the specified time frame you will not be eligible for further stages of the counselling process.",
    },
  ];

  // Choice Filling and Locking Stage

  const choiceFillingTitle = <>Choice Filling and Locking Stage</>;

  const choiceFillingDescription = (
    <>
      The choice filling and locking stage is a crucial part of the MCC NEET-UG
      <br className="hidden lg:block" />
      counselling process as it allows you to prioritize the colleges and
      courses you prefer.
    </>
  );

  const choiceFillingData = [
    {
      id: 1,
      desc: (
        <>
          <ul className="ml-5 list-disc ">
            <li className="pl-2 mt-3 first:mt-0 ">
              First you must log in to the MCC website using their registered
              credentials.
            </li>
            <li className="pl-2 mt-3 first:mt-0 ">
              Once logged in, you have access to the choice filling portal. The
              portal provides a list of colleges and courses available for
              selection.
            </li>
            <li className="pl-2 mt-3 first:mt-0 ">
              You must carefully research the colleges and courses before making
              your choices. Factors such as college reputation, location,
              infrastructure, faculty, and placement records should be
              considered.
            </li>
            <li className="pl-2 mt-3 first:mt-0 ">
              Based on your preferences, you must fill in your choices of
              colleges and courses. The order of preference is crucial as seat
              allotment will be based on these choices. You must also remember
              to lock your choices before the specified deadline to ensure that
              your preferences are considered for seat allotment.
            </li>
            <li className="pl-2 mt-3 first:mt-0 ">
              After locking the choices, you must take a printout of the filled
              choices for future reference.
            </li>
          </ul>
        </>
      ),
      classes: "bg-green-550",
    },
  ];
  const choiceFillingPara = (
    <>
      It is important to note that you can modify your choices during the
      choice-filling period.
      <br className="hidden lg:block" />
      However, once the choices are locked, no further modifications can be
      made.
    </>
  );

  // Seat Allotment Process

  const seatAllotmentTitle = <>Seat Allotment Process</>;
  const seatAllotmentDescription = (
    <>
      The seat allotment process in MCC NEET-UG counselling is conducted in
      multiple
      <br className="hidden lg:block" />
      rounds based on the candidate's NEET-UG rank, choices filled, and
      availability of
      <br className="hidden lg:block" />
      seats. Here is a gist of how the process goes:
    </>
  );
  const seatAllotmentData = [
    {
      id: 1,
      title: "Round 1",
      description:
        "The first round of seat allotment is conducted after the choice filling and locking process is complete. Candidates who are allotted seats in this round have the option to avail free exit (not accept the allotted seat), or accept the allotted seat and participate in the subsequent rounds for a better seat. Candidates who accept the allotted seat must report to the allotted college for admission.",
      img: Assets.Round01,
      classes: "shadow-yellow",
    },
    {
      id: 2,
      title: "Round 2",
      description:
        "After the completion of Round 1, the MCC conducts subsequent rounds of seat allotment for candidates who have not accepted the allotted seat or have opted for an upgrade. The process is similar to Round 1, and candidates must report to the allotted college if they accept the seat allotment. Candidates who are admitted in Round 2 are allowed to upgrade in Round 3.",
      img: Assets.Round02,
      classes: "shadow-blue",
    },
    {
      id: 3,
      title: "Round 3",
      description:
        "From 2023, MCC has started conducting a third round for candidates who were not allotted/have not accepted any seat till Round 2, or candidates who have opted for an upgraded seat. A candidate who is allotted a seat in Round 3 (fresh seat or upgraded seat) is not eligible for the Stray rounds irrespective of whether the candidate joins the seat or not.",

      img: Assets.Round03,
      classes: "shadow-red",
    },
    {
      id: 4,
      title: "Stray Round",
      description:
        "In addition to the regular rounds, a stray round is conducted to fill the remaining vacant seats. This round is usually held for seats that are not filled in the previous rounds. Candidates who have not been allotted seats in the previous rounds are eligible for the Stray round.",
      img: Assets.Round04,
      classes: "shadow-violet",
    },
  ];

  // Reporting to the allotted college and document verification

  const NeetProcesstitle = (
    <>
      Reporting to the allotted college <br className="hidden lg:block" /> and
      document verification
    </>
  );
  const NeetProcessdescription = (
    <>
      Once you are allotted a seat, you must report to the allotted college
      within the
      <br className="hidden lg:block" />
      specified time frame. Reporting to the college is an important step to
      confirm <br className="hidden lg:block" /> admission and complete the
      document verification process.
    </>
  );
  const NeetProcessImg = Assets.MccWeb;

  // Fee Payment and Admission Process

  const feePaymentTitle = <>Fee Payment and Admission Process</>;

  const feePaymentDescription = (
    <>
      After the document verification is complete, you are required to pay the
      admission
      <br className="hidden lg:block" />
      fees to confirm your seat. The fee payment process varies from college to
      college,
      <br className="hidden lg:block" />
      and candidates must follow the instructions provided by the respective
      college. <br className="hidden lg:block" />
      Here are the general steps involved in the fee payment and admission
      process:
    </>
  );

  const feePaymentData = [
    {
      id: 1,
      desc: "Once the document verification is complete, the college authorities will provide the fee payment details, including the amount and the payment modes accepted.",
      classes: "bg-yellow-550",
    },
    {
      id: 2,
      desc: "You must choose the payment mode that is convenient for you. The payment can be usually made through net banking, credit card, debit card, or other specified modes. Some Government colleges however may insist on payment of fees as cash through a challan mode at the designated bank counters at the college.",
      classes: "bg-green-550",
    },
    {
      id: 3,
      desc: "Using the chosen payment mode, you must pay the admission fees within the specified time frame. It is important to keep the payment receipt or transaction details for future reference.",
      classes: "bg-orange-550",
    },
    {
      id: 4,
      desc: "After the fee payment, candidates must complete the remaining admission formalities as instructed by the college authorities. This may include submitting additional documents, signing the admission agreement, and attending orientation programs.",
      classes: "bg-violet-550",
    },
  ];
  const feePaymentPara = (
    <>
      It is crucial to complete the fee payment and admission process within the
      specified time
      <br className="hidden lg:block" />
      frame. Failure to do so may result in the cancellation of the allotted
      seat, and the seat may <br className="hidden lg:block" />
      be offered to other eligible candidates.
    </>
  );

  // Conclusion

  const conclusionQuotaTitle = <>Conclusion</>;
  const conclusionQuotaDesc = (
    <>
      From eligibility criteria and important dates to registration, choice
      filling, seat allotment, and document verification, this site has provided
      a comprehensive overview of the MCC NEET-UG counselling process. By
      following the guidelines and ensuring timely completion of each stage, you
      can increase your chances of securing admission to your dream college.
    </>
  );
  const conclusionQuotaPara = (
    <>
      So, whether you are a parent supporting your child's dreams or a student
      aiming for a successful medical career, equip yourself with the knowledge
      and insights.
    </>
  );
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
      <EducationQualification
        educationTitle={educationTitle}
        educationData={educationData}
        educationdescription={educationdescription}
      />
      <EligibilityCriteria
        eligibilityTitle={choiceFillingTitle}
        eligibilityDescription={choiceFillingDescription}
        eligibilityData={choiceFillingData}
        eligibilityPara={choiceFillingPara}
      />
      <WhatIsProcess
        processTitle={seatAllotmentTitle}
        processDescription={seatAllotmentDescription}
        processData={seatAllotmentData}
      />
      <NeetProcess
        NeetProcessImg={NeetProcessImg}
        NeetProcesstitle={NeetProcesstitle}
        NeetProcessdescription={NeetProcessdescription}
      />
      <EligibilityCriteria
        eligibilityTitle={feePaymentTitle}
        eligibilityDescription={feePaymentDescription}
        eligibilityData={feePaymentData}
        eligibilityPara={feePaymentPara}
      />
      <StateQuota
        stateQuotaDesc={conclusionQuotaDesc}
        stateQuotaTitle={conclusionQuotaTitle}
        stateQuotaPara={conclusionQuotaPara}
      />
    </>
  );
};

export default NeetUgCounsellingDate;
