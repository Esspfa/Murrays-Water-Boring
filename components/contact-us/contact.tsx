import React from 'react';
import Image from 'next/image';
import Button from 'components/common/button';
const contact = () => {
  return (
    <div>
      <div className="bg-lightBlue w-full lg:flex">
        <div className="">
          <div className="px-4 sm:text-center justify-center">
            <h1 className="text-white font-black lg:text-5xl font-montserrat ">EXPERTISE YOU CAN TRUST</h1>
            <h1 className=" text-white text-lg">Contact D.K. & E.M. Murray Water Boring in Victoria</h1>
            <Button classes="rounded-full bg-darkBlue  h-10 text-white">Contact Us Today</Button>
          </div>
        </div>
        <div className="">
          <img src="/img/Rectangle31(2).png" alt="s" className="w-full" />
        </div>
      </div>
      <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-lightBlue">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="text-center">
          <h1 className="font-montserrat font-extrabold text-darkBlue">Professional Drilling Services</h1>
          <p className="mt-5 text-Gray font-normal">
            We have decades of experience with drilling water bores. Provide your property with the irrigation it needs
            by giving us a call today.
          </p>
        </div>
        <div className="lg:mx-20 sm:mx">
          <div className="grid lg:grid-cols-3 shadow-lg  px-5 lg:h-40 justify-center items-center">
            <div>
              <h1 className="font-montserrat font-bold ">Find Water</h1>
              <p className="text-Gray font-normal mt-2">
                We have decades of experience with drilling water bores. Provide your property with the irrigation it
                needs by giving us a call today.
              </p>
            </div>
            <div className="leading-5 justify-center ">
              <h1 className="font-montserrat font-bold">Location</h1>
              <div className="flex  items-center space-x-3 mt-2 ">
                <h1 className="rounded-full bg-darkLight flex justify-center w-10 h-10">
                  <Image src="/svg/Group1214.svg" width="20px" height="20px" alt="Group1216(1)" />
                </h1>
                <h2 className="font-normal text-Gray">11 Hyde Park Rd, Creswick Victoria, 3363</h2>
              </div>
              <div className="flex   items-center space-x-3">
                <h1 className="rounded-full bg-darkLight flex justify-center w-10 h-10">
                  <Image src="/svg/time.svg" width="20px" height="20px" alt="Group1216(1)" />
                </h1>
                <h2 className="font-normal text-Gray">
                  Mon - Sun <br />
                  6:00 am - 9:00 pm
                </h2>
              </div>
            </div>
            <div className="leading-5 justify-center ">
              <h1 className="font-montserrat font-bold">Location</h1>
              <div className="flex  items-center space-x-3 mt-2 ">
                <h1 className="rounded-full bg-darkLight flex justify-center w-10 h-10">
                  <Image src="/svg/Group1214.svg" width="20px" height="20px" alt="Group1216(1)" />
                </h1>
                <h2 className="font-normal text-Gray">11 Hyde Park Rd, Creswick Victoria, 3363</h2>
              </div>
              <div className="flex   items-center space-x-3">
                <h1 className="rounded-full bg-darkLight flex justify-center w-10 h-10">
                  <Image src="/svg/time.svg" width="20px" height="20px" alt="Group1216(1)" />
                </h1>
                <h2 className="font-normal text-Gray">
                  Mon - Sun <br />
                  6:00 am - 9:00 pm
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
