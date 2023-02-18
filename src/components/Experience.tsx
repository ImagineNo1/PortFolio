import Image from "next/image";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "/html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "/css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "/react.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "/nextjs.png",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: "/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: "/graphql.png",
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: "/github.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: "/BootStrap.png",
      title: "Bootstrap",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: "/Express.png",
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: "/Sass.png",
      title: "Sass",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: "/MongoDB.png",
      title: "MongoDB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:min-h-screen py-[30px] text-white"
    >
      <div className="w-[80%] mx-auto">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image
                src={src}
                alt={title}
                width={100}
                height={100}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
