import React from 'react';
import Button from 'components/common/button';
import Image from 'next/image';
import DomesTic from './domestic';
import ServiceWater from 'components/common/service-water';
const Services = () => {
  return (
    <div>
      <div className="bg-darkLight w-full lg:flex">
        <div className="">
          <div className="px-4 sm:text-center justify-center">
            <h1 className="text-white font-black lg:text-5xl font-montserrat ">There For You When You Need Us</h1>
            <h1 className=" text-white text-lg">D.K. & E.M. Murray Water Boring Gallery in Victoria</h1>
            <Button classes="rounded-full bg-darkBlue  h-10 text-white">For Your Free Onsite Inspection </Button>
          </div>
        </div>
        <div className="">
          <img src="/img/Rectangle3 (1).png" alt="s" className="w-full" />
        </div>
      </div>
      <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-darkLight">Services</h1>
        </div>
      </div>
      <div>
        <DomesTic
          name="Domestic and Stock Bores"
          paragraph="Get access to groundwater on your property. We offer quality domestic boring services to help you get the water you need."
          alt1="Rectangle3445"
          image1="/img/Rectangle3445.png"
          alt2="Rectangle3446"
          image2="/img/Rectangle3446.png"
        />
      </div>
      <div className="relative">
        <img src="/img/TheDrillingProcess.png" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-center font-montserrat font-extrabold">Large Diameter Irrigation Holes</h1>
          <p className="text-white font-normal ">
            Looking to provide your farm or property with an ample amount of groundwater? We offer large diameter
            irrigation hole drilling to give you access to what you need.
          </p>
          <DomesTic
            image1="/img/Rectangle3445(2).png"
            alt1="Rectangle3445(2)"
            image2="/img/Rectangle3446(2).png"
            alt2="Rectangle3446(2)"
          />
        </div>
      </div>
      <DomesTic
        name="Rotary Mud Drilling"
        paragraph="We offer a full range of mud drilling services to better assist our clientele. If you have mud drilling needs, look to our experts to get you sorted out."
        alt1="Rectangle3445(3)"
        image1="/img/Rectangle3445(3).png"
        alt2="Rectangle3445(3)"
        image2="/img/Rectangle3445(3).png"
      />
        <div className="drilling flex justify-center items-center ">
          <div>
            <img src="/img/Rectangle3445(3).png" alt="Rectangle3445(3)" width="100%"/>
          </div>
          <div className=''>
            <h1 className="text-white font-montserrat font-extrabold ">Exploration and Mining Drilling</h1>
            <p className="text-Gray font">
              If you need a reliable mineral exploration boring service come talk to our experts. We have decades of
              experience with mining drilling and boring.
            </p>
          </div>
        </div>
        <div>
          <div>
            <DomesTic 
            name='Additional Services'
            paragraph='Provide an angle drilling service.'
            image1='/img/Rectangle3445a.png'
            alt1='Rectangle3445a'
            image2='/img/Rectangle3446d.png'
            alt2='Rectangle3446d'
            image3='/img/Rectangle3447s.png'
            alt3='Rectangle3447s'
            />
          </div>
        </div>
        <ServiceWater
        name='Get More Information'
        paragraph='If you have questions about our boring processes or want to find out more about drilling on your property, just give us a call. A member of our team would be happy to schedule an on-site inspection.'
        text='Schedule and Inspection'
        />
        
    </div>
  );
};

export default Services;
