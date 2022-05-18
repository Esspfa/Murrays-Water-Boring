import Image from 'next/image';
import React from 'react';
import Button from './button';
interface Props {
  name: string;
  paragraph: string;
  text?: string;
}
const ServiceWater = (props: Props) => {
  const { name, paragraph, text } = props;
  return (
    <div className="mt-5">
      <div className="relative h-96 -z-10">
        <Image src="/img/footer-above.png" alt="m" className="w-full z-10" layout="fill" />
      </div>
      <div className="background flex justify-center -mt-40">
        <div className="max-w-xl justify-center  text-center text-white -mt-5">
          <h1 className="font-montserrat font-extrabold text-lg sm:text-2xl leading-10">{name}</h1>
          <p className="font-bold">{paragraph}</p>
          <div className="py-7">
            <Button classes="bg-white !text-lightBlue">{text}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWater;
