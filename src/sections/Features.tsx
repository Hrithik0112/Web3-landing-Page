import { CardContainer } from "@/components/3D-card";
import Title from "@/components/Title";
import { Titan_One } from "next/font/google";
import React from "react";
const cards = [
  {
    id: 1,
    title: "Fueling the Metaverse",
    desc: "The Metaverse is the next generation of the internet. As of its earliest explorers, You will help fuel its expansion",
  },
  {
    id: 2,
    title: "Initial Metaverse Offering",
    desc: "The Metaverse is the next generation of the internet. As of its earliest explorers, You will help fuel its expansion",
  },
  {
    id: 3,
    title: "Incubation",
    desc: "The Metaverse is the next generation of the internet. As of its earliest explorers, You will help fuel its expansion",
  },
];
const Features = () => {
  return (
    <section className="w-full flex flex-col flex-wrap center gap-4">
      <Title heading="Key Features" subHeading="Access The Future" className="text-center" />
      <div className="">
        <CardContainer className="flex flex-row flex-wrap w-full justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-white/10 hover:bg-gradient-to-tl hover:from-white/10  transition-colors flex flex-col flex-wrap rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
            >
              <img className="w-16 h-w-16" src={`/assets/${card.id}.png`} alt={card.title} />
              <h4 className="text-2xl">{card.title}</h4>
              <span className="text-gray-500/70 font-nominee">{card.desc}</span>
            </div>
          ))}
        </CardContainer>
      </div>
    </section>
  );
};

export default Features;
