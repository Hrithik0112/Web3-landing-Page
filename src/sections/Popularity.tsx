import Card, { CardProps } from '@/components/Card';
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RiWallet3Line } from 'react-icons/ri';

const values = [
    { value: "1.5", label: "Collections" },
    { value: "102", label: "Artworks" },
    { value: "3.2", label: "Artisits" },
];

const cards: CardProps[] = [
    {
        icon: <MdOutlineVerifiedUser size={44} color="#71dcf5" />,
        title: "Strong Security",
        description:
            "Secure transaction and record information with 2-factor authentication (2FA)",
    },
    {
        icon: <RiWallet3Line size={44} color="#948fe8" />,
        title: "Payment Options",
        description:
            "Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer",
    },
    {
        icon: <AiOutlineCheckCircle size={44} color="#ea9bfa" />,
        title: "Market Updated",
        description:
            "The most accurate and trusted source for market cap, valuation, and cryptocurrency information",
    },
];

export default function Popularity() {
    return (
        <section className="bg-white/10 drop-shadow-md rounded-3xl flex-col flex flex-wrap w-full">
            <div className="px-4 flex flex-wrap flex-row border-b-2 border-[#290c36] py-6 items-center justify-around gap-4 ">
                {values.map((it, i) => (
                    <div key={i}>
                        <span className="md:text-8xl text-6xl font-redzone ">
                            {it.value}K+
                        </span>
                        <br />
                        <span className="text-xl pt-4">{it.label}</span>
                    </div>
                ))}
            </div>
            <div className=" flex justify-center w-full">
                {cards.map((content, i) => (
                    <div
                        key={i}
                        className={`flex-1 min-w-[200px] hover:bg-white/15 duration-300 ${
                            i !== cards.length - 1 && "md:border-r-2 md:border-[#290c36]"
                        }`}
                    >
                        <Card {...content} />
                    </div>
                ))}
            </div>
        </section>
    );
}