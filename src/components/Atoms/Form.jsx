import { MoveRight } from "lucide-react";
import Button from "./button";

const Form = () => {
  return (
    <form>
      <div
        className="flex flex-wrap items-center justify-between w-full gap-y-6"
        data-aos="fade-up"
      >
        <div className="w-[48%]">
          <label className="text-xl text-white">Full name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 mt-2 text-xl text-gray-400 bg-transparent border border-gray-700 rounded outline-none placeholder:text-xl focus:outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="w-[48%]">
          <label className="text-xl text-white">Email Address</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 mt-2 text-xl text-gray-400 bg-transparent border border-gray-700 rounded outline-none placeholder:text-xl focus:outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="w-[48%]">
          <label className="text-xl text-white">Mobile Number</label>
          <input
            type="number"
            placeholder="Enter your number"
            className="w-full p-3 mt-2 text-xl text-gray-400 bg-transparent border border-gray-700 rounded outline-none placeholder:text-xl focus:outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="w-[48%]">
          <label className="text-xl text-white">Town / City</label>
          <input
            type="text"
            placeholder="Enter your town / city"
            className="w-full p-3 mt-2 text-xl text-gray-400 bg-transparent border border-gray-700 rounded outline-none placeholder:text-xl focus:outline-none placeholder:text-gray-400 "
          />
        </div>
        <div className="w-[48%]">
          <label className="text-xl text-white">Course Interested In </label>
          <select
            placeholder="Enter your town / city"
            className="w-full p-3 mt-2 text-xl text-gray-400 bg-transparent border border-gray-700 rounded outline-none placeholder:text-xl focus:outline-none placeholder:text-gray-400 "
          >
            <option selected="selected" disabled="true">
              Please Select
            </option>
            <option value="neet">NEET</option>
            <option value="cbse">CBSE</option>
            <option value="icse">ICSE</option>
            <option value="national">National</option>
          </select>
        </div>
      </div>
      <p className="mt-4 text-base text-white" data-aos="fade-up">
        <span>
          <input
            type="checkbox"
            className="w-5 mr-2 border border-white rounded"
          />
        </span>{" "}
        I agree to{" "}
        <span className="underline cursor-pointer underline-offset-2 ">
          {" "}
          Terms of Service
        </span>
      </p>

      <Button text="Submit" classes=" common-btn blue mt-9 mx-0" />
    </form>
  );
};

export default Form;
