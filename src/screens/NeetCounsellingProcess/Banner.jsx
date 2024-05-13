import PropTypes from "prop-types";
const Banner = ({ title, description, para }) => {
  return (
    <section className="w-full py-10 bg-black lg:py-20 ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="zoom-in"
      >
        {title && (
          <h2 className="text-3xl leading-10 text-center text-white lg:leading-tight md:text-4xl mmd:text-5xl lg:text-6xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-10 text-xl text-center text-white md:text-2xl">
            {description}
          </p>
        )}
        {para && (
          <p className="mt-10 text-xl text-center text-white md:text-2xl">
            {para}
          </p>
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
