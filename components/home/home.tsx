import React from 'react';
import Image from 'next/image';
import Drilling from './drilling';
import Services from './services';
import Button from 'components/common/button';
import PhoneNumber from 'components/common/phone-number';
import InputType from 'components/common/inputtype';
import ServiceWater from 'components/common/service-water';
import AboutPart from 'components/common/about-part';
const inputtype = [
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
        <div className="flex flex-wrap justify-between">
          <div className="ml-32 mt-10">
            <img src="/svg/image 4 (Traced).svg" alt="jj" className="-ml-20" />
            <div className="text-6xl  text-white font-bold ">
              <h3>
                Your Water <br />
                Boring <br />
                Experts
              </h3>
              <h3 className="mt-4 text-2xl text-white ">Water Boring in Victoria</h3>
            </div>
            <Button classes="bg-darkBlue">Schedule A Free Onsite Inspection</Button>
          </div>
          <Image src="/img/Group 1168.png" alt="truck" width="800px" height="500px" />
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
                <PhoneNumber 
                name='03 5345 2175'
                src1='/svg/phonecall.svg'
                alt1='phonecall'
                />
                <PhoneNumber 
                name='0428 518 2155'
                src1='/svg/phonecall.svg'
                alt1='phonecall'
                />
              </div>
            </div>
          </div>
          <div className="bg-yellow-400 w-full -ml-8">
            <div className="mx-10">
              <div className="mt-4">
                <h1 className="text-black font-bold font-Montserrat ml-5">We Offer Free On-Site Inspections</h1>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                {inputtype.map((data: any, index) => (
                  <div key={index}>
                    <InputType item={data} />
                  </div>
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
