const NeetMarks = () => {
  const data = [
    {
      id: 1,
      desc: (
        <>
          Number of correct answers: <span className="font-bold">150</span>
        </>
      ),
    },
    {
      id: 2,
      desc: (
        <>
          Marks per correct answer: <span className="font-bold">4</span>
        </>
      ),
    },
    {
      id: 3,
      desc: (
        <>
          Total marks for correct answers:{" "}
          <span className="font-bold">600 (150 * 4)</span>
        </>
      ),
    },
    {
      id: 4,
      desc: (
        <>
          Number of incorrect answers: <span className="font-bold">30</span>
        </>
      ),
    },

    {
      id: 5,
      desc: (
        <>
          Negative marks per incorrect answer:{" "}
          <span className="font-bold"> 1</span>
        </>
      ),
    },

    {
      id: 6,
      desc: (
        <>
          Total negative marks: <span className="font-bold">30</span>
        </>
      ),
    },

    {
      id: 7,
      desc: (
        <>
          NEET score: <span className="font-bold">600 - 30 = 570</span>
        </>
      ),
    },
  ];
  return (
    <section className="w-full pb-10 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <div className="w-[45%] mx-auto rounded border-2 border-gray-400 bg-orange-550 p-7 ">
          <ul className="">
            {data.map((item, index) => (
              <li className="mt-5 text-2xl first:mt-0" key={index}>
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-lg text-center text-white ">
          By following this formula, you can calculate your NEET score
          accurately and have a clear understanding of your
          <br className="hidden lg:block" /> performance.
        </p>
      </div>
    </section>
  );
};

export default NeetMarks;
