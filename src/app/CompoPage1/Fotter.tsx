import React from 'react'
import Image from "next/image";

const Fotter =() =>{
  return (
    <div className='w-full h-[209px] bg-[#878787] mt-32 flex justify-between '>
        <div className='mx-28'>

      <div className='flex flex-col gap-8 p-8 '>
        <h1 className='font-acme text-4xl text-center'>Contact Us</h1>
        <p>Email : hadil17@gmail.com</p>
        <p>Phone : 0666999999</p>
      </div>
      </div>
      <div>
        <h1 className='font-sahitya text-6xl p-16'>Thank you !</h1>
      </div>
      <div className='flex gap-8 mr-32'>
      <Image src="/insta.svg" alt="" width={50} height={50} className=''/>
      <Image src="/fb.svg" alt="" width={50} height={50} />
      <Image src="/linkd.svg" alt="" width={50} height={50} />
      </div>
        
    </div>
  )
}

export default Fotter
