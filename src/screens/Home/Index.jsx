import { Assets } from "../../assets/Assets";
import Banner from "./Banner";
import BestSeat from "./BestSeat";
import CompetitiveEdge from "./CompetitiveEdge";
import ConsellingPlatform from "./ConsellingPlatform";
import DedicatedCompanion from "./DedicatedCompainon";
import DedicatedLeftBox from "./DedicatedLeftBox";
import DedicatedRightBox from "./DedicatedRightBox";
import WhyZyNerd from "./WhyZyNerd";
import WhyTheyLove from "./WhyTheyLove";
import YouDeserve from "./YouDeserve";

const Home = () => {
  return (
    <>
      <Banner />
      <ConsellingPlatform />
      <WhyZyNerd />
      <DedicatedCompanion />
      <DedicatedLeftBox
        subtitle=" MISSED DEADLINES? NOT ANYMORE."
        title="Comprehensive Information Hub"
        description=" Our centralised platform offers real-time updates on counselling
            notifications, deadlines, registration details, and events, keeping
            you on track and in control."
        img={Assets.TableIllustration}
        para="  Sourced from government websites, regulations, and other reliable
              sources, and is made available to you."
      />
      <DedicatedRightBox
        subtitle="BUILT ON STUDENT ADVICE"
        title="Tailored User Experience"
        description="
                Our user-friendly interface and extensive filters are
                meticulously designed to ensure that you access only the
                information that's relevant to you.
              "
        img={Assets.Tailored}
        para=" 
                  At MAT DOC, we understand that your time is precious. Say
                  goodbye to information overload and welcome a seamless
                  experience.
                "
      />
      <DedicatedLeftBox
        subtitle="YOUR CHOICES MADE BY YOU"
        title="Self-Service College Advisor"
        smallTitle="Take the guesswork out of your future."
        description=" Our tool helps you make informed choices with confidence by
                helping you understand your likelihood of getting into specific
                colleges based on your rank and category.
              "
        img={Assets.SelfServices}
        para=" 
               
                  Don't leave your future to chance. Our tool is your key to
                  informed and confident decision-making.
                
              "
      />
      <DedicatedRightBox
        subtitle="JOIN US ON THE JOURNEY"
        title="Community & Networking"
        description="
                
                Exchange experiences, concerns, and advice. Your journey is
                shared, and your support network grows here.
              
              "
        img={Assets.Community}
        para=" 
                  Your journey is a shared one, and within our community, your
                  support network continues to expand, offering you a sense of
                  belonging and a wealth of shared wisdom.
                
                "
      />
      <DedicatedLeftBox
        subtitle="AT YOUR SERVICE"
        title="Videos & Webinars"
        smallTitle="                  Navigate complex processes with ease.
"
        description="
                Our exclusive videos with our founder and counselling experts on
                topics like NEET application guidance, documents required, and
                more demystify applications, eligibility, and more, ensuring
                you're well-prepared at every stage.
              
              "
        img={Assets.VediosWebinars}
        para=" 
               
                  Always be well-prepared at every stage, ensuring a smooth
                  journey through the complexities of the medical counselling
                  process.
                
                  
              "
      />
      <DedicatedRightBox
        subtitle="WE'VE GOT YOUR BACK"
        title="Resources & FAQs"
        smallTitle="  Questions? We've got answers."
        description="
             
                Leverage our free resources to confidently navigate every stage
                of the  NEET counselling process
              
              "
        img={Assets.ResourcesFAQ}
        para=" 
                  
                  From initial queries to the final decisions, we've got you
                  covered, ensuring your journey is one of confidence and
                  clarity.
                
                
                "
      />
      <BestSeat />
      <CompetitiveEdge />
      <WhyTheyLove />
      <YouDeserve />
    </>
  );
};

export default Home;
