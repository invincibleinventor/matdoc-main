import "./style.css";
import PropTypes from "prop-types";
const EducationQualification = ({ educationTitle, educationData }) => {
  return (
    <section className="w-full py-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{educationTitle}</h2>
        <div className="flex flex-wrap justify-between w-full mt-16 gap-y-10 ">
          {educationData &&
            educationData.map((data) => (
              <div
                className="w-[31%] pt-9 px-7 pb-7 text-white bg-[#18181B] group transition duration-300 ease-in-out shadow-cards rounded "
                key={data.id}
              >
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 ease-in-out border border-gray-500 rounded group-hover:bg-primary-brown ">
                  {data.id}
                </div>
                <p className="mt-5 text-lg">{data.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
EducationQualification.propTypes = {
  educationTitle: PropTypes.func.isRequired,
  educationData: PropTypes.func.isRequired,
};
export default EducationQualification;
