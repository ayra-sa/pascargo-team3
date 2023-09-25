"use client"

import * as React from 'react'
import Button from './button'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {}

const Hero = (props: Props) => {
    const [isLogin, setIsLogin] = React.useState(false)

    const handleClick = () => {
        if (isLogin) {
            redirect("/order")
        } else {
            alert("login dulu oii")
        }
    }

    return (
        <section className='bg-hero bg-cover bg-no-repeat text-white min-h-screen flex place-content-center items-center'>
            <div className="container">
                <div className="flex items-center gap-x-24">
                    <div className='flex-1'>
                        <div className='w-full lg:w-[90%]'>
                            <h1 className='text-5xl'>Fast & Trusted <br /> Transportion <br /> Service</h1>
                            <p className='text-xl mt-4 mb-11'>The best service for Transportation Number 1 in Indonesia. Get wonderful quality here.</p>

                            <Button onClick={handleClick}>Book Now</Button>
                        </div>
                    </div>

                    <div className="hidden lg:flex-1">
                        <Image
                            src="/images/logo-hero.png"
                            alt='logo'
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-auto h-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero