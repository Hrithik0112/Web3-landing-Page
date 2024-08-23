import Button from '@/components/Button'
import React from 'react'

const Promotion = () => {
  return (
    <section className="relative w-full min-h-[400px] flex flex-row flex-wrap items-end justify-around gap-4">
            <img
                className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] overflow-hidden"
                src="/assets/vr-person.webp"
                alt="vr_person"
            />
            <div className="bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl p-3 md:p-0 w-full sm:h-[320px] h-full absolute bottom-0 z-[-1] shadow-lg shadow-purple-600/70"></div>
            <article className="flex flex-col flex-wrap gap-6 items-start justify-center h-[inherit] md:max-w-[40%] m-2 lg:-translate-y-10">
                <h4 className=" text-6xl">Join Us now</h4>
                <span className="text-gray-200 font-nominee">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illo
                    eaque fugiat pariatur error!
                </span>
                <Button outline>Join Tournament</Button>
            </article>
        </section>
  )
}

export default Promotion