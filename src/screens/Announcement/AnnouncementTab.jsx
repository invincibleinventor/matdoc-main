import { useState } from "react";
import { GrAnnounce } from "react-icons/gr";

const AnnouncementTab = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="w-[49%] bg-black rounded-xl shadow-2xl py-10 px-5  border-2 border-gray-800 ">
      <h2 className="mx-auto text-3xl text-center text-primary-green ">
        <span className="inline-flex mr-3 ">
          <GrAnnounce size={28} />
        </span>
        Announcements
      </h2>
      <div className="flex justify-between w-full mt-7">
        <div className="w-[42%]">
          <input
            type="search"
            className="w-full p-3 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200"
            placeholder="Search Announcements"
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
            activeTab === "all"
              ? "bg-primary-brown text-white"
              : "bg-gray-800 text-gray-200"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
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
      </div>
      <div className="w-full mt-7">
        {activeTab === "all" && (
          <div className="w-full">
            <table className="w-full text-sm">
              <thead className="w-full py-3 bg-primary-green ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5 w-16">Date</th>
                  <th className="text-left text-gray-200 p-1.5  w-36">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 w-28">Topics</th>
                  <th className="text-left text-gray-200 p-1.5 w-[180px]">
                    Details
                  </th>
                  <th className="text-left text-gray-200 p-1.5 w-24">Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-200 p-1.5">Nov 7</td>
                  <td className="text-left text-gray-200 p-1.5">
                    Gujarat - PG Medical
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    Refunded list
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    Round 1 refunded listed Shared
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    <ul className="ml-2 text-base list-disc">
                      <li className="ml-1 text-base text-blue-500 ">Round 1</li>
                    </ul>
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
                  <th className="text-left text-gray-200 p-1.5  w-36">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 w-28">Topics</th>
                  <th className="text-left text-gray-200 p-1.5 w-[180px]">
                    Details
                  </th>
                  <th className="text-left text-gray-200 p-1.5 w-24">Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-200 p-1.5">Nov 7</td>
                  <td className="text-left text-gray-200 p-1.5">
                    Gujarat - PG Medical
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    Refunded list
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    Round 1 refunded listed Shared
                  </td>
                  <td className="text-left text-gray-200 p-1.5">
                    <ul className="ml-2 text-base list-disc">
                      <li className="ml-1 text-base text-blue-500 ">Round 1</li>
                    </ul>
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

export default AnnouncementTab;
