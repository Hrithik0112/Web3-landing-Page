import Button from '@/components/Button'
import Title from '@/components/Title'
import React from 'react'

const Collection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start flex flex-col flex-wrap gap-4 items-start pr-4">
                <Title heading="Collection" subHeading="Bored apes NFT Items" />
                <span className="text-gray-500/80 font-nominee">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
                    ad accusamus aut debitis consectetur sequi magnam? Eum, fuga?
                </span>
                <Button outline>View on Opensea</Button>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
                {[1, 2, 3, 1, 2].map((n, i) => (
                    <div className="min-w-[200px] rounded-md" key={i}>
                        <img
                            className="object-cover"
                            src={`/assets/av-${n}.png`}
                            alt="avatar"
                        />
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Collection