import { CalendarDays } from "lucide-react";
import { Assets } from "../../assets/Assets";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Blog = () => {
  const data = [
    {
      id: 1,
      title:
        "  NEET UG 2024 City Intimation Slip Released: At neet.ntaonline.in",
      desc: " What is NEET City Intimation Slip? The National Testing Agency (NTA) recently released the NEET UG 2024 City Intimation Slip on   April 24. This slip is required for candidates who have applied  to the NEET UG 2024. It allows students to learn about the city  where",
      date: " April 24, 2024",
      image: Assets.BlogFirst,
    },
    {
      id: 2,
      title:
        "NEET PG 2024 form edit window opens today at nbe.edu. Check what can be edited",
      desc: "The National Board of Examinations (NBE) has stated that all successfully registered candidates will get an edit window for NEET PG 2024. This edit window allows candidates to correct any errors made throughout the application process. Here’s what you need to know about the NEET PG edit window.",
      date: " April 24, 2024",
      image: Assets.BlogFirst,
    },
    {
      id: 3,
      title: "A Student’s Guide to What to Expect After NEET",
      desc: "A Student’s Guide to What to Expect After NEET The government has made NEET exam compulsory in India. It is a significant task for medical professionals that assesses your knowledge and readiness for the challenging yet rewarding world of medicine. The",
      date: " April 24, 2024",
      image: Assets.BlogFirst,
    },
    {
      id: 4,
      title:
        "NEET PG 2024 exam pattern revised: NBEMS introduces mandatory time-bound sections ",
      desc: "NBEMS’s statement about the NEET PG 2024 exam: The National Board of Examinations recently sent an important statement about the NEET PG 2024 exam. They’ve added mandatory time-bound sections to all their MCQ-based exams, including",
      date: " April 24, 2024",
      image: Assets.BlogFirst,
    },
  ];
  return (
    <section className="w-full py-10 bg-black mmd:py-20">
      <div className="flex flex-wrap-reverse justify-between w-full px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <div className="w-full mmd:w-[69%] mt-10 mmd:mt-0">
          {data.map((item, index) => (
            <div className="w-full mt-16 first:mt-0" key={index}>
              <div className="relative w-full overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  className="w-full duration-300 ease-in-out rounded hover:scale-105 max-h-[470px] "
                />
              </div>
              <div className="w-[98%] md:w-[90%] mx-auto -mt-8 rounded p-5 md:p-7 bg-gray-900 z-20 relative">
                <h3 className="text-xl text-white sm:text-2xl mmd:text-3xl">
                  {item.title}
                </h3>
                <div className="flex items-center justify-start mt-3 text-base text-white md:text-lg">
                  <CalendarDays className="mr-2 text-white" size={22} />
                  {item.date}
                </div>
                <p className="my-5 text-base text-white md:text-lg line-clamp-3">
                  {item.desc}
                </p>
                <Link
                  to="/blog-details"
                  className="text-lg font-semibold text-white md:text-xl "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mmd:w-[28%] mmd:sticky mmd:top-28 h-fit overflow-x-hidden ">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Blog;
