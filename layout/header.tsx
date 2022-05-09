 import React from 'react'

const header = () => {
  return (
    <div className=' bg-darkBlue sm:w-full lg:w-full '>
      <ul className='flex space-x-3 mt-2  sm:ml-auto lg:ml-40 ml-8'>
        <li>
          <img src="/svg/Group 1162.svg" alt="ll" className='h-6 my-3' />
        </li>
        <li className='text-white lg:text-xl my-3 sm:text-sm sm:font-extrabold '>
          No Water - No Charge *Conditions Apply on Stock & Domestic only.
        </li>
        <li>
          <img src="/svg/Group 1165.svg" alt="d" className=' my-3 sm:ml-auto lg:ml-40'/>
        </li>
        <li>
          <img src="/svg/Group 1166.svg" alt="aa" className='my-3'/>
        </li>
      </ul>
      <nav className='bg-white  border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1 ">
        <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 lg:space-x-32 md:mt-0 md:text-sm md:font-medium '>
        <li className='lg:mx-14 lg:py-5 sm:mx-10'>Home</li>
        <li className='lg:mx-14 lg:py-5 sm:mx-10'>Service</li>
        <li className='lg:mx-14 lg:py-5 sm:mx-10'>About us</li>
        <li className='mx-14'><img src="/svg/image 2 (1).svg" alt="cc" className='h-20 -mt-4' /></li>
        <li className='lg:mx-14 lg:py-5 sm:mx-10'>FAQS</li>
        <li className='lg:mx-14 lg:py-5 sm:mx-10'>Contact us</li>
        </ul>
        </div>
        </div>
        </nav>
    </div>
    
  )
}

export default header