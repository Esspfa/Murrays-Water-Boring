import React from 'react';
import Image from 'next/image';
const FindWater = () => {
  return (
    <div className="mt-10  ">
      <div>
        <img src="/img/footer-above.png" alt="m" className='w-full z-10' /></div>
      <div className=" top-0 z-50 text-center text-white">
        <div className='abc relative -top-32 -z-10'>
          <div className=' pt-20'>
        <h1 className='text-2xl font-bold'>Find Water On Your Property</h1>
        <p className='mx-40'>If you’re looking to tap into the potential your property has to offer
          , look no further than D. K. & E.M. Murray Water Boring. Call us today to
           get started with your drilling project.</p>
           <div>
          <button className='rounded-full bg-white text-darkLight w-48 h-10'>Get Start</button>
        </div>
           </div></div>
        
      </div>
    </div>
  );
};

export default FindWater;
