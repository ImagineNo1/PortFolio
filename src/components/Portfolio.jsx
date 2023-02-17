import React from "react";

import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import todo from "../assets/portfolio/todo.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todo,
      title: "Todo App",
    },
    {
      id: 2,
      src: reactParallax,
      title: "Tailwind css",
    },
    {
      id: 3,
      src: navbar,
      title: "Hello",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "Test",
    },
    {
      id: 5,
      src: installNode,
      title: "Yes sir",
    },
    {
      id: 6,
      src: reactWeather,
      title: "Im Goat",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full md:min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-600 py-[30px]"
    >
      <div className="w-[80%] mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-800 text-white">
            Portfolio
          </p>
          <p className="py-6 text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className=" shadow-md shadow-gray-800 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="bg-purple-500 text-center rounded-sm mt-2 py-1 px-3 text-white text-lg">
                {title}
              </p>
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6  m-4 duration-200 hover:scale-105 text-white ">
                  Demo
                </button>
                <button className="px-6  w-1/2 m-4 duration-200 hover:scale-105 text-white">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
