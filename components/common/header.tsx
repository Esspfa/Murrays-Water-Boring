import Image from 'next/image';
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
      <div className="flex sm:flex-nowrap flex-wrap justify-between items-center w-full">
        <div className="flex flex-col sm:items-start max-w-lg ml-auto sm:mr-0 mr-auto sm:my-0 my-2">
          <h1 className="text-white font-black lg:text-5xl text-xl font-montserrat lg:leading-70px sm:text-left text-center">
            {heading}
          </h1>
          <p className="text-white xs:text-2xl text-base sm:text-left text-center">{paragraph}</p>
          <Button classes="rounded-full !bg-darkBlue h-10 text-white mt-5">{buttonText}</Button>
        </div>
        <Image src={src} alt="right-image" width={1045} height={500} className="w-full hidden" />
      </div>
    </div>
  );
};
export default Header;
