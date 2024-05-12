import { Assets } from "../../assets/Assets";

const CompetitiveEdge = () => {
  const data = [
    {
      id: 1,
      para: "SAVE MORE",
      title: "10",
      subTitle: "X",
      heading: "Cheaper",
      description: " Than most individual counselling services.",
      img: Assets.Cheaper,
    },
    {
      id: 2,
      para: "SAVE TIME",
      title: "20",
      subTitle: "X",
      heading: "Faster",
      description:
        "    Say goodbye to hours of sifting through websites and resources.",
      img: Assets.Faster,
    },
    {
      id: 3,
      para: "GET BETTER SEATS",
      title: "100",
      subTitle: "%",
      heading: "More Success",
      description:
        " Maximize your options, ensuring you don't miss the better seats.  ",
      img: Assets.MoreSuccess,
    },
  ];
  return (
    <section className="w-full py-10 lg:py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <div className="p-5 rounded md:p-10 bg-secondary-sky">
          <p
            className="text-sm text-center text-black md:text-base"
            data-aos="fade-up"
          >
            THE MAT DOC IMPACT
          </p>
          <h2 className="mt-1 mb-5 text-center text-black" data-aos="fade-up">
            Your Competitive Edge with <br className="hidden lg:block" /> MAT
            DOC
          </h2>
          <p className="text-xl text-center text-black" data-aos="fade-up">
            Here's how the MAT DOC Platform enhances your chances of securing a
            better medical seat
          </p>
          <div
            className="flex flex-wrap justify-between w-full mt-10 gap-y-10 lg:mt-14"
            data-aos="fade-up"
          >
            {data.map((item) => (
              <div
                className="w-full sm:w-[48%] md:w-[31%] mmd:w-[30%] lg:w-[25%]  "
                key={item.id}
              >
                <p className="text-sm font-semibold text-black">{item.para}</p>
                <h2 className="text-3xl text-black sm:text-4xl md:text-5xl mmd:text-6xl lg:text-7xl">
                  {item.title}
                  <span className="text-2xl md:text-3xl">{item.subTitle}</span>
                </h2>
                <h4 className="mt-5 text-2xl font-medium text-black">
                  {item.heading}
                </h4>
                <h4 className="mt-2 text-xl text-black">{item.description}</h4>
                <img
                  src={item.img}
                  alt={item.heading}
                  title={item.heading}
                  className="mt-7"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
