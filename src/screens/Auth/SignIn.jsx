import { Assets } from "../../assets/Assets";
import PhoneInput from "react-phone-number-input";
import "./style.css";
import { useState } from "react";
import Button from "../../components/Atoms/button";
import { MessageCircleMore } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const SignIn = () => {
  const [value, setValue] = useState();
  return (
    <section className="flex items-center justify-center w-full h-screen bg-black">
      <div className="w-full px-5 mx-auto lg:container xl:max-w-screen-xl ">
        <div className="max-w-[540px] shadow-2xl mx-auto w-full border-2 border-gray-700  rounded px-10 py-14  ">
          <a href="/" className="w-fit max-w-[180px] " target="_blank">
            <img
              src={Assets.MatDoc}
              alt="MatDoc"
              title="MatDoc"
              className="object-contain max-w-[180px]  h-auto mx-auto transition duration-500 ease-in-out bg-transparent rounded cursor-pointer w-fit bg-blend-color-burn hover:scale-105"
            />
          </a>
          <form className="mt-5">
            <h2 className="text-3xl font-bold text-center text-white">
              Sign In / Sign Up
            </h2>
            <p className="mt-2 text-base text-center text-white">
              Enter your phone number to continue
            </p>
            <PhoneInput
              placeholder="Enter your mobile number"
              defaultCountry="US"
              value={value}
              onChange={setValue}
              className="w-full pl-3 mt-6 border-2 border-gray-700 rounded"
            />
            <Button
              text="Send OTP via SMS"
              classes="w-full common-btn blue mt-6 text-lg h-11"
              icon={<MessageCircleMore size={25} className="mr-3" />}
            />
            <Button
              text="Send OTP to WhatsApp"
              classes="w-full border border-green-500 hover:bg-green-500 group hover:text-white duration-300 ease-in-out  text-green-500 rounded flex items-center justify-center   mt-6 text-lg h-11"
              icon={
                <FaWhatsapp
                  size={25}
                  className="mr-3 text-green-500 duration-300 ease-in-out group-hover:text-white"
                />
              }
            />
            <p className="mt-8 text-base font-bold text-center text-white">
              Trouble signing in?
              <a
                href="/contact-us"
                target="_blank"
                className="ml-2 font-medium underline underline-offset-3 text-primary-brown "
              >
                Get Help
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
