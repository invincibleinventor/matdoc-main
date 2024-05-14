import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
const MobileModal = ({ isActive, onClose }) => {
  const [isOpenGlobal, setIsOpenGlobal] = useState(false);
  const [isOpenUSA, setIsOpenUSA] = useState(false);

  const toggleGlobal = () => {
    setIsOpenGlobal(!isOpenGlobal);
    setIsOpenUSA(false);
  };

  const toggleUSA = () => {
    setIsOpenUSA(!isOpenUSA);
    setIsOpenGlobal(false);
  };
  const mobileNav = [
    {
      id: 1,
      title: "Features",
      link: "/#yourdedicatedfeatures",
    },
    {
      id: 2,
      title: "Exams",
      subMenu: [
        {
          id: 1,
          title: "Under Graduate",
          link: "/neet-ug",
        },
        {
          id: 2,
          title: "Post Graduate",
          link: "/neet-pg",
        },
      ],
    },
    {
      id: 3,
      title: "Resources",
      subMenu: [
        {
          id: 1,
          title: "NEET Counselling Process",
          link: "/neet-counselling-process",
        },
        {
          id: 2,
          title: "Top Colleges for Neet",
          link: "/top-colleges-for-neet",
        },
        {
          id: 3,
          title: "NEET UG Counselling Date",
          link: "/neet-ug-counselling-date",
        },
        {
          id: 4,
          title: "NEET cut-off",
          link: "/neet-cut-off",
        },
      ],
    },
    {
      id: 4,
      title: "Blogs",
      link: "/blog",
    },
    {
      id: 5,
      title: "Careers",
      link: "/careers",
    },
    {
      id: 6,
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 7,
      title: "Enquire Now",
      link: "/enquiry-form",
    },
    // {
    //   id: 8,
    //   title: "Sign In / Sign Up",
    //   link: "/auth/login",
    // },
  ];
  return (
    <>
      <div
        className={`absolute inset-0 z-30 h-screen bg-gray-800 opacity-70 lg:hidden ${
          isActive ? "w-full" : "w-0"
        }`}
      ></div>
      <section
        className={`fixed top-0 left-0 bottom-0 ${
          isActive ? "w-[80%] md:max-w-[450px] md:w-full" : "w-0"
        } transition-all duration-400 ease-in-out bg-black z-[100] lg:hidden block overflow-hidden`}
      >
        <div className="py-5 text-primary-black">
          <ul>
            {mobileNav.map((item) => (
              <li
                className={`px-5 pb-2 mt-2 text-base text-white w-full font-normal capitalize transition  duration-300 ease-in-out border-b border-gray-600 cursor-pointer  first:mt-0`}
                onClick={
                  item.title === "Exams" || item.title === "Resources"
                    ? null
                    : onClose
                }
                key={item.id}
              >
                {item.subMenu ? (
                  <>
                    <span
                      onClick={
                        item.title === "Exams" ? toggleGlobal : toggleUSA
                      }
                      className="flex items-center justify-between w-full cursor-pointer"
                    >
                      {item.title}
                      {item.title === "Exams" && (
                        <ChevronDown
                          className={`text-primary-green  transition-all ease-in-out duration-200 ${
                            isOpenGlobal ? "rotate-180" : "rotate-0"
                          } `}
                          size={20}
                        />
                      )}
                      {item.title === "Resources" && (
                        <ChevronDown
                          className={`text-primary-green  transition-all ease-in-out duration-200 ${
                            isOpenUSA ? "rotate-180" : "rotate-0"
                          } `}
                          size={20}
                        />
                      )}
                    </span>
                    {item.title === "Exams" && isOpenGlobal && (
                      <ul className="pl-5 text-base font-normal capitalize ">
                        {item.subMenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="w-full py-2 mt-0 first:mt-1"
                          >
                            <Link
                              rel="canonical"
                              to={subItem.link}
                              onClick={onClose}
                              className={` ${
                                location.pathname === item.link
                                  ? "text-emerald"
                                  : "text-black-250"
                              } text-base`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.title === "Resources" && isOpenUSA && (
                      <ul className="pl-5 text-base font-normal capitalize">
                        {item.subMenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="w-full py-2 mt-0 first:mt-1"
                          >
                            <Link
                              rel="canonical"
                              to={subItem.link}
                              onClick={onClose}
                              className={` ${
                                location.pathname === item.link
                                  ? "text-emerald"
                                  : "text-black-250"
                              } text-base`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.link} rel="canonical">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
MobileModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default MobileModal;
