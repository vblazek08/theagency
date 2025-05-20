"use client";
import { useState } from "react";
import Container from "./container";
import { links } from "./navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex py-4 text-white fixed bg-black/40 w-full h-16">
      <Container>
        <a href="">
          <h1 className="font-extrabold text-2xl">theAgency</h1>
        </a>
      </Container>

      <button onClick={toggleMenu} className="md:hidden fixed top-4 right-4">
        {isOpen ? "✕" : "☰"}
      </button>
      <div className={`mr-12 mt-1 ${isOpen ? "block" : "hidden"} md:block`}>
        <ul
          role="list"
          className="   flex flex-col md:flex-row gap-4
          fixed md:static
          top-15 left-0 w-full md:h-auto
          bg-white md:bg-transparent
          text-black md:text-white
          p-4 md:p-0
          z-50"
        >
          {links.map((link, index) => (
            <li key={index}>
              <a className=" w-full block" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
