import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default function LoginForm() {
    async function create(formData: FormData) {
        'use server'
        
        // mutate data
        const user = {
            username: formData.get("username")
        }
        // save to cache
        cookies().set("user", JSON.stringify(user));
        revalidatePath("/");
        redirect("/");
    }

  return (
    <form className='flex flex-col my-20 gap-10' action={create}>
            <div className='flex gap-2'>
                <label>username</label>
                <input className='border' type='text' required name='username' />
            </div>
            <button type='submit' className='p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black'>Login</button>
    </form>
  )
}
