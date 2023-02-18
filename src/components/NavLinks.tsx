import React from "react";
import { Link } from "react-scroll";

type NavLinksProps = {
  link: string;
  className: string;
  onClick?: () => void;
};
const NavLinks = ({ link, className, onClick }: NavLinksProps) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={500} onClick={onClick}>
        {link}
      </Link>
    </li>
  );
};

export default NavLinks;
