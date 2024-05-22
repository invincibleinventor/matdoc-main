import { ChevronRight } from "lucide-react";

const Institutes = () => {
  return (
    <section className="w-full py-16">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <input
          type="search"
          className="w-full p-3 max-w-[400px] text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200"
          placeholder="Search by institute"
        />
        <div className="flex items-center justify-between w-full mt-5">
          <div className="w-[24%]">
            <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200">
              <option disabled selected="selected">
                Institute Types
              </option>
            </select>
          </div>
          <div className="w-[24%]">
            <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200">
              <option disabled selected="selected">
                Select Authority / Board
              </option>
            </select>
          </div>
          <div className="w-[24%]">
            <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200">
              <option disabled selected="selected">
                Universities
              </option>
            </select>
          </div>
          <div className="w-[24%]">
            <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-800 rounded-lg outline-none placeholder:text-gray-200">
              <option disabled selected="selected">
                State
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <p className="text-base text-white ">
            Showing <span className="font-bold "> 1 - 50 of 1865 </span> Records
          </p>
          <ChevronRight
            className="cursor-pointer text-primary-brown "
            size={26}
          />
        </div>
        <div className="w-full mt-5">
          <table className="w-full text-base">
            <thead className="w-full py-3 bg-primary-green ">
              <tr>
                <th className="text-left text-gray-200 p-1.5 ">Institue</th>
                <th className="text-left text-gray-200 p-1.5  ">University</th>
                <th className="text-left text-gray-200 p-1.5 ">State</th>
                <th className="text-left text-gray-200 p-1.5 ">
                  Insitute Type
                </th>
                <th className="text-left text-gray-200 p-1.5 ">
                  Authority / Board
                </th>
                <th className="text-left text-gray-200 p-1.5">Beds (inst.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left text-blue-500 p-1.5">
                  Rangaraya Medical College,kakinada
                </td>
                <td className="text-left text-blue-500 p-1.5">
                  NTR University of Health Science, VijayWada
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Andhra Pradesh{" "}
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Goverment Institute
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  State Authority
                </td>
                <td className="text-left text-gray-200 p-1.5">1450</td>
              </tr>
              <tr>
                <td className="text-left text-blue-500 p-1.5">
                  Rangaraya Medical College,kakinada
                </td>
                <td className="text-left text-blue-500 p-1.5">
                  NTR University of Health Science, VijayWada
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Andhra Pradesh{" "}
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Goverment Institute
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  State Authority
                </td>
                <td className="text-left text-gray-200 p-1.5">1450</td>
              </tr>
              <tr>
                <td className="text-left text-blue-500 p-1.5">
                  Rangaraya Medical College,kakinada
                </td>
                <td className="text-left text-blue-500 p-1.5">
                  NTR University of Health Science, VijayWada
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Andhra Pradesh{" "}
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  Goverment Institute
                </td>
                <td className="text-left text-gray-200 p-1.5">
                  State Authority
                </td>
                <td className="text-left text-gray-200 p-1.5">1450</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Institutes;
