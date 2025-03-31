import React, { useState } from "react";

import iconMonthly from "../assets/Layer 153.png";
import iconYearly from "../assets/Layer 154.png";
import bgImage from "../assets/Layer 152.png";

const SubscriptionForm = () => {
  const liContent = {};
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };
  return (
    <div className="relative flex flex-col lg:flex-row w-full  h-auto lg:h-screen">
      <div
        className="lg:w-[70%] w-full h-[75vh] md:h-[40vh] lg:h-[100%] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/55"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute p-6 lg:p-7 lg:pt-8 text-white flex flex-col w-full lg:w-[70%]">
          <h2
            id="subscription"
            className="text-2xl lg:text-3xl font-medium transform scale-y-150"
          >
            Subscription
          </h2>
          <p className="mt-5 lg:mt-10 text-sm lg:text-base text-justify tracking-[0.5px]">
            Our subscription is very easy and has no hidden charges, you will
            only have to pay on a monthly basis or as a bundle for the whole
            year based on your preferences. Check out our package below:
          </p>
          <ul className=" mt-5 lg:mt-8 flex flex-col gap-1 text-sm lg:text-base">
            {[
              "One Dedicated store with your own category",
              "Shop owner control page to give you full control to your store",
              "Items will be listed on our page and everywhere related to items",
              "Dashboard for your sales and products",
              "Customer lists with their contacts",
              "Finance page with invoicing for your customer",
              "Logistics page to manage your deliveries",
            ].map((item, index) => (
              <li
                key={index}
                style={liContent}
                className="inline-block text-xs lg:text-lg lg:my-1 font-nunito"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 lg:mt-10 text-sm lg:text-base font-nunito">
            On the top of that your customer will be getting one stop shop for
            all items throughout a mobile application free of charge and we will
            support you and your business all the way to make sure you reach
            more customer base and to give you the ability to be always online
            with a state of the art technical support for all related matters
            24/7
          </p>
        </div>
      </div>

      <div className="lg:absolute static right-4 md:top-8 lg:top-7 w-full lg:w-[50%] lg:h-[90%] bg-white p-6 ">
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 md:mb-2">
          <div
            className={`flex-1 p-4 border cursor-pointer flex items-center space-x-4 transition-all duration-300 ${
              selectedPlan === "monthly"
                ? "bg-white text-black hover:bg-red-700"
                : "hover:bg-red-100"
            }`}
            onClick={() => setSelectedPlan("monthly")}
          >
            <img src={iconMonthly} alt="Monthly Plan" className="h-10 w-10" />
            <div>
              <p className="text-lg md:text-xl font-normal py-1 font-oswald transform scale-y-150">
                199 AED only
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Monthly subscription
              </p>
            </div>
          </div>

          <div
            className={`flex-1 p-4 border cursor-pointer flex items-center space-x-4 transition-all duration-300 ${
              selectedPlan === "yearly"
                ? "bg-red-600 text-white shadow-md"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
            onClick={() => setSelectedPlan("yearly")}
          >
            <img src={iconYearly} alt="Yearly Plan" className="h-10 w-10" />
            <div>
              <p className="text-lg md:text-xl py-1 font-normal font-oswald transform scale-y-150">
                1910 AED only{" "}
                <span className="text-xs md:text-[14px] font-oswald transform scale-y-150">
                  & save 20%
                </span>
              </p>
              <p className="text-xs md:text-sm">Yearly subscription</p>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 max-w-4xl mx-auto">
          {[
            { label: "Full Name", placeholder: "Enter here" },
            {
              label: "Contact Details",
              placeholder: "Enter your mobile number",
            },
          ].map(({ label, placeholder }, index) => (
            <div key={index}>
              <label className="text-[#133254] text-sm mt-2 lg:m-0 font-semibold block scale-y-[1.3]">
                {label}
              </label>
              <input
                type="text"
                placeholder={placeholder}
                aria-label={placeholder}
                className="w-full border p-3 rounded-sm mt-2 text-sm focus:ring-2 focus:ring-blue-300 shadow-[1px_1px_10px_1px_rgba(173,216,230,0.3)]"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="text-[#133254] text-sm mt-2 lg:m-0 font-semibold block scale-y-[1.3]">
              Address
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              {["Street", "Emirates", "P.O. Box"].map((data, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={data}
                  aria-label={data}
                  className="w-full border p-3 rounded-sm mt-2 text-sm focus:ring-2 focus:ring-blue-300 shadow-[1px_1px_10px_1px_rgba(173,216,230,0.3)]"
                />
              ))}
            </div>
          </div>

          {[
            { label: "Shop Name", placeholder: "Enter here" },
            {
              label: "Trade License Number",
              placeholder: "Enter here",
            },
          ].map(({ label, placeholder }, index) => (
            <div key={index}>
              <label className="text-[#133254] text-sm md:mt-1 mt-2 font-semibold block scale-y-[1.3]">
                {label}
              </label>
              <input
                type="text"
                placeholder={placeholder}
                aria-label={placeholder}
                className="w-full border p-3 rounded-sm mt-2 text-sm focus:ring-2 focus:ring-blue-300 shadow-[1px_1px_10px_1px_rgba(173,216,230,0.3)]"
              />
            </div>
          ))}

          <div>
            <label className="text-[#133254] text-sm mt-2 font-semibold block scale-y-[1.3]">
              Select Your Shop Category
            </label>
            <select
              className="w-full border p-3 rounded-sm mt-2 text-sm focus:ring-2 focus:ring-blue-300 shadow-[1px_1px_10px_1px_rgba(173,216,230,0.3)]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                Enter here
              </option>
              <option value="grocery">Grocery Store</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing & Fashion</option>
              <option value="home_decor">Home Decor</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>

          <div>
            <label className="text-[#133254] text-sm mt-2 font-semibold block scale-y-[1.3]">
              Upload Trade License
            </label>
            <div className="w-full border p-1 rounded-sm mt-2 flex items-center justify-between shadow-[1px_1px_10px_1px_rgba(173,216,230,0.3)] ">
              <span className=" text-sm truncate w-[40%]">{fileName}</span>
              <input
                type="file"
                id="fileInput"
                className="hidden shadow-[1px_1px_10px_0.5px_rgba(173,216,230,0.5)]"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="text-sm border lg:w-24 p-2 bg-white hover:bg-gray-300 rounded-md "
                onClick={() => document.getElementById("fileInput").click()}
              >
                Browse
              </button>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button className="bg-red-600 text-white text-sm px-10 py-4 rounded-full font-bold w-full md:w-auto transition-transform transform hover:scale-105 font-oswald">
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
