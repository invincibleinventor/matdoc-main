import PropTypes from "prop-types";
const StateQuota = ({ stateQuotaTitle, stateQuotaDesc, stateQuotaPara }) => {
  return (
    <section className="w-full py-16 bg-black ">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <div
          className="w-full p-8 border rounded bg-primary-brown border-secondary-sky"
          data-aos="fade-up"
        >
          {stateQuotaTitle && (
            <h3 className="text-4xl text-black ">{stateQuotaTitle}</h3>
          )}
          {stateQuotaDesc && (
            <p className="mt-5 text-xl text-black">{stateQuotaDesc}</p>
          )}
          {stateQuotaPara && (
            <p className="mt-5 text-xl text-black">{stateQuotaPara}</p>
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
