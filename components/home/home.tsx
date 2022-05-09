import React from 'react'
import header from 'layout/header'
import Image from 'next/image'
const home = () => {
  return (
    //  left
    <div className="main bg-darkLight">
      <div className='flex justify-end  h-1/4'>
        <div className='mt-20 ml-2'>
          <img src="/svg/image 4 (Traced).svg" alt="jj" className='ml-20' />
          <div className='text-6xl text-white font-bold ml-40 '>
            <h3>Your Water</h3>
            <h3>Boring</h3>
            <h3>Experts</h3>
            <h3 className='mt-4 text-2xl text-white '>Water Boring in Victoria</h3></div>
          <h3 className='mt-4 rounded-xl bg-darkBlue text-center w-4/6 h-8 py-1 text-white ml-32 '>Schedule A Free Onsite Inspection</h3>
        </div>
        <Image src='/img/Group 1168.png' alt="dd" width="800px" height="500px"/>
       
      </div>
      <div className='main flex -mt-5 '>
        <div className='bg-darkBlue w-1/3'>
          <div className='ml-40'>
            <h3 className='text-white text-base leading-7'>Call Us Now!</h3>
            <div className='flex'>
              <img src="/svg/phonecall.svg" alt="mm" className='bg-darkLight w-[25px] h-[25px] rounded-full' />
              <p className='ml-3  text-white'>03 5345 2175</p>
            </div>
            <div className='flex mt-2'>
              <img src="/svg/phonecall.svg" alt="mm" className='bg-darkLight w-[25px] h-[25px] rounded-full' />
              <p className='ml-3  text-white'>03 5345 2175</p>
            </div>
          </div>
        </div>
        <div className='bg-yellow-400 w-full '>  
          <h1 className='text-black text-xl ml-5 mt-3'>We Offer Free On-Site Inspections</h1>
        <div className=' flex justify-around items-center '>
            <input type="text" name='name' placeholder='Name*' className='rounded-full w-[20%] h-10  px-5' />
            <input type="email" name='name' placeholder='Email*' className='rounded-full w-[20%] h-10  px-5' />
            <input type="number" name='phone' placeholder='Phone*' className='rounded-full w-[20%] h-10  px-5' />
            <input type="text" name='name' placeholder='Massage*' className='rounded-full w-[20%] h-10  px-5' />

        </div>
        </div>
      </div>
    </div>
  )
}

export default home