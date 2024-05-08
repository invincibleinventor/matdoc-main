import { MoveRight, Star } from "lucide-react";
import CountUp from "react-countup";
const Banner = () => {
  const clientCount = [
    {
      id: 1,
      title: " Years of experience",
      count: 10,
      countDuration: 2.5,
      suffixValue: "+",
    },
    {
      id: 2,
      title: "Students Registered",
      count: 50,
      countDuration: 5,
      suffixValue: "K+",
    },
    {
      id: 3,
      title: "Candidates Served",
      count: 1,
      countDuration: 1,
      suffixValue: "M+",
    },
    {
      id: 4,
      title: "Queries Answered",
      count: 50,
      countDuration: 5,
      suffixValue: "K+",
    },
  ];
  return (
    <section className="w-full py-20 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="zoom-in"
      >
        <h1 className="text-center text-white">
          Your
          <span className="ml-2 highlight-container highlight-blue">
            <span className="highlight"> Ultimate Guide </span>
          </span>
          to
          <br className="hidden lg:block" />
          <span className="ml-2 highlight-container highlight-orange">
            <span className="highlight"> NEET Counselling </span>
          </span>
        </h1>
        <p className="mt-10 text-2xl text-center text-white">
          <span className="font-bold "> Counselling dates, </span>
          <span className="font-bold "> colleges, </span> courses, fees,
          <span className="font-bold "> cut-offs, </span> and beyond.
        </p>
        <p className="text-2xl text-center text-white">
          {`Let's take the guess work out of your choice filling.`}
        </p>
        <button
          type="button"
          className="flex items-center justify-center px-5 py-3 mx-auto mt-10 text-xl font-semibold bg-white rounded cursor-pointer text-primary-black"
        >
          Get Started{" "}
          <MoveRight className="text-primary-green text-base ml-3" size={28} />
        </button>
        <div className="flex items-center justify-between w-full mt-20 ">
          {clientCount.map((client) => (
            <div
              className="w-[20%] flex justify-start items-center"
              key={client.id}
            >
              <h2 className="text-6xl text-white">
                <CountUp
                  start={0}
                  end={client.count}
                  duration={client.countDuration}
                  separator=","
                  decimal=","
                  suffix={client.suffixValue}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
                ></CountUp>
              </h2>
              <p className="ml-5 text-xl font-semibold text-white">
                {client.title}
              </p>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-center gap-1 mx-auto mt-20 w-fit"
          data-aos="fade-up"
        >
          <Star fill="#008000" size={32} />
          <Star fill="#008000" size={32} />
          <Star fill="#008000" size={32} />
          <Star fill="#008000" size={32} />
          <Star fill="#008000" size={32} />
        </div>
        <p className="mt-1 text-base text-center text-white" data-aos="fade-up">
          4.9 / 5 on Google
        </p>
      </div>
    </section>
  );
};

export default Banner;
