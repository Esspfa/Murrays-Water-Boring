import React from 'react';
import Image from 'next/image';
const Drilling = () => {
  return (
    <div className=" mt-10">
      <img src="/img/water-layer (2).png" alt="textcarsve" className='w-full'  />
      <div className='flex bg-darkBlue -mt-2'>
        <div className='mx-44 text-center  text-white'>
        <h1 className='text-3xl'>The Drilling Process</h1>
        <p className='text-sm'>After arriving at your property for a site inspection, we will discuss your
           needs and work out where the most suitable place for your bore would be. Our drillers assess the 
           area using their knowledge and history in drilling and the geological formations of the ground on your property. They will give you an honest opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.</p>
        <p className='text-sm'>After arriving at your property for a site inspection, we will discuss your 
          needs and work out where the most suitable place for your bore would be. Our drillers assess the
           area using their knowledge and history in drilling and the geological formations of the ground on your property. They will give you an honest opinion and estimate of cost. We will also help you organise your permit that is required to drill a bore.</p>
        </div>
        <Image src="/img/image6.png" alt='image6' width={3000} height="650px"/>
      </div>
    </div>
  );
};

export default Drilling;
