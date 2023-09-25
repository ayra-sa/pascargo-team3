import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='fixed w-full bg-[#00000066]'>
            <nav className='container py-3'>
                <div className="flex justify-between items-center">
                    <Link href="#">
                        <Image 
                            src="/images/logo.png" 
                            alt='logo' 
                            width={0} 
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto' 
                        />
                    </Link>

                    <Button variant='secondary' size='sm'>Login</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header