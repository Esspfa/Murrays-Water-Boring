import React from 'react';
import Button from './button';
interface Props {
  item: any;
}
const Servicewater = (props: Props) => {
  const {item} = props;
  return (
    <div>
      <img src="/img/footer-above.png" alt="m" className="w-full z-10" />
      <div className="background -mt-40">
        <div className="mx-80 justify-center  text-center text-white ">
          <h1 className="font-montserrat font-extrabold leading-[56px]">{item.name}</h1>
          <p className="font-bold leading-[36px]">{item.pragraph}</p>
          <div className="py-7">
            <Button classes="bg-white text-darkLight">Free Onsite Inspection</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicewater;
