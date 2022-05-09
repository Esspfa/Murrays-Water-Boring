import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className='flex mx-40 mt-10'>
        <Image  src="/img/about.png" alt="about" width="696px" height="500px" />
        
        <div className='ml-10 w-[50%]'>
            <h1 className='text-darkBlue font-extrabold text-2xl'>About Us</h1>
            <p className='text-Gray text-xs mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Laudantium quasi aliquid aperiam a quis doloremque voluptas, 
                 illum temporibus error quam cumque distinctio quisquam eos, 
                 hic explicabo quaerat dolore. Sapiente, nihil?
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil illum maxime reprehenderit eligendi voluptates corporis voluptatem reiciendis, repellat nobis porro facere deserunt consequatur.
                  Accusamus vel similique facilis atque explicabo ratione
                 </p>
                 <p className='text-Gray text-xs mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nam minima autem aliquid obcaecati reiciendis voluptatum rerum delectus, animi, ipsa pariatur nemo error molestias laudantium provident fugit praesentium maxime dignissimos.</p>
                 <button className='bg-darkLight rounded-full w-[20%] h-[35px] text-white mt-4'>Read More</button>
        </div>
    </div>
  )
}

export default header