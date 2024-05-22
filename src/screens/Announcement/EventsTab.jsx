import { Calendar } from "lucide-react";
import { useState } from "react";

const EventsTab = () => {
  const [activeTab, setActiveTab] = useState("past");
  return (
    <div className="w-[49%] bg-black rounded-xl shadow-2xl py-10 px-5  border-2 border-gray-800 ">
      <h2 className="mx-auto text-3xl text-center text-primary-green ">
        <span className="inline-flex mr-3 ">
          <Calendar size={28} />
        </span>
        Events
      </h2>
      <div className="flex justify-between w-full mt-7">
        <div className="w-[42%]">
          <input
            type="search"
            className="w-full p-3 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200"
            placeholder="Search Events"
          />
        </div>
        <div className="w-[42%]">
          <select className="w-full p-3 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200">
            <option disabled selected="selected">
              Select Counselling
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-start w-full pb-3 border-b border-gray-800 mt-7">
        <button
          className={`px-4 py-1.5 mr-2 rounded-lg ${
            activeTab === "past"
              ? "bg-primary-brown text-white"
              : "bg-gray-800 text-gray-200"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past
        </button>
        <button
          className={`px-4 py-1.5 ml-2 rounded-lg ${
            activeTab === "today"
              ? "bg-primary-brown text-white"
              : "bg-gray-800 text-gray-200"
          }`}
          onClick={() => setActiveTab("today")}
        >
          Today
        </button>
        <button
          className={`px-4 py-1.5 ml-4 rounded-lg ${
            activeTab === "upcoming"
              ? "bg-primary-brown text-white"
              : "bg-gray-800 text-gray-200"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
      </div>
      <div className="w-full mt-7">
        {activeTab === "past" && (
          <div className="w-full">
            <table className="w-full text-sm">
              <thead className="w-full py-3 bg-primary-green ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5 w-16">Date</th>
                  <th className="text-left text-gray-200 p-1.5  w-40">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 ">
                    Events Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-200 p-1.5">Nov 9</td>
                  <td className="text-left text-gray-200 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates)
                  </td>
                  <td className="text-left text-blue-500 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates) - Final Mop up Round - Publication of Result of
                    the Allotment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "today" && (
          <div className="w-full">
            <table className="w-full text-sm">
              <thead className="w-full py-3 bg-primary-green ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5 w-16">Date</th>
                  <th className="text-left text-gray-200 p-1.5  w-40">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 ">
                    Events Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-200 p-1.5">Nov 9</td>
                  <td className="text-left text-gray-200 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates)
                  </td>
                  <td className="text-left text-blue-500 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates) - Final Mop up Round - Publication of Result of
                    the Allotment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "upcoming" && (
          <div className="w-full">
            <table className="w-full text-sm">
              <thead className="w-full py-3 bg-primary-green ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5 w-16">Date</th>
                  <th className="text-left text-gray-200 p-1.5  w-40">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 ">
                    Events Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-200 p-1.5">Nov 9</td>
                  <td className="text-left text-gray-200 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates)
                  </td>
                  <td className="text-left text-blue-500 p-1.5">
                    DNB Sponsored - PG Medical (Govt or PSU Inservices
                    candidates) - Final Mop up Round - Publication of Result of
                    the Allotment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsTab;
