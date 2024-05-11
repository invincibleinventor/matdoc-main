import { Assets } from "../../assets/Assets";

const NeetProcess = () => {
  return (
    <section className="w-full py-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">NEET Process</h2>
        <div
          className="w-full p-8 mt-10 bg-white border rounded border-secondary-sky"
          data-aos="fade-up"
        >
          <img
            src={Assets.NEETProcessWeb}
            alt="NEET Process"
            title="NEET Process"
            className="object-contain w-full h-auto transition duration-500 ease-in-out bg-transparent rounded cursor-pointer bg-blend-color-burn hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default NeetProcess;
