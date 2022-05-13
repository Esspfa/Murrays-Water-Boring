import React from 'react';
import Button from 'components/common/button';
import Image from 'next/image';
import ServiceWater from 'components/common/service-water';
const About = () => {
  return (
   <div> 
  <div className="bg-darkLight w-full lg:flex">
  <div className="">
    <div className="px-4 sm:text-center justify-center">
      <h1 className="text-white font-black lg:text-5xl font-montserrat ">There For You When You Need Us</h1>
      <h1 className=" text-white text-lg">D.K. & E.M. Murray Water Boring Gallery in Victoria</h1>
      <Button classes="rounded-full bg-darkBlue  h-10 text-white">Find Out More</Button>
    </div>
  </div>
  <div className="">
    <img src="/img/Rectangle11.png" alt="s" className="w-full" />
  </div>
  </div>
  <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-darkLight">About Us</h1>
        </div>
      </div>
      <div className="flex items-center  mt-10">
      <img src="/img/about.png" alt="about" className='w-full hidden sm:block' />
        <div className="ml-10 max-w-xl">
        <img src="/img/about.png" alt="about" className='w-full sm:hidden block' />
          <h1 className="text-darkBlue font-extrabold text-3xl font-montserrat">About Us</h1>
          <p className="text-Gray text-sm font-regular">
            We began trading as D.K. & E.M. Murray and were founded by Des who has over 50 years of experience dating
            back to the 1960s. Murray&apos;s Water Boring is the longest-established family drilling business in the
            area, servicing most areas around Victoria. The company now has over 90 years of combined experience
            spanning over three generations from Des to his son, Gary, and two of his grandsons, Josh and Brad, who all
            work in the business with Gary holding a class 3 license which is the highest qualification.
          </p>
          <p className="text-Gray text-sm font-regular mt-[20px]">
            If you need water for your garden, stock, irrigation, test holes or mining and exploration drilling, we are
            the people to call. We are founders of the ‘no water, no charge’ offer, which we still offer on domestic and
            stock bores after our free site inspection of your property. We offer reliable service with competitive
            prices using the most modern drilling rigs in Victoria.
          </p>
          <Button classes="mt-4">Read more</Button>
        </div>
      </div>
      <ServiceWater
       name='Get More Information'
      paragraph='If you have questions about our boring processes or want to find out more about drilling on your property, just give us a call. A member of our team would be happy to schedule an on-site inspection.'
      text='Schedule and Inspection'
      />
</div>
  )
};

export default About;
