import { CircleCheck, MoveRight } from "lucide-react";
import Button from "../../components/Atoms/button";

const BestSeat = () => {
  return (
    <section className="w-full pt-16 pb-10 lg:pb-20 lg:pt-32 ">
      <div className="px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <p
          className="text-sm text-center text-white md:text-base"
          data-aos="fade-up"
        >
          THE NEW WAY OF COUNSELLING
        </p>
        <h2 className="mt-1 mb-5 text-center text-white" data-aos="fade-up">
          Designed for the Best Seat
        </h2>
        <p className="text-xl text-center text-white" data-aos="fade-up">
          Our centralized platform offers real-time updates on Allotments,
          Closing Ranks (Cut Offs) - For All India{" "}
          <br className="hidden lg:block" />
          and State Counselings of 2021, 2022 &amp; 2023, Eligibility &amp;
          Reservation Criteria, Application filling process{" "}
          <br className="hidden lg:block" />
          &amp; Certificates required, Fee, Stipend &amp; Bond, Seats &amp; Bed
          Information for all colleges and much more!
        </p>
        <div className="flex flex-wrap justify-between w-full mt-14">
          <div
            className="w-full md:w-[48%] border border-secondary-sky shadow-reverse rounded p-5 md:p-10"
            data-aos="fade-right"
          >
            {" "}
            <div className="w-full p-2 text-white bg-primary-brown border flex justify-center items-center  border-white rounded shadow-normal max-w-[88px] h-[72px]">
              <h3 className="text-2xl font-semibold md:text-3xl"> UG</h3>
            </div>
            <h2 className="mt-8 text-white ">Under Graduate</h2>
            <p className="mt-2 text-base text-white">
              IN ALL 30 STATES & ALL INDIA COUNSELLING
            </p>
            <p className="mt-6 text-lg text-white">
              Simplifying complex information, empowering you to make informed
              decisions for your child's future.
            </p>
            <div className="p-5 my-8 border rounded md:p-6 border-secondary-sky">
              <ul className="text-xl text-white">
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Clarity on options
                </li>
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Future Proofing
                </li>
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Financial Confidence
                </li>
              </ul>
            </div>
            <Button text="Learn More" classes=" common-btn blue mt-10" />
          </div>
          <div
            className="w-full mt-10 md:mt-0 md:w-[48%] border border-secondary-sky shadow-normal rounded p-5 md:p-10"
            data-aos="fade-left"
          >
            <div className="w-full p-2 text-white bg-primary-green border flex justify-center items-center  border-white rounded shadow-normal max-w-[88px] h-[72px]">
              <h3 className="text-2xl font-semibold md:text-3xl"> PG</h3>
            </div>
            <h2 className="mt-8 text-white ">Under Graduate</h2>
            <p className="mt-2 text-base text-white">
              IN ALL 30 STATES & ALL INDIA COUNSELLING
            </p>
            <p className="mt-6 text-lg text-white">
              MAT DOC is the perfect companion to help you take your medical
              career to the next level.
            </p>
            <div className="p-5 my-8 border rounded md:p-6 border-secondary-sky">
              <ul className="text-xl text-white">
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Application Changes
                </li>
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Tailored Flexibility
                </li>
                <li className="flex items-center justify-start mt-4 first:mt-0">
                  <span className="mr-3 md:mr-4 text-primary-green">
                    <CircleCheck size={28} />
                  </span>{" "}
                  Specialization Insights
                </li>
              </ul>
            </div>
            <Button text="Learn More" classes=" common-btn blue mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeat;
