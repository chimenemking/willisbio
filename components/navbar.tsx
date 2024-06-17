"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";
import { motion } from "framer-motion";

type NavProps = {};

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];


const Navbar: React.FC<NavProps> = ({}) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 39,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -35,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  
  const lisItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-gradient-to-r from-slate-100 to-slate-300">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex  ">
        <Link
          className="flex items-center justify-center text-sm bg-black rounded-md p-1 font-semibold"
          href={""}
        >
          <span className="text-white mr-1">Willis</span>
          <span className="flex items-center justify-center w-12 h-8 rounded bg-white text-black">
            .Tech
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href={"#"}>
          <Image
            src={"/github-logo.png"}
            alt="github"
            width={32}
            height={32}
            className="rounded-full"
          ></Image>
        </Link>
        <Link href={""}>
          <Image
            src={"/instagram-logo.jpg"}
            alt="instagram"
            width={32}
            height={32}
            className="rounded-full"
          ></Image>
        </Link>
        <Link href={""}>
          <Image
            src={"/linkedin-logo2.png"}
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          ></Image>
        </Link>
        <Link href={""}>
          <Image
            src={"/medium-logo.png"}
            alt="medium"
            width={32}
            height={32}
            className="rounded-full"
          ></Image>
        </Link>
      </div>
      <div className="md:hidden">
        {/* menu Button */}
        <button
          className="grid grid-col gap-1 w-10 h-8 z-50 relative"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left "
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-7 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={lisItemVariants} className="" key={link.title}>
                <Link href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
