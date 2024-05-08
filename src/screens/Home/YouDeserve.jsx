import { MoveRight } from "lucide-react";

const YouDeserve = () => {
  return (
    <section className="w-full py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <div
          className="px-10 py-20 border rounded bg-primary-brown border-secondary-sky "
          data-aos="fade-up"
        >
          <p className="text-sm text-center text-black">GET STARTED NOW</p>
          <h2 className="mt-1 mb-5 text-center text-black">
            Get the best seat that you deserve
          </h2>
          <p className="text-xl text-center text-black">
            Join 1M+ students from all 30 states of India
            <br className="hidden lg:block" />
            who have got better seats with MAT DOC
          </p>
          <button
            type="button"
            className="flex items-center justify-center px-5 py-3 mx-auto mt-16 text-xl font-semibold text-white bg-black rounded cursor-pointer text-primary-black"
          >
            Get Started{" "}
            <MoveRight
              className="ml-3 text-base text-primary-green"
              size={28}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouDeserve;
