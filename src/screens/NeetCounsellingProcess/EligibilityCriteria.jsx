import PropTypes from "prop-types";
const EligibilityCriteria = ({
  eligibilityTitle,
  eligibilityDescription,
  eligibilityData,
}) => {
  return (
    <section className="w-full py-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{eligibilityTitle}</h2>

        <p className="mt-5 text-xl text-center text-white">
          {eligibilityDescription}
        </p>
        <ul className=" mt-10 w-[80%] mx-auto">
          {eligibilityData &&
            eligibilityData.map((item, index) => (
              <li
                className={`w-full p-8 mt-7 text-2xl border-2 border-gray-400 rounded first:mt-0 ${item.classes}`}
                key={index}
              >
                {item.desc}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
EligibilityCriteria.propTypes = {
  eligibilityTitle: PropTypes.func.isRequired,
  eligibilityDescription: PropTypes.func.isRequired,
  eligibilityData: PropTypes.func.isRequired,
};
export default EligibilityCriteria;
