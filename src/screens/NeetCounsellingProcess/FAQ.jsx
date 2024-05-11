import { useState } from "react";

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      id: 1,
      title: "What is NEET?",
      content:
        "NEET stands for National Eligibility and Entrance Test. It is a national-level entrance test held in India for admission to undergraduate medical and dentistry programmes such as MBBS, BDS and AYUSH courses at various government and private colleges around the country.",
    },
    {
      id: 2,
      title: "Who conducts NEET?",
      content:
        "National Testing Agency, a self-sustained organization that taken care by the Government. In short, NTA is the one that conducts the NEET exam.",
    },
    {
      id: 3,
      title: "What is the eligibility criteria for NEET?",
      content:
        "The eligibility criteria for NEET include aspects such as educational qualifications, and nationality. Candidates who are in/completed Class 12 with Physics, Chemistry, Biology/Biotechnology, and English as core subjects are the only ones who are applicable. They must also meet the minimum age requirement and other criteria specified by the NTA.",
    },
    {
      id: 4,
      title: "How many attempts can I make for NEET?",
      content:
        "As per the latest regulations, there is no restriction on the number of attempts for NEET, provided that candidates meet the other eligibility requirements.",
    },
    {
      id: 5,
      title: "What is the exam pattern for NEET?",
      content:
        "The NEET exam is made up of MCQs that cover subjects like Physics, Chemistry, and Biology. The total number of questions, marking scheme, and duration of the exam are predefined and specified by the NTA.",
    },
    {
      id: 6,
      title: "Is there a negative marking in NEET?",
      content:
        "Yes, there is a negative marking in NEET. Each erroneous answer is subtracted one point from the final score. Unanswered questions, however, do not deduct marks.",
    },
    {
      id: 7,
      title: "How can I prepare for NEET effectively?",
      content:
        "Effective preparation for NEET requires a structured study plan, a thorough understanding of concepts, regular practice with mock tests and previous year question papers, and revision. It is also essential to stay updated with the exam pattern and syllabus.",
    },
    {
      id: 8,
      title: "What are the best reference books for NEET preparation?",
      content:
        "There are several good reference books available for NEET preparation, covering each subject comprehensively. Some popular choices include NCERT textbooks, HC Verma for Physics, OP Tandon for Chemistry, and Biology books by Trueman and Dinesh.",
    },
    {
      id: 9,
      title: "How can I register for NEET?",
      content:
        "Candidates can register for NEET online through the official website of NTA during the specified registration period. The registration process typically involves filling out the application form, uploading required documents, and paying the application fee.",
    },
    {
      id: 10,
      title: "What is the reservation policy in NEET?",
      content: (
        <div>
          <p>
            NEET seat allotment follows the reservation policy as per the norms
            of the Government of India and respective state governments. There
            are lots of reserved categories in NEET such as:
          </p>
          <ul className="mt-5 ml-5 list-decimal">
            <li className="pl-3 mt-2 first:mt-0">Scheduled Castes (SC)</li>
            <li className="pl-3 mt-2 first:mt-0">Scheduled Tribes (ST)</li>
            <li className="pl-3 mt-2 first:mt-0">
              Other Backward Classes (OBC)
            </li>
            <li className="pl-3 mt-2 first:mt-0">
              Economically Weaker Sections (EWS)
            </li>
            <li className="pl-3 mt-2 first:mt-0">
              Persons with Disabilities (PwD)
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full py-16 bg-black ">
      <div
        className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl"
        data-aos="fade-up"
      >
        <h2 className="text-center text-white ">
          Frequently Asked Questions by the <br className="hidden lg:block" />
          students
        </h2>
        <div className="w-full mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-5 py-3 mt-5 text-white border border-gray-500 rounded first:mt-0"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-xl font-semibold ">{item.title}</div>
                <div className="text-2xl font-semibold ">
                  {openIndex === index ? "-" : "+"}
                </div>
              </div>
              <div
                className={` overflow-hidden duration-500 transition  text-lg   ease-in-out ${
                  openIndex === index
                    ? "open h-auto mt-3 border-t border-secondary-sky pt-3 pl-3 pb-2"
                    : "closed h-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frequently;
