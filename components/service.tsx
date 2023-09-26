import React from 'react'
import Card from './card'

type Props = {}

const data = [
  {
    image: '/images/cargo-transport.png',
    title: 'CARGO TRANSPORT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus laboriosam nobis. Error amet quod ipsa voluptatibus voluptates? Molestiae nulla at alias nesciunt debitis inventore, totam aut doloremque explicabo architecto?',
    link: '/'
  },
  {
    image: '/images/warehousing.png',
    title: 'WAREHOUSING',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus laboriosam nobis. Error amet quod ipsa voluptatibus voluptates? Molestiae nulla at alias nesciunt debitis inventore, totam aut doloremque explicabo architecto?',
    link: '/'
  },
  {
    image: '/images/shipping-cargo.png',
    title: 'SHIPPING CARGO ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus laboriosam nobis. Error amet quod ipsa voluptatibus voluptates? Molestiae nulla at alias nesciunt debitis inventore, totam aut doloremque explicabo architecto?',
    link: '/'
  },
  {
    image: '/images/air-freight.png',
    title: 'AIR FREIGHT',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus laboriosam nobis. Error amet quod ipsa voluptatibus voluptates? Molestiae nulla at alias nesciunt debitis inventore, totam aut doloremque explicabo architecto?',
    link: '/'
  },
  {
    image: '/images/cargo-service.png',
    title: 'CARGO SERVICE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus laboriosam nobis. Error amet quod ipsa voluptatibus voluptates? Molestiae nulla at alias nesciunt debitis inventore, totam aut doloremque explicabo architecto?',
    link: '/'
  },
]

const Service = (props: Props) => {
  return (
    <section className='py-28'>
      <div className="container">
        <h1 className="text-4xl text-center text-white">OUR SERVICE</h1>

        <div className="flex flex-wrap flex-col lg:flex-row justify-center mt-20 gap-x-6 gap-y-10 lg:gap-y-20">
          {data.map((dt, i) => (
            <Card
              key={i}
              image={dt.image}
              title={dt.title}
              description={dt.description}
              link={dt.link}
              className='w-full lg:w-[32%]'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service