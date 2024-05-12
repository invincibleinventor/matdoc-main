import { useEffect } from "react";
import Form from "../../components/Atoms/Form";
import { Helmet } from "react-helmet";

const EnquiryNow = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
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
    <>
      <Helmet>
        <title>Enquiry Form - MAT DOC</title>
      </Helmet>
      ;
      <section className="w-full py-10 lg:py-20 ">
        <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
          <h2 className="text-center text-white " data-aos="fade-up">
            Your medical dreams are now <br className="hidden lg:block" />{" "}
            simplified with MAT DOC!
          </h2>
          <div
            className="flex flex-wrap justify-between w-full mt-10 lg:mt-12 gap-y-7"
            data-aos="fade-up"
          >
            {data.map((item) => (
              <div
                className="w-full sm:w-[48%] lg:w-[32%] px-5 md:px-8 py-8 md:py-12 text-white rounded  HomeCards "
                key={item.id}
              >
                <p className="text-xl font-medium leading-8 text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <h3
            className="mt-10 mb-5 text-3xl text-center text-white lg:mt-12"
            data-aos="fade-up"
          >
            Let's get started
          </h3>
          <Form />
        </div>
      </section>
    </>
  );
};

export default EnquiryNow;
