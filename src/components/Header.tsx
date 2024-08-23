import { appLinks } from "@/utils/constant";
import Button from "./Button";

const links = ["Home", "Marketplace", "Blog", "Road Map"];

export default function Header() {
    return (
        <header className="sticky w-full mt-2 py-4 px-1 min-h-16 flex text-white items-center justify-between gap-2">
            <div className="flex items-center">
                {/* app name */}
                <div className="text-4xl  bg-[linear-gradient(to_right,rgb(33,150,243),rgb(218,112,214),rgb(255,255,255),rgba(255,255,255,0.706))] text-transparent bg-clip-text ">
                    SPACE
                </div>
                <div className="ml-24  hidden lg:flex flex-row flex-wrap gap-8">
                    {links.map((li, i) => (
                        <a
                            key={i}
                            href={`#${appLinks[i]}`}
                            className={`uppercase font-medium`}
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