import "./style.css";
import PropTypes from "prop-types";

const WhatIsProcess = ({
  processTitle,
  processDescription,
  processData,
  processPara,
}) => {
  return (
    <section className="w-full py-20 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{processTitle}</h2>

        {processDescription && (
          <p className="mt-5 text-xl text-center text-white">
            {processDescription}
          </p>
        )}
        {processData &&
          processData.map((item, index) => (
            <div
              className="flex items-center justify-between w-full mx-auto mt-16 resources"
              data-aos="fade-up"
              key={index}
            >
              <div className="w-[22%]">
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
              <div className="w-[70%]">
                <h3 className="text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-5 text-xl text-white">{item.description}</p>
                {item.para && (
                  <p className="mt-5 text-xl text-white">{item.para}</p>
                )}{" "}
              </div>
            </div>
          ))}

        {processPara && (
          <p className="mt-16 text-lg text-center text-white">{processPara}</p>
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
