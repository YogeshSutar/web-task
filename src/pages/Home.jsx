import React from "react";
import HomeImage from "../assets/Layer 132.png";

const Home = () => {
  return (
    <section className="relative pt-16 pb-0">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between lg:px-[60px] px-4 sm:px-8">
        <div className="w-full md:w-[50%] mt-16 md:mt-18 text-center md:text-left">
          <h1 className="mt-10 text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-snug font-oswald">
            First professional <br />
            <span>Home business platform</span>
          </h1>
          <p className="mt-10 lg:mt-6 text-gray-700 text-base sm:text-lg">
            Dukkan Online will help you <br className="hidden md:block" />
            <span>grow and reach your customers easily.</span>
          </p>

          <div className="mt-4 lg:mt-6 flex gap-4 justify-center md:justify-start">
            <a href="https://www.apple.com/in/app-store/">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 sm:h-14 w-auto"
              />
            </a>
            <a href="https://play.google.com/store/games?hl=en_IN">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 sm:h-14 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="md:w-[90%] flex">
          <img
            src={HomeImage}
            alt="Dukkan Online Preview"
            className="h-[40vh] lg:h-[63vh] object-contain lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
