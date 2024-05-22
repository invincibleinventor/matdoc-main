import { Play, Search } from "lucide-react";
import { Assets } from "../../assets/Assets";

const Videos = () => {
  const data = [
    {
      id: 1,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 2,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 3,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 4,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 5,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 6,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 7,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
    {
      id: 8,
      Video: Assets.UGExamBanner,
      desc: "Clarity on All India Rules - AI R1 / AI R2 / AI R3 / Stay Round - Based on Notification shared by MCC | NEET PG 2023",
    },
  ];
  return (
    <section className="w-full py-16">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
        <h2 className="text-center text-primary-green ">Videos</h2>
        <div className="mt-10 w-[50%] mx-auto relative">
          <input
            type="search"
            className="w-full py-3 pl-12 pr-3 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200"
            placeholder="Search Videos"
          />
          <Search className="absolute text-white -translate-y-1/2 top-1/2 left-3" />
        </div>

        <div className="flex flex-wrap items-center justify-start mt-12 gap-x-3 gap-y-3 ">
          {data.map((item) => (
            <div
              className="w-[32.5%] border rounded-lg border-gray-800 p-1 relative"
              key={item.id}
            >
              <img
                src={item.Video}
                alt={item.desc}
                title={item.desc}
                className="w-full h-[350px] rounded-lg"
              />
              <div className="absolute flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full left-1/2 top-1/2">
                <Play className="text-gray-300" size={24} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/50 ">
                <p className="text-lg text-white line-clamp-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
