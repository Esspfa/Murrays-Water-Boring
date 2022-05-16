import React from 'react';
import Button from './button';
interface Props {
  heading: string;
  paragraph: string;
  buttonText: string;
  src: string;
}
export const Header = (props: Props) => {
  const { heading, paragraph, buttonText, src } = props;
  return (
    <div className="bg-lightBlue w-full lg:flex">
      <div className="flex justify-between w-full">
        <div className=" max-w-7xl ml-4 flex items-center justify-start">
          <div>
            <h1 className="text-white font-black lg:text-5xl text-xl font-montserrat lg:leading-70px">{heading}</h1>
            <p className=" text-white text-lg">{paragraph}</p>
            <Button classes="rounded-full bg-darkBlue h-10 text-white mt-5">{buttonText}</Button>
          </div>
        </div>
        <div className=" ml-auto">
          <img src={src} alt="right-image" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default Header;
