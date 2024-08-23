import Button from '@/components/Button'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center space-x-8 mt-10   ">
            <div className=" md:w-1/2 flex-col space-y-8">
                <h1 className="md:text-8xl text-5xl">
                    Discover Collect Sell Digital NFT.
                </h1>
                <span className="text-gray-400 leading-8 text-xl">
                    Generate 10,000+ NDT Collection Only by uploading the layers, and get
                    ready to sell your collection.
                </span>
                <div className="flex-row mt-5 space-x-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 flex-col space-y-4 items-center mt-5 md:mt-0">
                <img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
  )
}

export default Hero