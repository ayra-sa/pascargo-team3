import React from 'react'
import ImageItem from './image-item'

type Props = {}

const data = [
    {
        title: 'superfast delivery',
        image: '/icons/superfast-delivery.svg',
    },
    {
        title: 'excellent customer service',
        image: '/icons/excellent-cs.svg',
    },
    {
        title: 'wide delivery zones',
        image: '/icons/route.svg',
    },
]

const Feature = (props: Props) => {
  return (
    <section>
        <div className="container">
            <div className="flex flex-col items-center py-10 gap-y-20">
                {data.map((d, i) => (
                    <div key={i} className='flex items-center flex-col gap-y-3'>
                        <ImageItem src={d.image} alt={d.title} className='w-auto' />
                        <h2 className='text-base uppercase text-white'>{d.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Feature