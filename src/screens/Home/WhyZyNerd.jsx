const WhyZyNerd = () => {
  const data = [
    {
      id: 1,
      title: "Unrivalled Accuracy",
      description:
        "Rest assured, you'll have the most precise information sourced directly from Government and Official channels.",
    },
    {
      id: 2,
      title: "Effortless Efficiency",
      description:
        "Save time and stress with our All-in-One Complete Counselling Management Portal. No more juggling multiple sites for crucial  information.",
    },
    {
      id: 3,
      title: "Timely Updates",
      description:
        "Enjoy early access to the latest information. Our dedicated team  works around the clock to provide you with the most up-to-date and accurate data.",
    },
    {
      id: 4,
      title: "Deadline Assurance",
      description:
        " Say goodbye to missed deadlines. All announcements and crucial dates appear on your profile dashboard.",
    },
    {
      id: 5,
      title: "User-Friendly Interface",
      description:
        " Navigate with ease through our intuitive interface. Plus, get  24/7 support from Subject Matter Experts for any queries about platform usage, eligibility, rules, and more.  ",
    },
    {
      id: 6,
      title: "Proven Experience",
      description:
        "  With over a decade of experience and serving over 1 lakh candidates, trust in our expertise.  ",
    },
  ];
  return (
    <section className="w-full py-20 bg-black ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p className="text-sm text-center text-white" data-aos="fade-up">
          THE ZyNerd ADVANTAGE
        </p>
        <h2 className="mt-1 mb-5 text-center text-white" data-aos="fade-up">
          Why ZyNerd?
        </h2>
        <p className="text-xl text-center text-white" data-aos="fade-up">
          {` Here's why ZyNerd is your ideal companion in your medical career
          journey.`}
        </p>
        <div
          className="flex flex-wrap justify-between w-full mt-12 gap-y-7"
          data-aos="fade-up"
        >
          {data.map((item) => (
            <div
              className="w-[32%] px-8 py-12 text-white rounded  HomeCards "
              key={item.id}
            >
              <h3 className="mb-4 text-2xl ">{item.title}</h3>
              <p className="text-lg text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZyNerd;
