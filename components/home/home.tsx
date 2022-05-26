import React from 'react';
import Image from 'next/image';
import Drilling from './drilling';
import Services from './services';
import Button from 'components/common/button';
import NameImage from 'components/common/name-image';
import ServiceWater from 'components/common/service-water';
import AboutPart from 'components/common/about-part';
import HomeForm from './form';

const Home = () => {
  return (
    <>
      <div className="main bg-lightBlue">
        <div className="flex md:flex-nowrap flex-wrap justify-between ml-3">
          <div className="min-w-xs md:ml-auto mx-auto  my-2 md:mt-10 mb-8">
            <div className="-ml-12 lg:hidden block">
              <Image src="/svg/image 4 (Traced).svg" alt="tag" width={100} height={64} />
            </div>
            <div className="-ml-20 lg:block hidden">
              <Image src="/svg/image 4 (Traced).svg" alt="tag" width={168} height={81.2} />
            </div>
            <div className="lg:text-6xl md:text-xl text-white font-bold">
              <h3>
                Your Water <br className="lg:block hidden" />
                Boring <br />
                Experts
              </h3>
              <h3 className="mt-4 md:text-xl text-base text-white font-normal">Water Boring in Victoria</h3>
            </div>
            <Button classes="bg-darkBlue">Schedule A Free Onsite Inspection</Button>
          </div>
          <Image src="/img/Group1168.png" alt="truck" width={1045} height={500} />
        </div>
        <div className="-mt-7 flex sm:flex-nowrap flex-wrap">
          <div className="items-center bg-darkBlue w-full sm:w-1/4 py-5 sm:py-0">
            <div className="flex flex-col h-full justify-center sm:items-end items-center mr-8 z-10">
              <div>
                <h3 className="text-white text-lg leading-7 font-medium mb-2">Call Us Now!</h3>
                <NameImage name="03 5345 2175" />
                <NameImage name="0428 518 2155" classes="mt-2" />
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 w-full pb-4">
            <div className="sm:mx-10 mt-10 sm:mb-0 mx-3">
              <h1 className="text-black font-bold font-Montserrat">We Offer Free On-Site Inspections</h1>
              <div className="flex flex-wrap sm:justify-start justify-center items-center">
                <HomeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutPart />
      <Drilling />
      <Services />
      <ServiceWater
        name="Find Water On Your Property"
        paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
        text="Get Started"
      />
    </>
  );
};

export default Home;
