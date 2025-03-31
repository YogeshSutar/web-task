import React from "react";
import easyNavigation from "../assets/Layer 142.png";
import logisticsSupport from "../assets/Layer 141.png";
import technicalSupport from "../assets/Layer 159.png";

const features = [
  {
    id: 1,
    image: easyNavigation,
    title: "Easy navigation",
    description:
      "Set up your own online shop “Dukkan” and display your items in a very professional way with our easy step by step platform.",
  },
  {
    id: 2,
    image: logisticsSupport,
    title: "Full Technical Support",
    description:
      "Don’t worry about the technical stuff any more, we have your back and we will take care of all related technical issues.",
  },
  {
    id: 3,
    image: technicalSupport,
    title: "All logistics support",
    description:
      "All business related matters are provided like Payment Gateway and Products Delivery, and a dashboard with a finance system that will help you manage your money.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative top-4">
      <div className="bg-red-600 text-white py-14 text-center px-4 sm:px-6">
        <div className="container mx-auto mb-16 sm:mb-20">
          <h2 className="lg:text-3xl text-2xl font-bold mb-4 font-oswald">
            About Us
          </h2>
          <p className="lg:text-base text-sm max-w-[950px] mx-auto mt-4 lg:text-center text-justify">
            Dukkan online is a unique concept in the region that serves all type
            of small/medium businesses from home, Our idea is to digitize the
            home businesses and to make it easier for all home business owners
            to manage their day to day activities digitally, This will allow
            them to reach a wider customer base with the support of all related
            matters for instance invoicing, logistics, customer feedback follow-
            up and so forth.
          </p>
          <p className="text-sm lg:text-base max-w-[950px] mx-auto mt-4 lg:text-center text-justify">
            Our platform is uniquely designed and developed based on the market
            requirement and we keep updating it to match all requirements
            continuously as we always listen to our shop owners and to our
            users/customers.
          </p>
        </div>
      </div>

      <div className="relative -mt-24 lg:container mx-auto px-5 lg:px-64 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 gap-10 p-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white text-black lg:shadow-2xl shadow-2xl p-10 lg:p-10 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-[70px] sm:h-[60px] w-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-black text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
