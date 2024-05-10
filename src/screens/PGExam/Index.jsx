import { useEffect } from "react";
import { Assets } from "../../assets/Assets";
import Banner from "../UGExam/Banner";
import { Helmet } from "react-helmet";

const PGExam = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {" "}
      <Helmet>
        <title>NEET PG - MAT DOC</title>
      </Helmet>
      <Banner
        PageTitle="NEET PG"
        img={Assets.UGExamBanner}
        heading="MAT DOC helps you with"
        box1img={Assets.Navigating}
        box1heading="Navigating Application Challenges"
        box1desc=" The tool guides you through the multitude of choices, helping you strategically list preferences and navigate multiple rounds in All India and State counselling with confidence. Our information on allotments, fees, bond, bond penalty, stipends and more will enable you to secure a reputable seat."
        box1color=" shadow-green"
        box2img={Assets.Research}
        box2heading="
                Specialization Insights and Research Opportunities
              "
        box2desc="Dive deep into the array of specialization options, research prospects, clinical exposure, practical training, and faculty expertise in your chosen field, you can explore. We provide you with detailed information about each path, so you can choose what aligns best with your aspirations."
        box2color="shadow-yellow "
        box3img={Assets.Flexibility}
        box3heading="Flexibility Tailored to You"
        box3desc=" As a mature student, flexibility is key. ZyNerd understands your responsibilities and commitments. We help you find postgraduate courses that offer the flexibility you need to balance your priorities."
        box3color="shadow-blue"
      />
    </>
  );
};

export default PGExam;
