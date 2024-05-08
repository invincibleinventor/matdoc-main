import Form from "../../components/Atoms/Form";

const EnquiryNow = () => {
  const data = [
    {
      id: 1,
      description:
        "Hey future doctors! We know that cracking the NEET was a big win, but the journey to your dream medical college is just getting started. Now, let MAT DOC guide you through the next big step of NEET counselling.",
    },
    {
      id: 2,
      description:
        "Forget the stress of tracking dates, gathering documents or choosing the right fit for you; we handle all that for you. With MAT DOC, you’re set for success. We answer your questions, calm your worries, and ensure you’re well-prepared for every counselling step.",
    },
    {
      id: 3,
      description:
        "So, why tackle NEET counselling alone? Join the MAT DOC family, and let's turn your medical dreams into reality together!",
    },
  ];
  return (
    <section className="w-full py-20 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <h2 className="text-center text-white " data-aos="fade-up">
          Your medical dreams are now <br className="hidden lg:block" />{" "}
          simplified with MAT DOC!
        </h2>
        <div
          className="flex flex-wrap justify-between w-full mt-12 gap-y-7"
          data-aos="fade-up"
        >
          {data.map((item) => (
            <div
              className="w-[32%] px-8 py-12 text-white rounded  HomeCards "
              key={item.id}
            >
              <p className="text-xl font-medium leading-8 text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <h3
          className="mt-12 mb-5 text-3xl text-center text-white"
          data-aos="fade-up"
        >
          Let's get started
        </h3>
        <Form />
      </div>
    </section>
  );
};

export default EnquiryNow;
