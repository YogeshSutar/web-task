import React from "react";
import ContactUSBanner from "../assets/ContactUSBanner.png";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const ContactUS = () => {
  return (
    <div className="" id="contact">
      <div className="flex flex-col lg:flex-row py-20 relative overflow-hidden">
        <div className="hidden lg:block md:block sm:hidden relative overflow-hidden px-5">
          <img
            src={ContactUSBanner}
            alt="contact us banner"
            className="h-full lg:w-[1213px] w-auto max-w-[70%]"
          />
        </div>

        <div
          className="relative md:absolute sm:relative md:right-[-150px] sm:right-0 mx-auto sm:mx-auto transform sm:translate-x-0 md:translate-x-0 bottom-0 
      w-[250px] h-[250px] md:w-[450px] sm:w-[350px] md:h-[450px] sm:h-[350px] lg:w-[550px] lg:h-[550px] bg-[#f7f9f8] rounded-full 
      flex flex-col justify-center items-center md:items-start text-center md:text-start p-5"
        >
          <h1 className="text-black text-3xl font-bold pl-2 lg:pl-20 md:pl-10 sm:pl-8">
            Contact Us
          </h1>
          <div className="mt-7 text-black text-sm md:text-base pl-2 lg:pl-20 md:pl-10 sm:pl-8">
            <p className="flex w-full items-center gap-3">
              <HiMail className="text-2xl text-red-600" />{" "}
              <strong> Email:</strong> info@dukkanonline.ae
            </p>
            <p className="mt-4 flex w-full items-center gap-3">
              <IoCall className="text-2xl text-red-600" />
              <strong>Phone:</strong> &nbsp;+971 52 4008888
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
