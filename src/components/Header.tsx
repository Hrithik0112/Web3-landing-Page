"use client";
import { appLinks } from "@/utils/constant";
import Button from "./Button";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const links = ["Home", "Marketplace", "Blog", "Road Map"];

export default function Header() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check if the screen size is more than sm
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)"); // "sm" breakpoint in Tailwind is 640px
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Block scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Transformations for shrinking header
  const width = useTransform(scrollY, [0, 100], ["100%", isLargeScreen ? "70%" : "100%"]);
  const marginX = useTransform(scrollY, [0, 100], ["0px", isLargeScreen ? "auto" : "0px"]);
  const top = useTransform(scrollY, [0, 100], ["0px", "30px" ]);

  // Menu animation variants
  const menuVariants = {
    hidden: { y: "-10%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "50%", opacity: 0 },
  };

  return (
    <motion.header
      style={{
        width,
        marginLeft: marginX,
        marginRight: marginX,
        top,
      }}
      className="sticky top-0 z-10 border px-4 border-white/10 rounded-full w-full mt-2 py-2 min-h-16 flex flex-row flex-wrap text-white items-center justify-between gap-2 backdrop-blur"
    >
      <div className="flex flow-row flex-wrap items-center gap-0">
        {/* app name */}
        <Link href="/">
          <div className="text-4xl bg-[linear-gradient(to_right,rgb(33,150,243),rgb(218,112,214),rgb(255,255,255),rgba(255,255,255,0.706))] text-transparent bg-clip-text">
            SPACE
          </div>
        </Link>
        <div className="ml-10 lg:ml-24 hidden md:flex flex-row flex-wrap md:gap-8">
          {links.map((li, i) => (
            <a key={i} href={`#${appLinks[i]}`} className="uppercase">
              {li}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-row items-center">
        <div className="hidden lg:block">
          <Button>Connect Wallet</Button>
        </div>
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose className="size-10 text-white" /> : <FiMenu className="size-10 text-white" />}
        </div>
      </div>
      <AnimatePresence>
  {isOpen && (
    <motion.div
      className="bg-[#290c36] flex flex-col h-[85vh] backdrop-blur w-full left-0 border border-white/20 rounded-3xl justify-center items-center absolute gap-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ top: "60px", zIndex: 20 }} // Adjust 'top' to match the header height and set zIndex higher
    >
      {links.map((li, i) => (
        <a key={i} href={`#${appLinks[i]}`} className="uppercase text-3xl">
          {li}
        </a>
      ))}
      <Button className="mt-5">Connect Wallet</Button>
    </motion.div>
  )}
</AnimatePresence>
    </motion.header>
  );
}
