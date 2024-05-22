import { ChevronRight } from "lucide-react";

const AllotmentAndMapping = () => {
  return (
    <section className="w-full py-16 ">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <h2 className="text-center text-primary-green ">
          NEET PG Counselling{" "}
          <span className="text-primary-brown "> 2024 </span>
        </h2>
        <div className="flex items-center justify-center my-5 gap-x-3">
          <p className="text-base text-white">Neet Rank</p>
          <select className="px-2 py-1.5 ml-3 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none w-fit placeholder:text-gray-200">
            <option disabled selected="selected">
              From Rank
            </option>
          </select>
          <p className="text-base text-white"> To</p>
          <select className="px-2 py-1.5 ml-3 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none w-fit placeholder:text-gray-200">
            <option disabled selected="selected">
              To Rank
            </option>
          </select>
        </div>
        <div className="flex justify-between w-full mt-5">
          <div className="w-[45%]  rounded-lg p-5  bg-gray-800     ">
            <h3 className="text-xl text-white">
              Tamil Nadu Government Quota - PG Medical Round 2
            </h3>
            <div className="flex items-center justify-start my-5 gap-x-3">
              <p className="text-base text-white">Conselling Rank:</p>
              <select className="px-2 py-1.5 ml-3 text-base text-gray-200 bg-transparent border-2 border-gray-700    rounded-lg outline-none w-fit placeholder:text-gray-200">
                <option disabled selected="selected">
                  From Rank
                </option>
              </select>
              <p className="text-base text-white"> To</p>
              <select className="px-2 py-1.5 ml-3 text-base text-gray-200 bg-transparent border-2 border-gray-700    rounded-lg outline-none w-fit placeholder:text-gray-200">
                <option disabled selected="selected">
                  To Rank
                </option>
              </select>
            </div>
            <div className="flex flex-wrap justify-between mt-5 gap-y-5">
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Institute
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Course
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Quota
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Category
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    State
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Admitted
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-[45%]  rounded-lg p-5  bg-gray-800     ">
            <h3 className="text-xl text-white">Mapping to other consellings</h3>

            <div className="flex flex-wrap justify-between mt-5 gap-y-5">
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Conselling
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Round
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Institute
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Course
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    State
                  </option>
                </select>
              </div>
              <div className="w-[31%]">
                <select className="w-full px-3 py-2 text-base text-gray-200 bg-transparent border-2 border-gray-700 rounded-lg outline-none placeholder:text-gray-200">
                  <option disabled selected="selected">
                    Admitted
                  </option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-start mt-3">
              <input type="checkbox" className="w-5 h-5 mr-2" />
              <p className="text-base text-white">Show empty rows</p>
            </div>
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
        <div className="flex justify-between w-full mt-5">
          <div className="w-[50%]">
            <table className="w-full">
              <thead className="w-full py-3 bg-primary-green ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5 bg-gray-800">
                    NeeT
                  </th>
                  <th className="text-left text-gray-200 p-1.5  bg-primary-green">
                    Rank
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-green">
                    Quota
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-green ">
                    Category
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-green ">
                    Course
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-green ">
                    Institute
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-green ">
                    Admitted
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr>
                  <td className="text-left text-gray-200 p-1.5 ">5786</td>
                  <td className="text-left text-gray-200 p-1.5  ">1</td>
                  <td className="text-left text-gray-200 p-1.5 ">
                    TN Govt Quota
                  </td>
                  <td className="text-left text-gray-200 p-1.5  ">OC Open</td>
                  <td className="text-left uppercase text-gray-200 p-1.5  ">
                    Radio Diagonsis
                  </td>
                  <td className="text-left text-blue-500 p-1.5  ">
                    Madras Med Coll, Chennai
                  </td>
                  <td className="text-left text-gray-200 p-1.5  ">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[50%]">
            <table className="w-full">
              <thead className="w-full py-3 bg-primary-brown ">
                <tr>
                  <th className="text-left text-gray-200 p-1.5  bg-primary-brown">
                    Rank
                  </th>

                  <th className="text-left text-gray-200 p-1.5 bg-primary-brown ">
                    Course
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-brown ">
                    Institute
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-brown ">
                    Counselling
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-brown ">
                    Round
                  </th>
                  <th className="text-left text-gray-200 p-1.5 bg-primary-brown ">
                    Admitted
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr>
                  <td className="text-left text-gray-200 p-1.5  ">1</td>
                  <td className="text-left uppercase text-gray-200 p-1.5  ">
                    Radio Diagonsis
                  </td>
                  <td className="text-left text-blue-500 p-1.5  ">
                    Madras Med Coll, Chennai
                  </td>
                  <td className="text-left text-gray-200 p-1.5 ">TN Govt PG</td>
                  <td className="text-left text-gray-200 p-1.5  ">1</td>
                  <td className="text-left uppercase text-gray-200 p-1.5  ">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllotmentAndMapping;
