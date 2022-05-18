import Image from 'next/image';
import React from 'react';
import Button from './button';

const AboutPart = () => {
  return (
    <div className="flex items-center justify-center flex-wrap my-8">
      <Image src="/img/about.png" alt="about" width="696px" height="500px" />
      <div className="ml-10 max-w-xl">
        <h1 className="text-darkBlue font-extrabold text-3xl font-montserrat mb-2">About Us</h1>
        <p className="text-Gray text-sm font-regular">
          We began trading as D.K. & E.M. Murray and were founded by Des who has over 50 years of experience dating back
          to the 1960s. Murray&apos;s Water Boring is the longest-established family drilling business in the area,
          servicing most areas around Victoria. The company now has over 90 years of combined experience spanning over
          three generations from Des to his son, Gary, and two of his grandsons, Josh and Brad, who all work in the
          business with Gary holding a class 3 license which is the highest qualification.
        </p>
        <p className="text-Gray text-sm font-regular mt-[20px]">
          If you need water for your garden, stock, irrigation, test holes or mining and exploration drilling, we are
          the people to call. We are founders of the ‘no water, no charge’ offer, which we still offer on domestic and
          stock bores after our free site inspection of your property. We offer reliable service with competitive prices
          using the most modern drilling rigs in Victoria.
        </p>
        <Button classes="mt-4">Read more</Button>
      </div>
    </div>
  );
};

export default AboutPart;
