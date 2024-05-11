const NEETSelection = () => {
  return (
    <section className="w-full py-10 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-white ">NEET Selection Process</h2>
        <p className="mt-5 text-lg text-white">
          Centralised counselling for NEET applicants across all categories is{" "}
          <br className="hidden lg:block" />
          conducted by the MCC and consists of four rounds:
        </p>
        <ul className="mt-5 ml-5 list-decimal">
          <li className="pl-3 mt-3 text-2xl font-bold text-white first:mt-0">
            All India Round-1{" "}
          </li>
          <li className="pl-3 mt-3 text-2xl font-bold text-white first:mt-0">
            All India Round-2
          </li>
          <li className="pl-3 mt-3 text-2xl font-bold text-white first:mt-0">
            All India Round-3
          </li>
          <li className="pl-3 mt-3 text-2xl font-bold text-white first:mt-0">
            All India Stray Vacancy Round
          </li>
        </ul>
        <p className="mt-5 text-xl text-white">
          While the MCC administers counselling for 15% of All India Quota seats
          and 100% of deemed university seats over four rounds, qualified NEET
          candidates are only eligible to participate in All India rounds 1, 2,
          3 and the stray round. State authorities conduct separate state-level
          counsellings and publish the NEET counselling schedule for state-quota
          seats, facilitating admissions to government and private
          medical/dental colleges.
        </p>
        <p className="mt-5 text-xl text-white">
          During the counselling process, applicants are required to complete an
          online form to select their preferred college options. Seats are
          subsequently allocated to candidates based on their rank and seat
          availability across participating universities.
        </p>
      </div>
    </section>
  );
};

export default NEETSelection;
