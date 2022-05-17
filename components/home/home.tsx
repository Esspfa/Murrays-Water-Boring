import React from 'react';
import Image from 'next/image';
import Drilling from './drilling';
import Services from './services';
import Button from 'components/common/button';
import NameImage from 'components/common/name-image';
import InputType from 'components/common/inputtype';
import ServiceWater from 'components/common/service-water';
import AboutPart from 'components/common/about-part';
const inputType = [
  {
    type: 'text',
    name: 'name',
    placeholder: '*name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: '*Email',
  },
  {
    type: 'cell',
    name: 'phone',
    placeholder: '*+92',
  },
  {
    type: 'text',
    name: 'commit',
    placeholder: '*Comment',
  },
];
const home = () => {
  return (
    <>
      <div className="main bg-lightBlue">
        <div className="flex md:flex-nowrap flex-wrap justify-between">
          <div className="mt-10 md:ml-20 ml-10">
            <div className="-ml-12 md:hidden block">
              <Image src="/svg/image 4 (Traced).svg" alt="tag" width={100} height={64} />
            </div>
            <div className="-ml-20 md:block hidden">
              <Image src="/svg/image 4 (Traced).svg" alt="tag" width={168} height={81.2} />
            </div>
            <div className="md:text-6xl text-3xl text-white font-bold ">
              <h3>
                Your Water <br className="md:block hidden" />
                Boring <br />
                Experts
              </h3>
              <h3 className="mt-4 md:text-xl text-base text-white font-normal">Water Boring in Victoria</h3>
            </div>
            <Button classes="bg-darkBlue">Schedule A Free Onsite Inspection</Button>
          </div>
          <div className="md:h-[30rem] h-[22rem] md:w-2/4 w-full relative md:mt-0 mt-5">
            <Image src="/img/Group1168.png" alt="truck" layout="fill" />
          </div>
        </div>
        <div className="main sm:-mt-7 h-32 flex sm:flex-nowrap flex-wrap">
          <div
            className="items-center w-96 z-10"
            style={{
              background: `url(/img/blue-ribbon.png)`,
              backgroundSize: '100% 100%, cover',
              backgroundRepeat: 'no-repeat',
              // backgroundOrigin: 'content-box',
            }}
          >
            <div className="flex flex-col h-full justify-center items-end mr-8">
              <div>
                <h3 className="text-white text-lg leading-7 font-medium mb-2">Call Us Now!</h3>
                <NameImage name="03 5345 2175" />
                <NameImage name="0428 518 2155" classes="mt-2" />
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 w-full -ml-8">
            <div className="mx-10">
              <div className="mt-4">
                <h1 className="text-black font-bold font-Montserrat ml-5">We Offer Free On-Site Inspections</h1>
              </div>
              <div className="flex space-x-3 mt-1">
                {inputType.map((data: any, index) => (
                  <InputType item={data} key={index} />
                ))}
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutPart />
      <Drilling />
      <ServiceWater
        name="Find Water On Your Property"
        paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
        text="Get Started"
      />
      <Services />
    </>
  );
};

export default home;
