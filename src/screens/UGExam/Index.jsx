import { Assets } from "../../assets/Assets";
import Banner from "./Banner";

const UGExam = () => {
  return (
    <Banner
      PageTitle="NEET UG"
      img={Assets.UGExamBanner}
      heading="MAT DOC helps you with"
      box1img={Assets.Clarity}
      box1heading="  Clarity on options"
      box1desc="  Parents, your child's journey is our priority. Explore the vast
              world of medical colleges, and courses, with ease. The platform
              breaks down complex information into understandable nuggets,
              helping you make informed decisions that shape your future."
      box1color="shadow-blue"
      box2img={Assets.Money}
      box2heading="Financial Confidence"
      box2desc="We get it -education costs weigh heavily on your minds. That's why
              we offer insights into fees, scholarships, and financial
              considerations, ensuring you're well-prepared for this significant
              investment."
      box2color="shadow-green"
      box3img={Assets.Growth}
      box3heading="Future-Proofing"
      box3desc="    Discover colleges that go beyond academics. Our insights into
              learning opportunities, post-MBBS options, and college reputation
              empower you to choose a college that truly aligns with your
              aspirations. Further, we provide the number of beds available in
              the hospital attached to the institute to help you understand the
              hands-on experience you would be getting."
      box3color="shadow-yellow"
    />
  );
};

export default UGExam;
