import Link from "next/link";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from "next/cache";
import Button from "@/components/button";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Mission from "@/components/mission";
import Service from "@/components/service";

export default async function Home() {
  const userValue = cookies().get('user');
  let user;

  async function handleSignOut(formData: FormData) {
    'use server'
    cookies().delete("user");
    revalidatePath("/");
    redirect("/");
  }

  if (userValue?.value) {
    user = JSON.parse(userValue.value);
  }


  // if (!user) {
  //   return (

  //     <main className="flex flex-col justify-center items-center min-h-screen gap-3">
  //       hello you are not login
  //       <div className="flex gap-3">
  //         <Link className="p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black" href="/login">Login</Link>
  //         <Link className="p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black" href="/register">Register</Link>
  //       </div>

  //     </main>
  //   )
  // } else {

  // }
  return (
    // <main className="flex flex-col justify-center items-center min-h-screen gap-3">
    //   Hi {user.username}
    //   <form className="flex gap-3" action={handleSignOut}>
    //     <button className="p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black">Sign Out</button>
    //   </form>

    // </main>
    <>
      <Hero />
      <Feature />
      <Mission />
      <Service />
    </>
  )

}
