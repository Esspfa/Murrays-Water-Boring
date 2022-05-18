import React from 'react';
import Image from 'next/image';
import DomesTic from './domestic';
import ServiceWater from 'components/common/service-water';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';

const Services = () => {
  return (
    <>
      <Header
        heading="There For You When You Need Us"
        paragraph="D.K. & E.M. Murray Water Boring Gallery in Victoria"
        buttonText="For Your Free Onsite Inspection "
        src="/img/Rectangle3 (1).png"
      />
      <BreadCrumb />
      <DomesTic
        name="Domestic and Stock Bores"
        paragraph="Get access to groundwater on your property. We offer quality domestic boring services to help you get the water you need."
        images={['/img/Rectangle3445.png', '/img/Rectangle3446.png']}
      />
      <div className="relative md:h-44rem h-55rem xs:h-34rem">
        <div className="absolute w-full md:h-44rem h-55rem xs:h-34rem -z-10">
          <Image src="/img/TheDrillingProcess.png" alt="TheDrillingProcess" layout="fill" />
        </div>
        <div className="top-0 z-10 md:h-44rem h-55rem xs:h-34rem pt-10">
          <DomesTic
            name="Large Diameter Irrigation Holes"
            paragraph={`Looking to provide your farm or property with an ample amount of groundwater? We offer large diameter
            irrigation hole drilling to give you access to what you need.`}
            images={['/img/Rectangle3445(2).png', '/img/Rectangle3446(2).png']}
            nameClasses="!text-white"
            paragraphClasses="!text-white"
          />
        </div>
      </div>
      <DomesTic
        name="Rotary Mud Drilling"
        paragraph="We offer a full range of mud drilling services to better assist our clientele. If you have mud drilling needs, look to our experts to get you sorted out."
        images={['/img/Rectangle3445(3).png', '/img/export-drilling.png']}
      />
      {/* <div className="drilling flex justify-center items-center ">
        <div>
          <img src="/img/Rectangle3445(3).png" alt="Rectangle3445(3)" width="100%" />
        </div>
        <div className="">
          <h1 className="text-white font-montserrat font-extrabold ">Exploration and Mining Drilling</h1>
          <p className="text-Gray font">
            If you need a reliable mineral exploration boring service come talk to our experts. We have decades of
            experience with mining drilling and boring.
          </p>
        </div>
      </div> */}
      <div className="relative md:h-44rem h-55rem xs:h-34rem">
        <div className="absolute w-full md:h-44rem h-55rem xs:h-34rem -z-10">
          <Image src="/img/TheDrillingProcess.png" alt="TheDrillingProcess" layout="fill" />
        </div>
        <div className="top-0 z-10 md:h-44rem h-55rem xs:h-34rem pt-10">
          <div className="flex xs:flex-row flex-col-reverse xs:flex-nowrap  justify-center items-center h-full max-w-7xl mx-auto">
            <Image src="/img/export-drilling.png" alt="image-1" width={696} height={450} />
            <div className="xs:ml-8 mx-2">
              <h1 className="font-montserrat font-semibold text-white text-4xl">Exploration and Mining Drilling</h1>
              <p className="text-white my-8 max-w-sm">
                If you need a reliable mineral exploration boring service come talk to our experts. We have decades of
                experience with mining drilling and boring.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <DomesTic
            name="Additional Services"
            paragraph="Provide an angle drilling service."
            images={['/img/Rectangle3445a.png', '/img/Rectangle3446d.png', '/img/Rectangle3447s.png']}
          />
        </div>
      </div>
      <ServiceWater
        name="Get More Information"
        paragraph="If you have questions about our boring processes or want to find out more about drilling on your property, just give us a call. A member of our team would be happy to schedule an on-site inspection."
        text="Schedule and Inspection"
      />
    </>
  );
};

export default Services;
