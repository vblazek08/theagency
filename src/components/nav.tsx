"use client";
import { useState } from "react";
import Container from "./container";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between py-4  text-white z-50 fixed bg-black/40 w-full h-16">
      <Container>
        <a href="">
          <h1 className="font-extrabold text-2xl">theAgency</h1>
        </a>
      </Container>

      <button onClick={toggleMenu} className="md:hidden fixed top-4 right-4">
        {isOpen ? "✕" : "☰"}
      </button>
      <div className={`mt-4 ${isOpen ? "block" : "hidden"} md:block`}>
        <div
          className="   flex flex-col md:flex-row gap-4
          fixed md:static
          top-15 left-0 w-full md:h-auto
          bg-white md:bg-transparent
          text-black md:text-white
          p-4 md:p-0
          z-50"
        >
          <a className="md:border-t-2 w-full block" href="">
            home.
          </a>
          <a className="md:border-t-2 w-full block" href="/about">
            about.
          </a>
          <a className="md:border-t-2 w-full block" href="">
            service.
          </a>
          <a className="md:border-t-2 w-full block" href="">
            projects.
          </a>
          <a className="md:border-t-2 w-full block" href="">
            testimonials.
          </a>
          <a className="md:border-t-2 w-full block" href="">
            contact.
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
