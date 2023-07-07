import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammad-rezvani-53a303245/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/imagineno1",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://gmail.com/mohammadrezvani2002@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/imagineno1",
    },
    {
      id: 5,
      child: (
        <>
          Telegram <FaTelegram size={30} />
        </>
      ),
      href: "https://t.me/NiclasMouritzen",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
