import React from 'react';
import Button from 'components/common/button';
import Image from 'next/image';
import ServiceWater from 'components/common/service-water';
import AboutPart from 'components/common/about-part';
import BreadCrumb from 'components/common/bread-crumb';
const About = () => {
  return (
    <>
      <div className="bg-lightBlue w-full lg:flex">
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
      <BreadCrumb />
      <AboutPart />
      <ServiceWater
        name="Get More Information"
        paragraph="If you have questions about our boring processes or want to find out more about drilling on your property, just give us a call. A member of our team would be happy to schedule an on-site inspection."
        text="Schedule and Inspection"
      />
    </>
  );
};

export default About;
