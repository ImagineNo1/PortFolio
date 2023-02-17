import React from "react";

import bookstore from "../assets/portfolio/bookstore.jpg";
import FullShoppingApp from "../assets/portfolio/Full-shp-app.jpg";
import ImagineCssLibrary from "../assets/portfolio/imagine-css.jpg";
import MovieDB from "../assets/portfolio/movieDB.jpg";
import YearsFact from "../assets/portfolio/years-fact.jpg";
import todo from "../assets/portfolio/todo.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todo,
      title: "Todo App",
      demo: "https://todo-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/TodoApp",
    },
    {
      id: 2,
      src: YearsFact,
      title: "Years Fact",
      demo: "",
      github: "https://github.com/ImagineNo1/years-fact",
    },
    {
      id: 3,
      src: MovieDB,
      title: "movie DB",
      demo: "https://movie-cw54od2fy-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/movie-db",
    },
    {
      id: 4,
      src: FullShoppingApp,
      title: "Full Shoping App",
      demo: "",
      github: "https://github.com/ImagineNo1/Full-Shopping-App",
    },
    {
      id: 5,
      src: ImagineCssLibrary,
      title: "Imagine Css Library",
      demo: "",
      github: "https://github.com/ImagineNo1/imagine-css-library",
    },
    {
      id: 6,
      src: bookstore,
      title: "BookStore",
      demo: "https://bookstore-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/BookStore",
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
          {portfolios.map(({ id, src, title, demo, github }) => (
            <div key={id} className=" shadow-md shadow-white rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="bg-gradient-to-br bg-gre from-green-800 to-green-500 text-center rounded-sm mt-2 py-1 px-3 text-white text-lg">
                {title}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className=" w-1/2 px-6  m-4 duration-200 hover:scale-[115%] text-white "
                >
                  Demo
                </a>
                <a
                  href={github}
                  className="px-6  w-1/2 m-4 duration-200 hover:scale-[115%] text-white"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
