import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Assets } from "../../assets/Assets";
import { ChevronDown, Menu, X } from "lucide-react";
import MobileModal from "./MobileModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuBar = [
    {
      id: 1,
      name: "Features",
      link: "/#yourdedicatedfeatures",
    },
    {
      id: 2,
      name: "Exams",
      subMenu: [
        {
          id: 1,
          name: "Under Graduate",
          para: " IN 30 STATES & ALL INDIA COUNSELLING ",
          link: "/neet-ug",
        },
        {
          id: 2,
          name: "Post Graduate",
          para: " IN 30 STATES & ALL INDIA COUNSELLING ",
          link: "/neet-pg",
        },
      ],
    },
    {
      id: 3,
      name: "Resources",
      subMenu: [
        {
          id: 1,
          name: "NEET Counselling Process",
          link: "/neet-counselling-process",
        },
        {
          id: 2,
          name: "Top Colleges for Neet",
          link: "/top-colleges-for-neet",
        },
        {
          id: 3,
          name: "NEET UG Counselling Date",
          link: "/neet-ug-counselling-date",
        },
        {
          id: 4,
          name: "NEET cut-off",
          link: "/neet-cut-off",
        },
      ],
    },
    {
      id: 4,
      name: "Blogs",
      link: "#",
    },
    {
      id: 5,
      name: "Careers",
      link: "/careers",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 7,
      name: "Enquire Now",
      link: "/enquiry-form",
    },
  ];

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  return (
    <section
      className={`w-full duration-300 ease-in-out bg-black   ${
        scrolled ? "sticky left-0 right-0 top-0 bg-black z-50 shadow" : ""
      }`}
    >
      <div className="relative z-50 flex items-center justify-between px-5 py-3 mx-auto lg:container xl:max-w-screen-xl">
        <div className="w-[14%]">
          <Link to="/" rel="canonical">
            <img
              src={Assets.MatDoc}
              alt="Mat Doc"
              title="Mat Doc"
              className="max-w-[110px] md:max-w-[170px] md:max-h-20 relative z-50 w-fit object-contain bg-blend-overlay cursor-pointer hover:scale-95  duration-500 ease-in-out"
            />
          </Link>
        </div>
        <div className="w-[62%] flex justify-center items-center ">
          <ul className="items-center justify-center hidden lg:flex gap-x-4 xl:gap-x-7">
            {menuBar.map((menu) => (
              <li className="relative text-base text-white " key={menu.id}>
                {menu.id == 1 ? (
                  <a
                    href={menu.link}
                    className="flex items-center justify-start text-xl font-medium duration-500 ease-in-out xl:text-lg hover:scale-105"
                    rel="canonical"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <Link
                    to={menu.link}
                    className="flex items-center justify-start text-xl font-medium duration-500 ease-in-out xl:text-lg hover:scale-105"
                    rel="canonical"
                    onClick={() => toggleSubmenu(menu.id)}
                  >
                    {menu.name}
                    {menu.subMenu && (
                      <ChevronDown
                        className={`ml-2 text-white duration-300 ease-in-out
                    ${
                      openSubmenus.includes(menu.id)
                        ? "rotate-180 duration-300 ease-in-out"
                        : "rotate-0 duration-300 ease-in-out"
                    }`}
                        size={20}
                      />
                    )}
                  </Link>
                )}

                {menu.subMenu && openSubmenus.includes(menu.id) && (
                  <ul className="absolute min-w-[420px] left-1/2 -translate-x-1/2  text-white bg-black border-2 rounded shadow-lg border-secondary-sky top-12 py-5 px-5">
                    {menu.subMenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        <Link
                          to={subItem.link}
                          rel="canonical"
                          className="block px-8 py-5 rounded hover:bg-slate-800"
                        >
                          <h3 className="text-2xl"> {subItem.name}</h3>
                          {subItem?.para && (
                            <p className="mt-1 text-base">{subItem?.para}</p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[17%] flex justify-end items-center ">
          <ul className="items-center justify-end hidden ml-4 lg:flex">
            <li className="flex items-center justify-center px-5 py-2 text-base text-black bg-white rounded cursor-pointer">
              Sign in / Sign up
            </li>
          </ul>
          <ul className="flex items-center justify-end lg:hidden">
            {mobileModal ? (
              <X
                className="relative z-50 text-white"
                size={30}
                onClick={() => setMobileModal(false)}
              />
            ) : (
              <Menu
                className="text-white"
                size={30}
                onClick={() => setMobileModal(true)}
              />
            )}
          </ul>
        </div>
      </div>
      <MobileModal
        isActive={mobileModal}
        onClose={() => setMobileModal(false)}
      />
    </section>
  );
};

export default Navbar;
