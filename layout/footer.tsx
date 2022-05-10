import { linkSync } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
  {
    name: 'Home',
  },
  {
    name: 'Services',
  },
  {
    name: 'About Us',
  },
  {
    name: 'Gellery',
  },
  {
    name: 'FAQs',
  },
  {
    name: 'Contact us',
  },
];
const getTouch = [
{
  name:'11 Hyde Park Rd, Creswick Victoria, 3363',
  location:'/svg/location.svg',
 
},
{
  name:'03 5345 2175',
  location:'/svg/phonecall.svg',
 
},
{
  name:'03 5345 2175',
  location:'/svg/phonecall.svg',
 
},
{
  name:'Mon - Sun 6:00 am - 9:00 pm',
  location:'/svg/time.svg',
 
},
];
const Contact =[
{
name:"phonecall",
location:"/svg/phonecall.svg"
},
{
  name:"instaa",
  location:"/svg/instaa.svg"
  },
{
  name:"Vector(3)",
  location:"/svg/Vector(3).svg"
  },
  {
    name:"linkdin",
    location:"/svg/linkdin.svg"
    },
]
const Footer = () => {
  return (
    <div className="footer w-full bg-darkBlue mt-5 ">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-7  text-center pt-24 pb-16 pl-5 pr-5 md:pl-20 md:pr-20">
        <div className="text-center flex items-center">
          <Image
            width="200px"
            height="100px"
            className="cursor-pointer"
            src="/svg/image 2 (1).svg"
            alt="logo"
            quality={100}
          />
        </div>
        <div className="flex items-center">
          <hr className="border-dotted  rotate-90 w-full " />
        </div>
        <div className="text-left  pt-5 md:pt-0">
          <Link href="/">
            <a>
              <p className="font-bold text-lg text-white">Get In Touch</p>
            </a>
          </Link>

          <div className="pt-5 text-white">
            {footerLinks.map((item, index) => (
              <p key={index}>
                <a href="#">
                  <Image src="/svg/arrow.svg" width="20px" height="10px" alt={item.name} />
                  {item.name}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <hr className="border-dotted  rotate-90 w-full " />
        </div>
        <div className="text-left  pt-5 md:pt-0">
          <Link href="/">
            <a>
              <p className="font-bold text-lg text-white">Get In Touch</p>
            </a>
          </Link>
          <div>
            <div className="flex flex-col  justify-center">
            {getTouch.map((item, index) => (
              <div key={index} className='flex mt-2'>
              <div  className="flex rounded-full w-5 h-5 min-h-[1.25rem] min-w-[1.25rem]  border justify-center  border-white ">
                <Image src={item.location} width="10px" height="10px" alt={item.name} className="border border-white" />
              </div>
              <h1 className="text-white text-sm leading-4 ml-2 ">{item.name}</h1>
              </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <hr className="border-dotted  rotate-90 w-full " />
        </div>
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
          <div className='flex space-x-2'>
          {Contact.map((item, index) => (
          <div key={index} className="flex rounded-full w-8 h-8 min-h-[1.25rem] min-w-[1.25rem]  border justify-center  border-white">
             <Image src={item.location}  alt={item.name} width="15px" height="20px" className="border border-white" />
          </div>
             ))}
             </div>
        </div>
      </div>

      <hr className="border-dotted  mx-40   w-3/4 bg-red-800" />
      <div className='mx-40 flex'>
        <h1 className='text-white'>We Do Not Guarantee The Quality or Quantity of Water</h1>
        <h1 className='text-white ml-auto'>Privacy Policy</h1>
      </div>
      <div className="flex justify-center items-center border-t-2 border-white p-6 bg-white">
        <p className="text-center text-xs font-Manrope">© 2022 West End Support Services. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
