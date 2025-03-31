import React from "react";
import invoice from "../assets/Layer 135.png";
import logistics from "../assets/Layer 136.png";
import finance from "../assets/Layer 137.png";
import dashboard from "../assets/Layer 138.png";
import feedback from "../assets/Layer 139.png";
import product from "../assets/Layer 143.png";
import mobile from "../assets/Layer 144.png";
import inventory from "../assets/Layer 157.png";
import upgrade from "../assets/Layer 158.png";

const features = [
  {
    icon: invoice,
    title: "Online invoicing system",
    className: "text-red-600",
  },
  {
    icon: logistics,
    title:
      "Online logistics system integrated with a leading company to deliver your items",
  },
  { icon: finance, title: "Online Finance system" },
  {
    icon: dashboard,
    title:
      "Online Dashboard that gives you a glimpse about your business performance",
  },
  {
    icon: feedback,
    title:
      "Feedback system that will serve you in getting to know your customer needs",
  },
  {
    icon: product,
    title:
      "Easy product management system to add your items that matches your shop category",
  },
  {
    icon: mobile,
    title:
      "Trendy mobile app on all platforms to make ordering and tracking easy for your customer",
  },
  { icon: inventory, title: "Managing your inventory and items" },
  {
    icon: upgrade,
    title:
      "Hassle-free approach so you can focus on your business with updates and upgrades based on the latest technology trends",
  },
];

const Packages = () => {
  return (
    <section className="py-16 px-6 sm:bg-white" id="packages">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 font-oswald scale-y-[1.3]">
        Our Package
      </h2>
      <p className="text-md text-base lg:max-w-[65%] md:max-w-4xl mx-auto text-gray-700 lg:text-center text-justify mb-10 sm:mb-12">
        Registering in Dukkan Online will give you the ability to get many
        enriching features which will help you in getting started with your
        business and grow gradually. As you grow, we will grow, ensuring a
        mutual business relationship where we fulfill your needs as much as
        possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:max-w-[65%] md:max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 text-center sm:text-left p-6 sm:p-4 lg:border-none border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-red-300 hover:shadow-md hover:bg-cyan-50 hover:scale-105"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-14 w-[55px] lg:w-14 sm:h-10 sm:w-10 mb-4 sm:mb-0"
            />
            <p
              className={`text-sm transition-colors duration-300 ease-in-out hover:text-red-600 justify-center ${
                feature.className || "text-gray-800"
              }`}
            >
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
