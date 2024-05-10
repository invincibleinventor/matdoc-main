import { MoveRight, Play } from "lucide-react";
import "./style.css";
import PropTypes from "prop-types";
import Button from "../../components/Atoms/button";

const Banner = ({
  PageTitle,
  img,
  heading,
  box1img,
  box1heading,
  box1desc,
  box1color,
  box2img,
  box2heading,
  box2desc,
  box2color,
  box3img,
  box3heading,
  box3desc,
  box3color,
}) => {
  return (
    <section className="w-full py-20">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <h2 className="text-center text-white " data-aos="fade-up">
          {PageTitle}
        </h2>
        <div
          className="mt-10 relative w-[80%] mx-auto rounded"
          data-aos="fade-up"
        >
          <img
            src={img}
            alt={PageTitle}
            title={PageTitle}
            className="w-full h-auto rounded"
          />
          <div className="absolute flex items-center justify-center w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full shadow cursor-pointer bg-primary-green top-1/2 left-1/2">
            <Play className="text-white " fill="#fff" size={44} />
          </div>
        </div>
        <h2 className="mt-24 text-center text-white" data-aos="fade-up">
          {heading}
        </h2>
        <div
          className="w-[80%] mt-16 mx-auto exam-features flex justify-between items-center"
          data-aos="fade-up"
        >
          <div className="w-[22%]">
            <div className={`illustration ${box1color}`}>
              <img
                src={box1img}
                alt={box1heading}
                title={box1heading}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-[70%]">
            <h3 className="text-3xl font-semibold text-white">{box1heading}</h3>
            <p className="mt-5 text-xl text-white">{box1desc}</p>
          </div>
        </div>
        <div
          className="w-[80%] mt-24 mx-auto exam-features flex justify-between items-center"
          data-aos="fade-up"
        >
          <div className="w-[22%]">
            <div className={`illustration ${box2color}`}>
              <img
                src={box2img}
                alt={box2heading}
                title={box2heading}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-[70%]">
            <h3 className="text-3xl font-semibold text-white">{box2heading}</h3>
            <p className="mt-5 text-xl text-white">{box2desc}</p>
          </div>
        </div>
        <div
          className="w-[80%] mt-24 mx-auto exam-features flex justify-between items-center"
          data-aos="fade-up"
        >
          <div className="w-[22%]">
            <div className={`illustration ${box3color}`}>
              <img
                src={box3img}
                alt={box3heading}
                title={box3heading}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-[70%]">
            <h3 className="text-3xl font-semibold text-white">{box3heading}</h3>
            <p className="mt-5 text-xl text-white">{box3desc}</p>
          </div>
        </div>
        <Button text="Explore Packages" classes=" common-btn blue mt-24" />
      </div>
    </section>
  );
};
Banner.propTypes = {
  PageTitle: PropTypes.func.isRequired,
  heading: PropTypes.func.isRequired,
  img: PropTypes.func.isRequired,
  box1img: PropTypes.func.isRequired,
  box1heading: PropTypes.func.isRequired,
  box1desc: PropTypes.func.isRequired,
  box1color: PropTypes.func.isRequired,
  box2img: PropTypes.func.isRequired,
  box2heading: PropTypes.func.isRequired,
  box2desc: PropTypes.func.isRequired,
  box2color: PropTypes.func.isRequired,
  box3img: PropTypes.func.isRequired,
  box3heading: PropTypes.func.isRequired,
  box3desc: PropTypes.func.isRequired,
  box3color: PropTypes.func.isRequired,
};
export default Banner;
