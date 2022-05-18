import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { headerItems } from './header';
const getTouch = [
  {
    name: '11 Hyde Park Rd, Creswick Victoria, 3363',
    location: '/svg/location.svg',
  },
  {
    name: '03 5345 2175',
    location: '/svg/phonecall.svg',
  },
  {
    name: '03 5345 2175',
    location: '/svg/phonecall.svg',
  },
  {
    name: 'Mon - Sun 6:00 am - 9:00 pm',
    location: '/svg/time.svg',
  },
];
const contacts = [
  {
    name: 'phonecall',
    location: '/svg/phonecall.svg',
  },
  {
    name: 'instaa',
    location: '/svg/instaa.svg',
  },
  {
    name: 'Vector(3)',
    location: '/svg/Vector(3).svg',
  },
  {
    name: 'linkdin',
    location: '/svg/linkdin.svg',
  },
];
const Footer = () => {
  return (
    <div>
      <div className="footer w-full bg-darkBlue">
        <div className="grid sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 text-center pt-24 pb-16 pl-5 pr-5 md:pl-20 md:pr-20 max-w-7xl mx-auto">
          <div>
            <div>
              <Image src="/svg/image2(1).svg" alt="image 2 (1)" width={339} height={143} />
              <h1 className="text-white lg:hidden md:hidden">We Do Not Guarantee The Quality or Quantity of Water</h1>
            </div>
            <hr className="lg:hidden sm:hidden border-dashed border-gray-500" />
          </div>
          <div className="flex items-center">
            <hr className="border-dashed  rotate-90 w-full hidden sm:block border-gray-500" />
          </div>
          <div>
            <div className="text-left  pt-5 md:pt-0">
              <Link href="/">
                <a>
                  <p className="font-bold text-lg text-white">Quick Links</p>
                </a>
              </Link>

              <div className="pt-5 text-white">
                {headerItems.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <a className="flex my-2">
                      <Image src="/svg/footer-arrow.svg" width={5} height={5} alt={item.name} />
                      <p className="text-sm ml-2">{item.name}</p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <hr className="border-dashed  rotate-90 w-full hidden sm:block border-gray-500" />
          </div>
          <div>
            <div className="text-left  pt-5 md:pt-0">
              <Link href="/">
                <a>
                  <p className="font-bold text-lg text-white">Get In Touch</p>
                </a>
              </Link>
              <div className="flex flex-col pt-5 justify-center">
                {getTouch.map((item, index) => (
                  <div key={index} className="flex my-2">
                    <div className="flex rounded-full w-5 h-5 min-h-[1.25rem] min-w-[1.25rem] p-1 border justify-center  border-white ">
                      <Image
                        src={item.location}
                        width="10px"
                        height="10px"
                        alt={item.name}
                        className="border border-white"
                      />
                    </div>
                    <p className="text-white text-sm leading-4 ml-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <hr className="border-dashed  rotate-90 w-full hidden sm:block border-gray-500" />
          </div>
          <div>
            <div className="text-left space-y-4 pt-5 md:pt-0">
              <p className="font-bold text-lg text-white">Connect With Us</p>
              <div className="flex">
                <div className="mr-3">
                  <Image
                    width="47px"
                    height="47px"
                    className="cursor-pointer"
                    src="/img/Group1219.png"
                    alt="fb"
                    quality={100}
                  />
                  <Image
                    width="47px"
                    height="47px"
                    className="cursor-pointer"
                    src="/img/truelocal-logo-stacked-white 1.png"
                    alt="truelocal-logo-stacked-white 1"
                    quality={100}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                {contacts.map((item, index) => (
                  <div
                    key={index}
                    className="flex rounded-full w-8 h-8 min-h-[1.25rem] min-w-[1.25rem] border justify-center border-white"
                  >
                    <Image
                      src={item.location}
                      alt={item.name}
                      width="15px"
                      height="20px"
                      className="border border-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <hr className="border-dashed  border-gray-500" />
          <div className="lg:flex text-center">
            <h1 className="text-borderColor">We Do Not Guarantee The Quality or Quantity of Water</h1>
            <h1 className="text-borderColor ml-auto">Privacy Policy</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 border-white p-6 bg-white">
        <p className="text-center  ">
          © 2022 <span className="text-lightBlue">MURRAYS WATER BORING.</span> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
