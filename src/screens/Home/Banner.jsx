import { Star } from "lucide-react";
import CountUp from "react-countup";
import Button from "../../components/Atoms/button";

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
    <section className="w-full py-10 bg-black lg:py-20 ">
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
          <br className="block" />
          <span className="ml-2 highlight-container highlight-orange">
            <span className="highlight"> NEET Counselling </span>
          </span>
        </h1>
        <p className="mt-10 text-xl text-center text-white sm:text-2xl">
          <span className="font-bold "> Counselling dates, </span>
          <span className="font-bold "> colleges, </span> courses, fees,
          <span className="font-bold "> cut-offs, </span> and beyond.
        </p>
        <p className="text-xl text-center text-white sm:text-2xl">
          {`Let's take the guess work out of your choice filling.`}
        </p>
        <Button text="Get Started" classes=" common-btn blue mt-10 lg:mt-14" />

        <div className="flex flex-wrap items-center justify-between w-full mt-10 lg:mt-20 gap-y-5 ">
          {clientCount.map((client) => (
            <div
              className="w-full sm:w-[48%] gap-x-4 sm:gap-x-0 md:w-[22%] xl:w-[20%] flex flex-nowrap sm:flex-wrap lg:flex-nowrap justify-start lg:items-center"
              key={client.id}
            >
              <h2 className="text-4xl text-white sm:mx-auto md:text-5xl xl:text-6xl lg:mx-0 ">
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
              <p className="mt-1 text-xl font-semibold text-white text-nowrap sm:text-wrap sm:mt-3 sm:mx-auto sm:text-center lg:text-left lg:mx-0 lg:mt-0 lg:ml-5">
                {client.title}
              </p>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-center gap-1 mx-auto mt-10 lg:mt-20 w-fit"
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
