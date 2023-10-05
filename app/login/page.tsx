
import Link from 'next/link'
import React from 'react'

import LoginForm from './LoginForm'

export default function page() {



  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div>This is login page</div>
      <LoginForm />
      <Link href="/regiter" >Register</Link>
    </div>

  )
}
