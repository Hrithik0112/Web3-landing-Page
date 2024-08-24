import { appLinks } from "@/utils/constant";
import Button from "./Button";
import Link from "next/link";

const links = ["Home", "Marketplace", "Blog", "Road Map"];

export default function Header() {
    return (
        <header className="sticky top-10 z-10 border px-4 border-white/10 rounded-full w-[70%] mx-auto mt-2 py-2 min-h-16 flex flex-row flex-wrap text-white items-center justify-between gap-2 backdrop-blur">
            <div className="flex flow-row flex-wrap items-center gap-2">
                {/* app name */}
                <Link href="/">
                <div className="text-4xl  bg-[linear-gradient(to_right,rgb(33,150,243),rgb(218,112,214),rgb(255,255,255),rgba(255,255,255,0.706))] text-transparent bg-clip-text ">
                    SPACE
                </div>
                </Link>
                <div className="ml-24  hidden lg:flex flex-row flex-wrap gap-8">
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
                <div className="hidden sm:block">
                    <Button>Connect Wallet</Button>
                </div>
            </div>
        </header>
    );
}