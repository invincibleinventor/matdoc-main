import { Search } from "lucide-react";

const Sidebar = () => {
  const data = [
    {
      id: 1,
      desc: "NEET PG 2024 form edit window opens today at nbe.edu. Check what can be edited",
    },
    {
      id: 2,
      desc: "A Student’s Guide to What to Expect After NEET",
    },
    {
      id: 3,
      desc: "NEET PG 2024 exam pattern revised: NBEMS introduces mandatory time-bound sections ",
    },
    {
      id: 4,
      desc: "NEET Exam Phobia? Follow this to Crack NEET!",
    },
    {
      id: 5,
      desc: "What is the difference between NEET counselling and NEET coaching?",
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Articles",
      count: <>(5)</>,
    },
    {
      id: 2,
      title: "NEET Counselling",
      count: <>(10)</>,
    },
    {
      id: 3,
      title: "NEET PG ",
      count: <>(5)</>,
    },
    {
      id: 4,
      title: "NEET Tips!",
      count: <>(13)</>,
    },
    {
      id: 5,
      title: "NEET UG?",
      count: <>(19)</>,
    },
    {
      id: 6,
      title: "NEET Updates?",
      count: <>(17)</>,
    },
  ];
  return (
    <section className="w-full">
      <div className="bg-gray-900 rounded p-7 ">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search here...."
            className="w-full py-3 pl-4 pr-8 text-lg text-gray-300 placeholder-gray-300 bg-transparent border border-gray-700 rounded outline-none "
          />
          <Search className="absolute text-gray-300 -translate-y-1/2 top-1/2 right-3" />
        </div>
      </div>
      <div className="py-10 bg-gray-900 rounded mt-7 px-7">
        <h3 className="text-2xl text-white">Recent Posts</h3>
        <ul className="mt-5 font-normal leading-8 text-white">
          {data.map((item, index) => (
            <li
              className="pb-3 mt-3 text-lg border-b border-gray-600 first:mt-0 last:border-none last:pb-0 line-clamp-3"
              key={index}
            >
              {item.desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-10 bg-gray-900 rounded mt-7 px-7">
        <h3 className="text-2xl text-white">Categories</h3>
        <ul className="mt-5 font-normal leading-8 text-white">
          {categories.map((item, index) => (
            <li
              className="flex items-center justify-between pb-3 mt-3 border-b border-gray-600 first:mt-0 last:border-none last:pb-0 line-clamp-3"
              key={index}
            >
              <p className="text-lg"> {item.title} </p> {item.count}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
