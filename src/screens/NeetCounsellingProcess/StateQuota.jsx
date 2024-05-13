import PropTypes from "prop-types";
const StateQuota = ({ stateQuotaTitle, stateQuotaDesc, stateQuotaPara }) => {
  return (
    <section className="w-full py-10 bg-black lg:py-16 ">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <div
          className="w-full p-5 border rounded sm:p-6 md:p-7 mmd:p-8 bg-primary-brown border-secondary-sky"
          data-aos="fade-up"
        >
          {stateQuotaTitle && (
            <h3 className="text-2xl text-black  md:text-3xl mmd:text-4xl">
              {stateQuotaTitle}
            </h3>
          )}
          {stateQuotaDesc && (
            <p className="mt-5 text-lg text-black sm:text-xl">
              {stateQuotaDesc}
            </p>
          )}
          {stateQuotaPara && (
            <p className="mt-5 text-lg text-black sm:text-xl">
              {stateQuotaPara}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

StateQuota.propTypes = {
  stateQuotaTitle: PropTypes.func.isRequired,
  stateQuotaDesc: PropTypes.func.isRequired,
  stateQuotaPara: PropTypes.func.isRequired,
};

export default StateQuota;
