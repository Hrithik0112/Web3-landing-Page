import { appLinks } from '@/utils/constant';
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaBitcoin, FaGithub } from 'react-icons/fa';
import { RiDiscordFill } from 'react-icons/ri';



const socialIcons = [AiOutlineTwitter, FaBitcoin, RiDiscordFill, FaGithub];

const links = [
    ["MarketPlace", "About us", "Our team", "Team Details", "Error 404", "Cart Page"],
    ["Company", "Wallet", "Create Page", "Login Page", "Registration", "Checkout"],
    ["Services", "Contact Us", "Shop page", "Shop Details", "Collectors"],
];

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-row flex-wrap gap-4 justify-between">
            {/* Left Section */}
            <div className="flex-col flex flex-wrap gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">Space.</h3>
                    <div className="flex flex-row flex-wrap gap-4">
                        {socialIcons.map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="hover:text-white/50 text-white"
                            >
                                <Icon size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-gray-500 font-nominee text-sm">
                    All rights reserved &#169; <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="flex flex-row flex-wrap md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="flex flex-col flex-wrap gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i]}`}
                                        className={`font-nominee text-gray-500 text-xs hover:text-white duration-300`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
  )
}

export default Footer