import { Assets } from "../../assets/Assets";

const PostDeclaration = () => {
  return (
    <section className="w-full pt-40 pb-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <div className="pt-9 px-10 pb-7 text-white bg-[#18181B] shadow-cards rounded relative flex justify-between ">
          <div className="min-w-[360px]">
            <img
              src={Assets.DoctorPost}
              alt="
                    Post Result Declaration
                "
              title="Post Result Declaration"
              className="absolute bottom-0 left-0 object-contain w-fit max-w-[500px]"
            />
          </div>
          <div className="w-[62%]">
            <h2 className="text-white ">Post Result Declaration</h2>
            <p className="mt-8 text-xl text-white">
              Following the announcement of results, successful candidates gain
              the opportunity to participate in the counselling process, based
              on their ranks in the merit list (both All India and State merit
              lists).
            </p>
            <p className="mt-8 text-xl text-white">
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
