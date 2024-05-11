import { Assets } from "../../assets/Assets";
import PropTypes from "prop-types";

const NeetProcess = ({
  NeetProcesstitle,
  NeetProcessdescription,
  NeetProcessImg,
}) => {
  return (
    <section className="w-full py-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">{NeetProcesstitle}</h2>
        {NeetProcessdescription && (
          <p className="mt-5 text-xl text-center text-white">
            {NeetProcessdescription}
          </p>
        )}

        <div
          className="w-full p-8 mt-10 bg-white border rounded border-secondary-sky"
          data-aos="fade-up"
        >
          <img
            src={NeetProcessImg}
            alt="NEET Process"
            title="NEET Process"
            className="object-contain w-full h-auto transition duration-500 ease-in-out bg-transparent rounded cursor-pointer bg-blend-color-burn hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
NeetProcess.propTypes = {
  NeetProcesstitle: PropTypes.func.isRequired,
  NeetProcessdescription: PropTypes.func.isRequired,
  NeetProcessImg: PropTypes.func.isRequired,
};
export default NeetProcess;