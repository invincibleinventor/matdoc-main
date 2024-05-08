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
      bgColor: "bg-primary-green",
      linkText: " hello@matdoc.com",
    },
    {
      id: 2,
      name: "Call Us",
      link: "tel:+914440116000",
      icon: <Phone className="mr-3 text-base text-white" size={28} />,
      desc: " Call us and we'll answer your queries right there!",
      bgColor: "bg-primary-brown",
      linkText: " +91 44401 16000 ",
    },
  ];
  return (
    <section className="w-full py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p className="text-sm text-center text-white" data-aos="fade-up">
          QUESTIONS?
        </p>
        <h2 className="mt-5 text-center text-white " data-aos="fade-up">
          Contact Us
        </h2>
        <p className="mt-5 text-xl text-center text-white" data-aos="fade-up">
          Reach out to us through any of the ways below{" "}
        </p>
        <div className="flex justify-between w-full mx-auto mt-16 ">
          {data.map((item) => (
            <div
              className={`w-[47%] ${item.bgColor} border-secondary-sky border-2 rounded p-12 min-h-[350px] flex justify-center items-center flex-col`}
              data-aos="fade-up"
              key={item.id}
            >
              <h3 className="text-4xl font-semibold text-center ">
                {item.name}
              </h3>
              <p className="mt-5 text-lg text-center ">{item.desc}</p>
              <Link
                to={item.link}
                className="flex items-center justify-center px-8 py-3 mx-auto mt-6 text-xl font-semibold text-white bg-black rounded cursor-pointer w-fit text-primary-black"
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
