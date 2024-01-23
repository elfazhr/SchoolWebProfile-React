import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import LinkComp from "../layouts/LinkComp";
import SpanComp from "../layouts/SpanComp";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
   document.documentElement.classList.toggle("dark")
  }
  return (
    <div className={`p-4 px-8 flex flex-row justify-between items-center fixed w-full z-[9999] ${isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)]' : 'bg-transparent '}  dark:bg-[#0f172a]`}>
      <div className=" cursor-pointer">
        <img
          src="public/img/logo_smk.png"
          alt="SMKLearningX"
          className="h-14 md:h-20"
        />
      </div>
      <nav className="hidden md:flex gap-16 ">
        <LinkComp to="beranda" text="[#21594E]" teks="Beranda" />
        <LinkComp to="tentang" text="[#21594E]" teks="Tentang" />
        <LinkComp to="fasilitas" text="[#21594E]" teks="Fasilitas" />
        <LinkComp to="aktivitas" text="[#21594E]" teks="Aktivitas" />
        <li className="flex items-center">
          <div className="flex">
            <span className="mr-2 text-sm text-slate-500">Light</span>
            <input type="checkbox" className="hidden" />
            <label htmlFor="dark-toggle">
              <div
                className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1"
                onClick={toggleTheme}
              >
                <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out dark:translate-x-3"></div>
              </div>
            </label>
            <span className="ml-2 text-sm text-slate-500">Dark</span>
          </div>
        </li>
      </nav>
      <div className="md:hidden flex items-center cursor-pointer hover:text-[#21594E] dark:text-white  ">
        {open ? (
          <AiOutlineClose size={25} onClick={handleClick} />
        ) : (
          <AiOutlineMenuUnfold size={25} onClick={handleClick} />
        )}
      </div>
      <div
        className={`${open ? "translate-x-0" : "hidden"}
      absolute right-8 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg flex flex-col p-8 gap-4
      md:hidden dark:bg-[#0f172a] dark:shadow-slate-500`}
      >
        <LinkComp
          to="beranda"
          text="[#21594E]"
          onClick={closeMenu}
          teks="Beranda"
        >
          <SpanComp />
        </LinkComp>
        <LinkComp
          to="tentang"
          text="[#21594E]"
          onClick={closeMenu}
          teks="Tentang"
        >
          <SpanComp />
        </LinkComp>
        <LinkComp
          to="fasilitas"
          text="[#21594E]"
          onClick={closeMenu}
          teks="Fasilitas"
        >
          <SpanComp />
        </LinkComp>
        <LinkComp
          to="aktivitas"
          text="[#21594E]"
          onClick={closeMenu}
          teks="Aktivitas"
        >
          <SpanComp />
        </LinkComp>
        <li className="flex items-center">
          <div className="flex">
            <span className="mr-2 text-sm text-slate-500">Light</span>
            <input type="checkbox" className="hidden" />
            <label htmlFor="dark-toggle">
              <div
                className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1"
                onClick={toggleTheme}
              >
                <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out dark:translate-x-3" onClick={closeMenu}></div>
              </div>
            </label>
            <span className="ml-2 text-sm text-slate-500">Dark</span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
