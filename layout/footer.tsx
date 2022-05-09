import { linkSync } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <div className="footer w-full bg-darkBlue mt-5 ">
      <div className="grid grid-cols-3 md:grid-cols-7 text-center pt-24 pb-16 pl-5 pr-5 md:pl-20 md:pr-20">
        <div className="text-center flex items-center">
          <Image width="200px" height="100px" className="cursor-pointer" src="/svg/image 2 (1).svg" alt="logo" quality={100} />
        </div>
        <div className='flex items-center'>
          <hr className='border-dotted  rotate-90 w-full ' /></div>
        <div className="text-left  pt-5 md:pt-0">
          <Link href="/">
            <a>
              <p className="font-bold text-lg text-white">Get In Touch</p>
            </a>
          </Link>

          <div className="pt-5 text-white">
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />Home</a></p>
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />Services</a></p>
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />Abot Us</a></p>
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />Gellery</a></p>
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />FAQs</a></p>
            <p><a href="#"><Image src="/svg/arrow.svg" width="20px" height="10px" />Contact Us</a></p>
          </div>
        </div>
        <div className='flex items-center'>
          <hr className='border-dotted  rotate-90 w-full ' /></div>
        <div className="text-left  pt-5 md:pt-0">
          <Link href="/">
            <a>
              <p className="font-bold text-lg text-white">Get In Touch</p>
            </a>
          </Link>

          <div className="pt-5 text-white">
          <p className='flex'><Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
              <p className='ml-3  text-white'>03 5345 2175</p></p>
            <p className='flex'><Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
              <p className='ml-3  text-white'>03 5345 2175</p></p>
              <p className='flex'><Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
              <p className='ml-3  text-white'>03 5345 2175</p></p>
              <p className='flex'><Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
              <p className=' text-white'>03 5345 2175</p></p>
          </div>

        </div>
        <div className='flex items-center'>
          <hr className='border-dotted  rotate-90 w-full ' /></div>
        <div className="text-left space-y-4 pt-5 md:pt-0">
          <p className="font-bold text-lg">Connect With Us</p>
          <div className="flex">
            <div className="mr-3">
              <Image width="47px" height="47px" className="cursor-pointer" src="/img/Group1219.png" alt="fb" quality={100} />
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
          <div className='flex'>
            <Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
            <Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
            <Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
            <Image src="/svg/phonecall.svg" 
            width="15px" height="20px" className='border border-white'/>
            </div>
        </div>
      </div>
      <hr className='border-dotted   w-full bg-red-800' />
      <div>
        <h1>d</h1>
      </div>
      <div className="flex justify-center items-center border-t-2 border-white p-6 bg-white">
        <p className="text-center text-xs font-Manrope">© 2022 West End Support Services. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

