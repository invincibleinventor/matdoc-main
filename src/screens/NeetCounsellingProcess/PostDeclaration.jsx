import { Assets } from "../../assets/Assets";

const PostDeclaration = () => {
  return (
    <section className="w-full pt-10 pb-10 bg-black lg:pb-16 md:pt-40 ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <div className="pt-5 sm:pt-6 md:pt-7 mmd:pt-9 px-5 sm:px-6 md:px-7 mmd:px-10 pb-5 sm:pb-6 md:pb-7 text-white bg-[#18181B] shadow-cards rounded relative flex justify-between ">
          <div className=" hidden md:flex min-w-[360px]">
            <img
              src={Assets.DoctorPost}
              alt="Post Result Declaration"
              title="Post Result Declaration"
              className="absolute bottom-0  left-0 object-contain w-fit max-w-[450px] xl:max-w-[500px]"
            />
          </div>
          <div className="w-full md:w-[60%] xl:w-[62%]">
            <h2 className="text-white ">Post Result Declaration</h2>
            <p className="mt-5 text-lg text-white mmd:text-xl xl:mt-8">
              Following the announcement of results, successful candidates gain
              the opportunity to participate in the counselling process, based
              on their ranks in the merit list (both All India and State merit
              lists).
            </p>
            <p className="mt-5 text-lg text-white mmd:text-xl xl:mt-8">
              The Medical Counselling Committee (MCC) looks over the NEET
              counselling process, a pivotal facet of the NEET selection
              process, facilitating admissions to various medical courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDeclaration;
