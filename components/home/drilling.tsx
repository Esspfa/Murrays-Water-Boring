import React from 'react';
import Image from 'next/image';
const Drilling = () => {
  return (
    <div className="">
      <img src="/img/water-layer (2).png" alt="textCarsve" className="w-full" />
      <div
        className="flex justify-between -mt-12 h-[525px] z-10"
        style={{
          background: `url(/img/bg-blue-curve.png)`,
          backgroundSize: '100% 100%, cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src="/img/bg-blue-curve.png" alt="textCarsve" className="w-full absolute h-[525px]" />
        <div className="text-center flex flex-col justify-center items-center  text-white max-w-xl ml-4 z-10">
          <h1 className="text-3xl font-montserrat font-extrabold">The Drilling Process</h1>
          <p className="text-sm font-normal">
            After arriving at your property for a site inspection, we will discuss your needs and work out where the
            most suitable place for your bore would be. Our drillers assess the area using their knowledge and history
            in drilling and the geological formations of the ground on your property. They will give you an honest
            opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.
          </p>
          <br />
          <p className="text-sm">
            After arriving at your property for a site inspection, we will discuss your needs and work out where the
            most suitable place for your bore would be. Our drillers assess the area using their knowledge and history
            in drilling and the geological formations of the ground on your property. They will give you an honest
            opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.
          </p>
          <br />
          <p className="text-sm">
            A water bore is a great investment for your property and something that should last forever, so make sure
            you get it done right the first time and give us a call.
          </p>
        </div>
        {/* <img src="/img/image6.png" alt="image6" className="z-10 truck-image" /> */}
      </div>
    </div>
  );
};

export default Drilling;
