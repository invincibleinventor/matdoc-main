import "./style.css";
import PropTypes from "prop-types";

const WhatIsProcess = ({
  processTitle,
  processDescription,
  processData,
  processPara,
}) => {
  return (
    <section className="w-full py-10 bg-black lg:py-20 ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{processTitle}</h2>

        {processDescription && (
          <p className="mt-5 text-base text-center text-white sm:text-xl">
            {processDescription}
          </p>
        )}
        {processData &&
          processData.map((item, index) => (
            <div
              className="flex flex-wrap items-center justify-between w-full mx-auto mt-10 lg:mt-16 resources"
              data-aos="fade-up"
              key={index}
            >
              <div className="mx-auto md:mx-0 w-full sm:w-[50%] md:w-[22%]">
                <div
                  className={`illustration-resources bg-white ${item.classes}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    className="w-full h-auto bg-white"
                  />
                </div>
              </div>
              <div className="mt-10 md:mt-0 w-full md:w-[70%]">
                <h3 className="text-2xl font-semibold text-white mmd:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg text-white sm:text-xl">
                  {item.description}
                </p>
                {item.para && (
                  <p className="mt-5 text-lg text-white sm:text-xl">
                    {item.para}
                  </p>
                )}{" "}
              </div>
            </div>
          ))}

        {processPara && (
          <p className="mt-10 text-lg text-center text-white lg:mt-16">
            {processPara}
          </p>
        )}
      </div>
    </section>
  );
};
WhatIsProcess.propTypes = {
  processTitle: PropTypes.func.isRequired,
  processDescription: PropTypes.func.isRequired,
  processData: PropTypes.func.isRequired,
  processPara: PropTypes.func.isRequired,
};
export default WhatIsProcess;
