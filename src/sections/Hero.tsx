"use client"
import Button from '@/components/Button'
import React from 'react'
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center space-x-8">
            <div className=" md:w-1/2 flex-col flex flex-wrap gap-8">
                <h1 className="lg:text-8xl text-5xl">
                    Discover Collect Sell Digital NFT.
                </h1>
                <span className="text-gray-400 leading-8 text-xl font-nominee">
                    Generate 10,000+ NDT Collection Only by uploading the layers, and get
                    ready to sell your collection.
                </span>
                <div className="flex-row flex flex-wrap mt-5 gap-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 flex flex-col flex-wrap gap-4 items-center justify-center md:mt-0 mt-5">
                <motion.img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                    animate={{
                        translateY : ["-60px", "30px"],
                        rotateY : 30,
                    }}
                    transition={{
                        duration : 2,
                        repeat :Infinity,
                        repeatType :"mirror",
                        ease:"linear"
                    }}
                />
            </div>
        </section>
  )
}

export default Hero