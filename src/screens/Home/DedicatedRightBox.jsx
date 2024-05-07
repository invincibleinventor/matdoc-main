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
    <section className="w-full pt-32 bg-black">
      <div className="flex items-center justify-between w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <div className="w-[48%] " data-aos="fade-right">
          <p className="text-white tex-sm"> {subtitle}</p>
          <h2 className="mt-2 text-white">{title}</h2>
          {smallTitle && (
            <p className="text-white text-lg mt-5">{smallTitle}</p>
          )}

          <div className="text-2xl rounded my-7 bg-primary-brown p-7">
            {description}
          </div>
          <div className="flex items-start justify-start w-full ">
            <div className="w-[11%]">
              <CircleArrowRight className="text-white mr-5 w-9" size={36} />
            </div>
            <h3 className="text-white text-2xl">{para}</h3>
          </div>
        </div>
        <div
          className="w-[45%] flex justify-end items-center"
          data-aos="fade-left"
        >
          <img src={img} alt={title} title={title} />
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
