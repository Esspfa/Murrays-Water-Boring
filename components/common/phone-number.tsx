import Image from 'next/image';
import React from 'react';

const PhoneNumber = () => {
  return (
    <div className="flex">
      <div className="rounded-full flex justify-center bg-lightBlue items-center w-5 h-5">
        <Image src="/svg/phonecall.svg" alt="phone-call" width={12} height={12} />
      </div>
      <p className="ml-3  text-white">03 5345 2175</p>
    </div>
  );
};

export default PhoneNumber;
