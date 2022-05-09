import React from 'react'
import Image from 'next/image'
const cards = () => {
  return (
      <div className='mt-10'>
          <h1 className='text-center font-extrabold text-darkBlue text-3xl '>Some Of Our Services Include..</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-1  lg:mx-40 mt-5 sm:gap-5 `sm:mx-10'>
          <div>
          <Image src="/img/card1.png"width="454px" height="280px"/>
          <div className="rounded-none border shadow-lg bg-white lg:w-[310px] sm:[250px] -mt-3 contrast-200 ml-auto px-4 lg:h-[190px] sm:h-auto">
              <h1 className=' lg:font-extrabold sm:font-normal'>Some Of Our Services Include.. </h1>
              <p className='text-base text-Gray font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, omnis fuga consectetur minus suscipit, nulla porro, sit deleniti nostrum labore tempora laboriosam </p>
              <div className='mt-2 text-darkLight'>
              <a href="#">Find Out More<Image src="/svg/arrow.svg" width="20px" height="10px"/></a></div>
          </div>
          </div>
          <div>
          <Image src="/img/card1.png"width="454px" height="280px"/>
          <div className="rounded-none border shadow-lg bg-white lg:w-[310px] sm:w-[250px] -mt-3 contrast-200 ml-auto px-4 lg:h-[190px] sm:h-auto ">
              <h1 className=' lg:font-extrabold sm:font-normal'>Some Of Our Services Include.. </h1>
              <p className='text-base text-Gray font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, omnis fuga consectetur minus suscipit, nulla porro, sit deleniti nostrum labore tempora laboriosam </p>
              <div className='mt-2 text-darkLight'>
              <a href="#">More Info<Image src="/svg/arrow.svg" width="20px" height="10px"/></a></div>
          </div>
          </div>
          <div>
          <Image src="/img/card1.png"width="454px" height="280px"/>
          <div className="rounded-none border shadow-lg bg-white lg:w-[310px] sm:w-[250px] -mt-3 contrast-200 ml-auto px-4 lg:h-[190px] sm:h-auto ">
              <h1 className=' lg:font-extrabold sm:font-normal'>Some Of Our Services Include.. </h1>
              <p className='text-base text-Gray font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, omnis fuga consectetur minus suscipit, nulla porro, sit deleniti nostrum labore tempora laboriosam </p>
              <div className='mt-2 text-darkLight'>
              <a href="#">Learn More<Image src="/svg/arrow.svg" width="20px" height="10px"/></a></div>
          </div>
          </div>
      </div>
      </div>
  )
}

export default cards