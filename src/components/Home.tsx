import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-600"
    >
      <div className="mx-auto w-[80%] flex items-center justify-between gap-[10px] h-full px-4 ">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Junior Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS , Bootstrap , MERN Stack and TypeScript.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <Image
          src={"/heroImage.png"}
          width={350}
          height={350}
          alt="my profile"
          className="rounded-2xl object-cover w-[350px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HomePage;
