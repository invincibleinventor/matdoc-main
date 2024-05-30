import { useState } from "react";
import { Assets } from "../../assets/Assets";
import { Link } from "react-router-dom";

const ConsellingPlatform = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <section className="w-full py-10 bg-black lg:py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p
          className="text-sm text-center text-white md:text-base"
          data-aos="fade-up"
        >
          Meet MAT DOC
        </p>
        <h2 className="mt-1 mb-5 text-center text-white" data-aos="fade-up">
          The Next-Gen Counselling <br className="hidden lg:block" /> Platform
        </h2>
        <p className="text-xl text-center text-white" data-aos="fade-up">
          Transform confusion to clarity, turn decisions into choices and make
          your dreams into reality.
        </p>
        <div
          className="flex flex-wrap justify-center mt-10 gap-y-5 lg:mt-14"
          data-aos="fade-up"
        >
          <button
            className={`mr-4 xl:mr-6 lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 1 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Announcements & Events
            {activeTab === 1 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
          <button
            className={`mr-4 xl:mr-6 lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 2 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Closing Ranks
            {activeTab === 2 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
          <button
            className={`mr-4 xl:mr-6 lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 3 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Seat Matrix
            {activeTab === 3 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
          <button
            className={`mr-4 xl:mr-6 lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 4 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(4)}
          >
            Allotment Mapping
            {activeTab === 4 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
          <button
            className={`mr-4 xl:mr-6 lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 5 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(5)}
          >
            Institutes
            {activeTab === 5 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
          <button
            className={` lg:min-w-[120px] text-xl xl:text-2xl focus:outline-none relative ${
              activeTab === 6 ? "text-blue-650 font-bold" : "text-white"
            }`}
            onClick={() => handleTabClick(6)}
          >
            Videos
            {activeTab === 6 && (
              <div className="absolute w-3 h-3 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-650"></div>
            )}
          </button>
        </div>
        {activeTab === 1 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            <Link to="/announcements-and-events">
              <img
                src={Assets.AnnouncementEvents}
                alt=" Announcements & Events"
                title=" Announcements & Events"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
        {activeTab === 2 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            <Link to="#">
              <img
                src={Assets.ClosingRanks}
                alt=" Closing Ranks"
                title=" Closing Ranks"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
        {activeTab === 3 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            <Link to="#">
              <img
                src={Assets.SeatMatrix}
                alt=" Seat Matrix"
                title=" Seat Matrix"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
        {activeTab === 4 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            <Link to="/allotment-and-mapping">
              <img
                src={Assets.Allocated}
                alt=" Allotment Mapping"
                title=" Allotment Mapping"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
        {activeTab === 5 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            {" "}
            <Link to="/institues">
              <img
                src={Assets.Institutes}
                alt="  Institutes"
                title="  Institutes"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
        {activeTab === 6 && (
          <div
            className="w-full mt-10 lg:mt-16 min-h-auto lg:min-h-[520px] xl:min-h-[600px] rounded border-2 border-secondary-sky"
            data-aos="fade-up"
          >
            <Link to="/videos">
              <img
                src={Assets.VideosTab}
                alt="Videos"
                title="Videos"
                className="w-full h-full rounded"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsellingPlatform;
