import { Link } from "react-router-dom";
import { Assets } from "../../assets/Assets";
import { FaQuora } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Facebook, Camera, Youtube } from "lucide-react";

const Footer = () => {
  const menuBar = [
    {
      id: 1,
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 2,
      name: "Carrers",
      link: "/careers",
    },
    {
      id: 3,
      name: "Package Policy",
      link: "#",
    },
    {
      id: 4,
      name: "Privacy Policy",
      link: "#",
    },
    {
      id: 5,
      name: "Terms of Service",
      link: "#",
    },
  ];
  const ugValues = [
    {
      id: 1,
      icon: <FaQuora />,
      link: "#",
    },
    {
      id: 2,
      icon: <Facebook />,
      link: "#",
    },
    {
      id: 3,
      icon: <Camera />,
      link: "#",
    },
    {
      id: 4,
      icon: <FaXTwitter />,
      link: "#",
    },
    {
      id: 5,
      icon: <FaTelegramPlane />,
      link: "#",
    },
    {
      id: 6,
      icon: <Youtube />,
      link: "#",
    },
  ];
  return (
    <>
      <section className="w-full bg-black border-t border-b border-gray-800 ">
        <div className="grid grid-cols-1 px-5 mx-auto md:grid-cols-2 mmd:grid-cols-3 xl:max-w-screen-xl lg:container">
          <div className="col-span-1 py-5 md:py-10">
            <Link
              to="/"
              className="max-w-[150px] md:max-w-[150px] flex max-h-20  h-auto"
            >
              <img
                src={Assets.MatDoc}
                alt="Mat Doc"
                title="Mat Doc"
                className="object-contain h-auto duration-500 ease-in-out cursor-pointer w-fit bg-blend-overlay hover:scale-95"
              />
            </Link>
            <ul className="mt-8 text-white">
              {menuBar.map((menu) => (
                <li
                  className="mt-3 text-base font-medium first:mt-0"
                  key={menu.id}
                >
                  <Link to={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 py-5 border-gray-800 md:py-10 md:px-5 mmd:px-10 md:border-l">
            <div className="w-full p-2 text-white bg-yellow-650 border flex justify-center items-center  border-white rounded shadow-normal max-w-16 md:max-w-[88px] h-16 md:h-[72px]">
              <h3 className="text-2xl font-semibold md:text-3xl"> UG</h3>
            </div>
            <ul className="flex items-center justify-start my-10">
              {ugValues.map((value) => (
                <li
                  className="flex items-center justify-center w-12 h-12 ml-2.5 text-white rounded first:ml-0 bg-slate-800 cursor-pointer"
                  key={value.id}
                >
                  <Link to={value.link}>{value.icon}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                className="w-[48%] bg-white rounded py-2 text-base shadow-lg px-4 "
              >
                Videos
              </button>
              <button
                type="button"
                className="w-[48%] bg-white rounded py-2 text-base shadow-lg px-4 "
              >
                Packages
              </button>
            </div>
          </div>
          <div className="col-span-1 py-5 border-gray-800 md:py-10 md:pl-5 mmd:pl-10 md:border-l">
            <div className="w-full p-2 text-white bg-blue-650 border flex justify-center items-center  border-white rounded shadow-normal max-w-16 md:max-w-[88px] h-16 md:h-[72px]">
              <h3 className="text-2xl font-semibold md:text-3xl"> PG</h3>
            </div>
            <ul className="flex items-center justify-start my-10">
              {ugValues.map((value) => (
                <li
                  className="flex items-center justify-center w-12 h-12 ml-2.5 text-white rounded first:ml-0 bg-slate-800 cursor-pointer"
                  key={value.id}
                >
                  <Link to={value.link}>{value.icon}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                className="w-[48%] bg-white rounded py-2 text-base shadow-lg px-4 "
              >
                Videos
              </button>
              <button
                type="button"
                className="w-[48%] bg-white rounded py-2 text-base shadow-lg px-4 "
              >
                Packages
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black ">
        <div className="flex items-center justify-center px-5 py-6 mx-auto xl:max-w-screen-xl lg:container">
          <p className="!text-sm font-normal text-center text-white">
            © 2024 MAT &amp; MAT DOC Labs Private Limited
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
