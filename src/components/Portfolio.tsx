import React from "react";

import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/portfolio/todo.jpg",
      title: "Todo App",
      demo: "https://todo-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/TodoApp",
    },
    {
      id: 2,
      src: "/portfolio/years-fact.jpg",
      title: "Years Fact",
      demo: "",
      github: "https://github.com/ImagineNo1/years-fact",
    },
    {
      id: 3,
      src: "/portfolio/movieDB.jpg",
      title: "movie DB",
      demo: "https://movie-cw54od2fy-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/movie-db",
    },
    {
      id: 4,
      src: "/portfolio/Full-shp-app.jpg",
      title: "Full Shoping App",
      demo: "",
      github: "https://github.com/ImagineNo1/Full-Shopping-App",
    },
    {
      id: 5,
      src: "/portfolio/imagine-css.jpg",
      title: "Imagine Css Library",
      demo: "",
      github: "https://github.com/ImagineNo1/imagine-css-library",
    },
    {
      id: 6,
      src: "/portfolio/bookstore.jpg",
      title: "BookStore",
      demo: "https://bookstore-imagineno1.vercel.app/",
      github: "https://github.com/ImagineNo1/BookStore",
    },
    {
      id: 7,
      src: "/portfolio/phunter.jpg",
      title: "Propertyhunter",
      demo: "https://propertyhunter.app/",
      github: "https://github.com/Interactive10/core",
    },
  ];

  return (
    <div
      id="portfolio"
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
              <div className="w-full">
                <Image
                  src={src}
                  alt={title}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
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
