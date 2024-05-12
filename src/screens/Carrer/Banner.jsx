import { Assets } from "../../assets/Assets";

const Banner = () => {
  return (
    <section className="w-full py-10 lg:py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p
          className="text-sm text-center text-white md:text-base"
          data-aos="fade-up"
        >
          JOIN US IN SHAPING THE FUTURE OF EDUCATION AND TECHNOLOGY
        </p>
        <h2 className="mt-5 text-center text-white " data-aos="fade-up">
          Careers at MAT DOC
        </h2>
        <p className="mt-5 text-xl text-center text-white" data-aos="fade-up">
          Where engineering excellence meets the forefront of EdTech.
        </p>
        <div className="w-full mt-10 rounded" data-aos="fade-up">
          <img
            src={Assets.Carers}
            alt="Careers at MAT DOC"
            title="Careers at MAT DOC"
            className="w-full h-auto rounded "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
