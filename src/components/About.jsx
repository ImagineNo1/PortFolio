import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20 md:pb-0">
        <div className="pb-8 pt-10 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I have started learning programming when I was 13 , Back then I
          started with python , I worked with python for about 2 years and that
          moments I was solid in python
        </p>

        <br />

        <p className="text-xl">
          since 2020 I started learning web development and I started with Html
          / Css , After get good at those I learnd javascript and Es6 , After
          that, I learned React and now I have a good knowledge about React ,
          Currently, I am a full stack web developer, I code with JavaScript and
          most of the time with Typescript.
        </p>
        <br />
        <p className="text-xl">
          In addition, I am very familiar with Sass, Bootstrap and Tailwind and
          I have done many projects with them. This project is also designed
          with Tailwind
        </p>
        <br />
        <p className="text-xl">
          I am familiar with the MongoDB database and I use many additional
          tools that I will mention them in the portfolio section
        </p>
      </div>
    </div>
  );
};

export default About;
