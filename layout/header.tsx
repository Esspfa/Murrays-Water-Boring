import Image from 'next/image';
import React from 'react';

const header = () => {
  return (
    <>
      <div className=" bg-darkBlue sm:w-full lg:w-full ">
        <ul className="flex space-x-3 mt-2  sm:ml-auto lg:ml-40 ">
          <li>
            <img src="/svg/Group 1162.svg" alt="ll" className="h-6 my-3" />
          </li>
          <li className="text-white lg:text-xl my-3 sm:text-sm sm:font-extrabold ">
            No Water - No Charge *Conditions Apply on Stock & Domestic only.
          </li>
          <li>
            <img src="/svg/Group 1165.svg" alt="d" className=" my-3 sm:ml-auto lg:ml-40" />
          </li>
          <li>
            <img src="/svg/Group 1166.svg" alt="aa" className="my-3" />
          </li>
        </ul>
        <nav className="bg-white  border-gray-200 px-2 sm:px-4">
          <div className="container flex flex-wrap justify-center items-center mx-auto">
            <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1 ">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 lg:space-x-32 md:mt-0 md:text-sm md:font-medium items-center justify-items-center">
                <li className="">Home</li>
                <li className="">Service</li>
                <li className="">About us</li>
                <li>
                  <Image src="/svg/image2(1).svg" alt="image2(1)" width={100} height={100}/>
                </li>
                <li className=" ">Gallery</li>
                <li className="">FAQS</li>
                <li className="">Contact us</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default header;
