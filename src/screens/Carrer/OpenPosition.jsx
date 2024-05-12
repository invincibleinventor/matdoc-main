const OpenPosition = () => {
  const data = [
    {
      id: 1,
      heading: "Engineering",
      submenu: [
        {
          id: 1,
          title: "Software Engineer - Frontend (React Js)",
          location: "Chennai, India",
        },
        {
          id: 2,
          title: "Software Engineer - Entry Level",
          location: "Chennai, India",
        },
      ],
    },
    {
      id: 2,
      heading: "Information Management",
      submenu: [
        {
          id: 1,
          title: "Information Management Executive",
          location: "Nagercoil, India",
        },
        {
          id: 2,
          title: "Information Management Lead",
          location: "Nagercoil, India",
        },
      ],
    },
    {
      id: 3,
      heading: "Customer Experience",
      submenu: [
        {
          id: 1,
          title: "Customer Engagement Specialist - English (Customer Support)",
          location: "Nagercoil, India",
        },
        {
          id: 2,
          title: "Customer Engagement Specialist - Hindi (Customer Support)",
          location: "Nagercoil, India",
        },
        {
          id: 3,
          title: "Customer Engagement Lead",
          location: "Nagercoil, India",
        },
      ],
    },
    {
      id: 4,
      heading: "Creativity and Digital Media",
      submenu: [
        {
          id: 1,
          title: "Content Writer",
          location: "Nagercoil, India",
        },
        {
          id: 2,
          title: "Video Editor & Motion Graphics Designer",
          location: "Nagercoil, India",
        },
      ],
    },
    {
      id: 5,
      heading: "Operations",
      submenu: [
        {
          id: 1,
          title: "HR & Admin Officer",
          location: "Nagercoil, India",
        },
      ],
    },
    {
      id: 6,
      heading: "Accounts",
      submenu: [
        {
          id: 1,
          title: "HR & Admin Officer",
          location: "Nagercoil, India",
        },
      ],
    },
  ];
  return (
    <section className="w-full pb-10 lg:pb-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <h2 className="mt-5 text-center text-white " data-aos="fade-up">
          Open positions
        </h2>
        <div className="w-full mt-10 lg:mt-14">
          {data.map((item) => (
            <div className="mt-10 first:mt-0" key={item.id} data-aos="fade-up">
              <h4 className="text-2xl text-white">{item.heading}</h4>
              <div className="flex flex-wrap justify-start w-full mt-5 gap-y-8 gap-x-8">
                {item.submenu?.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="px-5 md:px-6 py-4 bg-gray-800 border min-h-[130px] border-white shadow-normal-hover  rounded w-[334px]  "
                  >
                    <h5 className="text-lg text-white min-h-14 ">
                      {subItem?.title}
                    </h5>
                    <p className="mt-4 text-base text-gray-300">
                      {subItem?.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPosition;
