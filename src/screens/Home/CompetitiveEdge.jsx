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
    <section className="w-full py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl  ">
        <div className="bg-secondary-sky rounded p-10">
          <p className="text-sm text-center text-black" data-aos="fade-up">
            THE ZyNerd IMPACT
          </p>
          <h2 className="mt-1 mb-5 text-center text-black" data-aos="fade-up">
            Your Competitive Edge with <br className="hidden lg:block" /> ZyNerd
          </h2>
          <p className="text-xl text-center text-black" data-aos="fade-up">
            Here's how the ZyNerd Platform enhances your chances of securing a
            better medical seat
          </p>
          <div className="flex justify-between w-full mt-14" data-aos="fade-up">
            {data.map((item) => (
              <div className="w-[25%]  " key={item.id}>
                <p className="text-sm text-black font-semibold">{item.para}</p>
                <h2 className="text-7xl text-black">
                  {item.title}
                  <span className="text-3xl">{item.subTitle}</span>
                </h2>
                <h4 className="text-2xl mt-5 text-black font-medium">
                  {item.heading}
                </h4>
                <h4 className="text-xl mt-2 text-black">{item.description}</h4>
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
