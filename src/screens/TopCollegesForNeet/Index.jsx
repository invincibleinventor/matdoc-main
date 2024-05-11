import { Helmet } from "react-helmet";
import Banner from "../NeetCounsellingProcess/Banner";
import { useEffect } from "react";
import ImportantMedicalClg from "./ImportantMedicalClg";
import WhatIsProcess from "../NeetCounsellingProcess/WhatIsProcess";
import { Assets } from "../../assets/Assets";
import EducationQualification from "../NeetCounsellingProcess/EducationQualification";
import StateQuota from "../NeetCounsellingProcess/StateQuota";

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

  //  Top 10 Government Medical Colleges in India

  const educationTitle = <>Top 10 Government Medical Colleges in India</>;

  const educationData = [
    {
      id: 1,
      title: "All India Institute of Medical Sciences (AIIMS)",
      desc: "AIIMS is one of India's most famous medical institutes. It is a group of autonomous public medical colleges located in various cities across the country. AIIMS, Delhi offers undergraduate and postgraduate courses in medical and paramedical subjects. The college is known for its excellent faculty, research facilities, and an exhaustive range of specializations.",
    },
    {
      id: 2,
      title: "Armed Forces Medical College (AFMC)",
      desc: "AFMC, is a major medical institute administered by the Indian Armed Forces. It provides undergraduate and postgraduate programmes in medicine, nursing, and allied health disciplines. The college has a strong focus on discipline, leadership, and military training, along with a rigorous academic curriculum.",
    },
    {
      id: 3,
      title:
        "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER)",
      desc: "JIPMER, located in Puducherry, is a renowned medical institution offering undergraduate and postgraduate courses in various disciplines. The college is known for its high-quality education, state-of-the-art infrastructure, and research opportunities. JIPMER also has its own hospital, providing students like you with hands-on training and exposure to a diverse patient population.",
    },
    {
      id: 4,
      title: "Maulana Azad Medical College (MAMC)",
      desc: "MAMC, situated in New Delhi, is a prestigious medical college affiliated with the University of Delhi. It offers undergraduate and postgraduate courses in medical and paramedical fields. The college has a strong importance on research and provides students with ample opportunities to engage in medical research projects.",
    },
    {
      id: 5,
      title: "King George's Medical University (KGMU)",
      desc: "KGMU, located in Lucknow, is a renowned government medical is the top institute for NEET offering undergraduate and postgraduate courses in medical sciences. The college is known for its excellent faculty, well-equipped laboratories, and research opportunities. KGMU also has a large teaching hospital that provides students with hands-on clinical training.",
    },
    {
      id: 6,
      title: "Madras Medical College (MMC), Chennai",
      desc: "Madras Medical College (MMC) is one of the government medical colleges under NEET UG located in the city of Chennai, Tamil Nadu, India. It is one of the oldest medical colleges in the country and was established in 1828. The college offers undergraduate and postgraduate medical programs, including MBBS, MD, MS, and PG Diploma courses in various specializations. ",
    },
    {
      id: 7,
      title:
        "Institute of Medical Sciences (IMS), Banaras Hindu University (BHU)",
      desc: "IMS-BHU, situated in Varanasi, is a renowned medical college affiliated with Banaras Hindu University. It offers undergraduate and postgraduate courses in medical and paramedical fields. The college has a rich history, excellent faculty, and an extensive range of specializations.",
    },
    {
      id: 8,
      title: "Grant Medical College (GMC), Mumbai",
      desc: "GMC, located in Mumbai, is one of the oldest medical colleges in India. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is known for its experienced faculty, excellent infrastructure, and strong focus on research.",
    },
    {
      id: 9,
      title: "Lady Hardinge Medical College (LHMC), New Delhi",
      desc: "LHMC, situated in New Delhi, is a premier medical college exclusively for women. It offers undergraduate and postgraduate courses in medical and allied health sciences. LHMC has a good range of opportunities with excellent professors and lots of departments to choose from.",
    },
    {
      id: 10,
      title:
        "Seth Gordhandas Sunderdas Medical College (GSMC) and King Edward Memorial (KEM) Hospital, Mumbai",
      desc: "GSMC-KEM, located in Mumbai, is a prestigious medical college associated with a large teaching hospital. It offers undergraduate and postgraduate courses in medical and paramedical fields. The college is known for its experienced faculty, well-equipped laboratories, and research opportunities.",
    },
  ];

  const educationPara = (
    <>
      These government medical colleges offer excellent education and training
      opportunities. <br className="hidden lg:block" />
      However, it's important to note that admission to these colleges is highly
      competitive, and
      <br className="hidden lg:block" />
      the selection is based on merit and NEET scores. Now, let's move on to the
      top 10 private <br className="hidden lg:block" />
      medical colleges in India.
    </>
  );

  //  Top 10 private medical colleges in India

  const privateMedicalTitle = <>Top 10 private medical colleges in India</>;

  const privateMedicalData = [
    {
      id: 1,
      title: "Christian Medical College (CMC), Vellore",
      desc: "CMC located in Vellore, is a prestigious private medical college known for its high-quality education and healthcare services. It offers undergraduate and postgraduate courses in various medical and allied health sciences disciplines. The college has a strong focus on ethical and compassionate medical practice, research, and community outreach programs.",
    },
    {
      id: 2,
      title: "Kasturba Medical College (KMC), Manipal",
      desc: "KMC, situated in Manipal, is one of the top private medical colleges in India. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is especially known by many people for its superb facilities, experienced faculty, and research possibilities. KMC also maintains partnerships with overseas universities, which provide students with possibilities for worldwide exposure.",
    },
    {
      id: 3,
      title: "St. John's Medical College (SJMC), Bangalore",
      desc: "SJMC, located in Bangalore, is a renowned private medical college affiliated with Rajiv Gandhi University of Health Sciences. It offers undergraduate and postgraduate courses in medical and paramedical fields. The college is known for its strong emphasis on research, community health programs, and holistic medical education.",
    },
    {
      id: 4,
      title: "Amrita Institute of Medical Sciences (AIMS), Kochi",
      desc: "AIMS, situated in Kochi, is one of the leading ones under top colleges for NEET and hospital in South India. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is known for its state-of-the-art infrastructure, advanced research facilities, and excellent faculty. AIMS also has collaborations with renowned international institutions, enabling students to gain exposure to global medical practices.",
    },
    {
      id: 5,
      title: "Sri Ramachandra Medical College (SRMC), Chennai",
      desc: "SRMC Sri Ramachandra Hospital is located in Chennai and is a prestigious private medical college affiliated with Sri Ramachandra University. It offers undergraduate and postgraduate courses in medical, dental and pharmacy. The college is known for its expertise in medical departments such as cardiology, oncology, orthopaedics, neurology and so on.",
    },
    {
      id: 6,
      title: "MS Ramiah Medical College, Bangalore",
      desc: "MSR MS Ramiah Medical College situated in Bangalore, is a popular choice for colleges under NEET UG amongst Indian students because of the quality of education they offer. They offer various medical courses with highly experienced professors and up-to-date facilities. Being known as the “Silicon Valley of India”, MSRMC provides the students with a rich educational environment to learn from.",
    },
    {
      id: 7,
      title: "Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar",
      desc: "KIMS, located in Bhubaneswar, is a renowned private medical college and hospital. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is known for its state-of-the-art infrastructure, experienced faculty, and research opportunities. KIMS also provides scholarships to meritorious students, making it an attractive choice for aspiring doctors.",
    },
    {
      id: 8,
      title: "D Y Patil Vidyapeeth Medical College, Pune",
      desc: "DYPV D Y Patil Vidyapeeth Medical College, situated in Pune, is one of the top colleges for NEET that is approved by AICTE, UGC and other relevant accrediting bodies. It offers undergraduate and postgraduate courses in various fields such as medical and dental courses. The college is known well for its dental programs and has modern infrastructure and facilities, including a state-of-the-art dental clinic, to ensure students receive the best possible training.",
    },
    {
      id: 9,
      title:
        "SRM Medical College Hospital and Research Centre (SRM MCHRC), Chennai",
      desc: "SRM MCHRC, located in Chennai, is a reputable private medical college affiliated with SRM Institute of Science and Technology. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is known for its modern infrastructure, experienced faculty, and research opportunities.",
    },
    {
      id: 10,
      title: "JSS Medical College and Hospital (JSSMCH), Mysuru",
      desc: "JSSMCH JSSMCH, situated in Mysuru, is a private medical college affiliated with JSS Academy of Higher Education and Research. It offers undergraduate and postgraduate courses in medical and allied health sciences. The college is known for its experienced faculty, research opportunities, and an extensive range of specializations.",
    },
  ];

  const privateMedicalPara = (
    <>
      These colleges under NEET UG provide excellent education and training
      opportunities, <br className="hidden lg:block" />
      and many of them have collaborations with international institutions,
      ensuring exposure to
      <br className="hidden lg:block" />
      global medical practices. However, it's important to consider the fees and
      admission
      <br className="hidden lg:block" />
      process when applying to private medical colleges.
    </>
  );
  // Conclusion

  const conclusionQuotaTitle = <>Conclusion</>;
  const conclusionQuotaDesc = (
    <>
      Choosing the top institute for NEET is a significant decision that
      requires careful consideration. The top 10 NEET-accepting medical colleges
      in India, both government and private, offer excellent education and
      training opportunities. However, it's crucial to keep your head on the
      factors mentioned earlier and consider your personal preferences and
      career goals before making a decision.
    </>
  );
  const conclusionQuotaPara = (
    <>
      Researching, visiting campuses, talking to current students and alumni,
      and seeking guidance from mentors or career counsellors can help you make
      an informed choice. Remember, the top colleges for NEET you choose will
      play a vital role in shaping your future career as a doctor. So, take your
      time, weigh your options, and make a decision that aligns with your
      aspirations and ambitions. Good luck!
    </>
  );
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
      <EducationQualification
        educationTitle={educationTitle}
        educationData={educationData}
        educationPara={educationPara}
      />
      <EducationQualification
        educationTitle={privateMedicalTitle}
        educationData={privateMedicalData}
        educationPara={privateMedicalPara}
      />
      <StateQuota
        stateQuotaDesc={conclusionQuotaDesc}
        stateQuotaTitle={conclusionQuotaTitle}
        stateQuotaPara={conclusionQuotaPara}
      />
    </>
  );
};

export default TopCollegesForNeet;
