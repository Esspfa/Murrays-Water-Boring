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
      <div className="container mx-auto">
        <div>
          <h1>gf</h1>
        </div>
      </div>
    </div>
  );
};

export default contact;
