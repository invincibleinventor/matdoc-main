import PropTypes from "prop-types";
const EligibilityCriteria = ({
  eligibilityTitle,
  eligibilityDescription,
  eligibilityData,
  eligibilityPara,
}) => {
  return (
    <section className="w-full py-10 bg-black lg:py-16 ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{eligibilityTitle}</h2>
        {eligibilityDescription && (
          <p className="mt-5 text-lg text-center text-white md:text-xl">
            {eligibilityDescription}
          </p>
        )}

        <ul className=" mt-10 w-full xl:w-[80%] mx-auto">
          {eligibilityData &&
            eligibilityData.map((item, index) => (
              <li
                className={`w-full p-5 md:p-6 mmd:p-8 mt-7 text-lg sm:text-xl md:text-2xl border-2 border-gray-400 rounded first:mt-0 ${item.classes}`}
                key={index}
              >
                {item.desc}
              </li>
            ))}
        </ul>
        {eligibilityPara && (
          <p className="mt-10 text-lg text-center text-white">
            {eligibilityPara}
          </p>
        )}
      </div>
    </section>
  );
};
EligibilityCriteria.propTypes = {
  eligibilityTitle: PropTypes.func.isRequired,
  eligibilityDescription: PropTypes.func.isRequired,
  eligibilityData: PropTypes.func.isRequired,
  eligibilityPara: PropTypes.func.isRequired,
};
export default EligibilityCriteria;
