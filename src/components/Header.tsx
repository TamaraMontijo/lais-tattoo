"use client";

import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export function Header() {
  let Links = [
    { name: "INÍCIO", link: "https://www.google.com.br/" },
    { name: "SOBRE", link: "https://www.google.com.br/" },
    { name: "DETALHES", link: "https://www.google.com.br/" },
    { name: "FOTOS", link: "https://br.pinterest.com/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className="bg-white p-5 flex font-sans w-full h-32 px-12 md:px-20 max-md:fixed max-md:z-50 max-md:left-0">
      <nav className="container mx-auto max flex flex-row justify-between items-center">
        <div className="logo hover:scale-110 cursor-pointer">
          <Image
            src="../../logo.svg"
            alt="Logo Lais Tattoo"
            width={100}
            height={100}
          />
        </div>
        <div className="links max-md:hidden md:flex flex-row gap-10 font-montserrat font-light">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              className="text-[#333333] hover:scale-105 hover:font-normal tracking-wider uppercase"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="max-md:hidden social">
          <a href="https://www.instagram.com/laiss.tattoo/" target="_blank">
            <Image
              className="hover:scale-110 cursor-pointer"
              src="../../insta.svg"
              alt="logo insta"
              width={25}
              height={100}
            />
          </a>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <div className="text-3xl">
            <h3 className={open ? `hidden` : ``}>
              <BiMenu />
            </h3>
            <h3 className={open ? `` : `hidden`}>
              <AiOutlineClose />
            </h3>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 p-40 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full h-screen md:w-auto md:pl-0 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-800px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  target="_blank"
                  className="text-gray-800 hover:text-gray-400 duration-500 uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
