import React from 'react';
import Image from 'next/image';
import BreadCrumb from 'components/common/bread-crumb';
import Header from 'components/common/header';
import NameImage from 'components/common/name-image';
import ServiceWater from 'components/common/service-water';
import Button from 'components/common/button';
import ContactForm from './contact-form';

const contact = () => {
  return (
    <>
      <Header
        heading="EXPERTISE YOU CAN TRUST"
        paragraph="Contact D.K. & E.M. Murray Water Boring in Victoria"
        buttonText="Contact Us Today"
        src="/img/Rectangle31(2).png"
      />
      <BreadCrumb />
      <div className="max-w-7xl w-full mx-auto mt-10">
        <div className="flex flex-col text-center items-center">
          <h1 className="font-montserrat font-extrabold text-darkBlue text-4xl">Professional Drilling Services</h1>
          <p className="my-5 text-Gray font-normal text-xs max-w-md">
            We have decades of experience with drilling water bores. Provide your property with the irrigation it needs
            by giving us a call today.
          </p>
        </div>
        <div className="mx-5">
          <div className="grid gap-2 sm:grid-cols-5 contact-box-shadow border border-borderColor rounded-md p-5 justify-center items-center">
            <div className="sm:col-span-2">
              <h1 className="font-montserrat font-bold ">Find Water</h1>
              <p className="text-Gray font-normal text-xs mt-2 max-w-xs">
                We have decades of experience with drilling water bores. Provide your property with the irrigation it
                needs by giving us a call today.
              </p>
            </div>
            <div className="leading-5 justify-center sm:col-span-2">
              <h1 className="font-montserrat font-bold">Location</h1>
              <div className="mt-3">
                <NameImage
                  name="11 Hyde Park Rd, Creswick Victoria, 3363"
                  image="/svg/Group1214.svg"
                  nameClasses="text-black"
                />
                <NameImage
                  name=" Mon - Sun 6:00 am - 9:00 pm"
                  image="/svg/time.svg"
                  nameClasses="text-black"
                  classes="mt-2"
                />
              </div>
            </div>
            <div className="leading-5 justify-center ">
              <h1 className="font-montserrat font-bold">Contact</h1>
              <div className="mt-3">
                <NameImage nameClasses="text-black" />
                <NameImage name="0428 518 159" nameClasses="text-black" classes="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="mt-4 h-44rem">
          <div className="absolute w-full h-44rem -z-10">
            <Image src="/img/map.png" alt="map" layout="fill" />
          </div>
          <div className="h-full sm:block flex justify-center items-end">
            <div className="px-5 justify-center items-center bg-white border border-b-lightBlue border-b-4 w-60 xs:w-80 sm:ml-10 sm:mt-10">
              <h1 className="text-center font-bold text-2xl mb-4 mt-5">
                Contact Us <br />
                For A Free Quote
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </>
      <div className="mt-4">
        <ServiceWater
          name="Find Water On Your Property"
          paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
          text="Call Us Today"
        />
      </div>
    </>
  );
};

export default contact;
