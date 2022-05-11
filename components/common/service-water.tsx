import React from 'react';
import Button from './button';
interface Props {
  name: string;
  paragraph: string;
}
const ServiceWater = (props: Props) => {
  const { name, paragraph } = props;
  return (
    <div>
      <img src="/img/footer-above.png" alt="m" className="w-full z-10" />
      <div className="background flex justify-center lg:-mt-40 md:-mt-32 xs:-mt-10 -mt-8">
        <div className="max-w-xl justify-center  text-center text-white -mt-5">
          <h1 className="font-montserrat font-extrabold text-lg sm:text-2xl leading-10">{name}</h1>
          <p className="font-bold">{paragraph}</p>
          <div className="py-7">
            <Button classes="bg-white text-darkLight">Free Onsite Inspection</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWater;
