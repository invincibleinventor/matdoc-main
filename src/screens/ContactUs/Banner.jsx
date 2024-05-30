import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const data = [
    {
      id: 1,
      name: "Email Us",
      link: "mailto:0nBz8@example.com",
      icon: <Mail className="mr-3 text-base text-white" size={28} />,
      desc: " Email us your queries and we'll help you out.",
      bgColor: "bg-blue-650",
      linkText: " hello@matdoc.com",
    },
    {
      id: 2,
      name: "Call Us",
      link: "tel:+914440116000",
      icon: <Phone className="mr-3 text-base text-white" size={28} />,
      desc: " Call us and we'll answer your queries right there!",
      bgColor: "bg-green-650",
      linkText: " +91 44401 16000 ",
    },
  ];
  return (
    <section className="w-full py-10 lg:py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p
          className="text-sm text-center text-white md:text-base"
          data-aos="fade-up"
        >
          QUESTIONS?
        </p>
        <h2 className="mt-5 text-center text-white " data-aos="fade-up">
          Contact Us
        </h2>
        <p className="mt-5 text-xl text-center text-white" data-aos="fade-up">
          Reach out to us through any of the ways below{" "}
        </p>
        <div className="flex flex-wrap justify-between w-full mx-auto mt-10 lg:mt-16 ">
          {data.map((item) => (
            <div
              className={`w-full md:mt-0 mt-5 sm:w-[47%] ${item.bgColor} border-secondary-sky border-2 rounded p-5 md:p-12 min-h-auto md:min-h-[350px] flex justify-center items-center flex-col`}
              data-aos="fade-up"
              key={item.id}
            >
              <h3 className="text-4xl font-semibold text-center ">
                {item.name}
              </h3>
              <p className="mt-5 text-lg text-center ">{item.desc}</p>
              <Link
                to={item.link}
                className="flex items-center justify-center px-3 py-3 mx-auto mt-6 text-base font-semibold text-white bg-black rounded cursor-pointer md:text-xl md:px-8 w-fit text-primary-black"
              >
                {item.icon}
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
