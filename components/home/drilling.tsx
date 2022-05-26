import React from 'react';
import Image from 'next/image';
const Drilling = () => {
  return (
    <>
      <div className="relative h-52">
        <Image src="/img/water-layer (2).png" layout="fill" alt="textCarsve" className="w-full z-20" />
      </div>
      <div className="bg-darkBlue -mt-2">
        <div className="ml-auto flex md:flex-nowrap flex-wrap-reverse justify-between">
          <div className="flex flex-col justify-center text-white sm:p-4 sm:max-w-xl z-10 py-3 md:mx-auto mx-2 my-2">
            <h1 className="text-46px font-montserrat font-extrabold">The Drilling Process</h1>
            <p>
              After arriving at your property for a site inspection, we will discuss your needs and work out where the
              most suitable place for your bore would be. Our drillers assess the area using their knowledge and history
              in drilling and the geological formations of the ground on your property. They will give you an honest
              opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.
            </p>
            <br />
            <p>
              After arriving at your property for a site inspection, we will discuss your needs and work out where the
              most suitable place for your bore would be. Our drillers assess the area using their knowledge and history
              in drilling and the geological formations of the ground on your property. They will give you an honest
              opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.
            </p>
            <br />
            <p>
              A water bore is a great investment for your property and something that should last forever, so make sure
              you get it done right the first time and give us a call.
            </p>
          </div>
          <Image width={945} height={725} src="/img/bg-blue-curve.png" alt="textCarsve" className="z-10" />
        </div>
      </div>
    </>
  );
};

export default Drilling;
