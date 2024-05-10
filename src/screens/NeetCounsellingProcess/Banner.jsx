import PropTypes from "prop-types";
const Banner = ({ title, description, para }) => {
  return (
    <section className="w-full py-20 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="zoom-in"
      >
        {title && (
          <h2 className="text-6xl leading-tight text-center text-white">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-10 text-2xl text-center text-white">{description}</p>
        )}
        {para && (
          <p className="mt-10 text-2xl text-center text-white">{para}</p>
        )}
      </div>
    </section>
  );
};
Banner.propTypes = {
  title: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
  para: PropTypes.func.isRequired,
};
export default Banner;
