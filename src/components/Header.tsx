"use client"
import { appLinks } from "@/utils/constant";
import Button from "./Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";


const links = ["Home", "Marketplace", "Blog", "Road Map"];

export default function Header() {
    const { scrollY } = useScroll();
    // Transformations for shrinking header
            
    const width = useTransform(scrollY, [0, 100], ["100%", "70%"] );
    const marginX = useTransform(scrollY, [0, 100], ["0px", "auto"]);
    const top = useTransform(scrollY, [0, 100], ["0px", "30px"]);

    
    return (
        <motion.header 
        style={{
            width,
            marginLeft: marginX,
            marginRight: marginX,
            top,
        }}
        className="sticky top-0 z-10 border px-4 border-white/10 rounded-full w-full mt-2 py-2 min-h-16 flex flex-row flex-wrap text-white items-center justify-between gap-2 backdrop-blur">
            <div className="flex flow-row flex-wrap  items-center gap-0">
                {/* app name */}
                <Link href="/">
                <div className="text-4xl  bg-[linear-gradient(to_right,rgb(33,150,243),rgb(218,112,214),rgb(255,255,255),rgba(255,255,255,0.706))] text-transparent bg-clip-text ">
                    SPACE
                </div>
                </Link>
                <div className="ml-10 lg:ml-24  hidden md:flex flex-row flex-wrap md:gap-8">
                    {links.map((li, i) => (
                        <a
                            key={i}
                            href={`#${appLinks[i]}`}
                            className={`uppercase `}
                        >
                            {li}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex-row items-center ">
                <div className="hidden lg:block">
                    <Button>Connect Wallet</Button>
                </div>
            </div>
        </motion.header>
    );
}