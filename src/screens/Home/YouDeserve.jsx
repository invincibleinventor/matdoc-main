import Button from "../../components/Atoms/button";

const YouDeserve = () => {
  return (
    <section className="w-full py-10 lg:py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <div
          className="p-5 py-10 border rounded md:px-10 md:py-16 mmd:py-20 bg-primary-brown border-secondary-sky "
          data-aos="fade-up"
        >
          <p className="text-sm text-center text-black md:text-base">
            GET STARTED NOW
          </p>
          <h2 className="mt-1 mb-5 text-center text-black">
            Get the best seat that you deserve
          </h2>
          <p className="text-xl text-center text-black">
            Join 1M+ students from all 30 states of India
            <br className="hidden lg:block" />
            who have got better seats with MAT DOC
          </p>

          <Button text="Get Started" classes=" secondary-btn black mt-10" />
        </div>
      </div>
    </section>
  );
};

export default YouDeserve;
