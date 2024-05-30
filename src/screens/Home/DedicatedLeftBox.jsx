import { CircleArrowRight } from "lucide-react";
import PropTypes from "prop-types";
const DedicatedLeftBox = ({
  subtitle,
  title,
  description,
  img,
  para,
  smallTitle,
}) => {
  return (
    <section className="w-full pt-16 bg-black lg:pt-28">
      <div className="flex flex-wrap items-center justify-between w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <div
          className="w-full mmd:w-[45%] flex justify-start items-center"
          data-aos="fade-right"
        >
          <img
            src={img}
            alt={title}
            title={title}
            className="w-full mx-auto mmd:mx-0"
          />
        </div>
        <div className="w-full mmd:w-[48%] mt-10 mmd:mt-0" data-aos="fade-left">
          <p className="text-sm text-white md:text-base"> {subtitle}</p>
          <h2 className="mt-2 text-white">{title}</h2>
          {smallTitle && (
            <p className="mt-5 text-lg text-white">{smallTitle}</p>
          )}

          <div className="p-5 text-xl rounded md:text-2xl my-7 bg-blue-650 md:p-7">
            {description}
          </div>
          <div className="flex items-start justify-start w-full ">
            <div className="w-[9%] sm:w-[11%]">
              <CircleArrowRight
                className="mr-5 text-white w-7 sm:w-9"
                size={36}
              />
            </div>
            <div className="w-[89%] sm:w-[84%]">
              <h3 className="text-xl text-white md:text-2xl">{para}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
DedicatedLeftBox.propTypes = {
  subtitle: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  img: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  para: PropTypes.func.isRequired,
  smallTitle: PropTypes.func.isRequired,
};
export default DedicatedLeftBox;
