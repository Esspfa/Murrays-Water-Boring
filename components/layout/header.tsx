import NameImage from 'components/common/name-image';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [state, setState] = useState({
    open: false,
  });

  const handleDrawer = (name: string, value: boolean) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-darkBlue px-5 py-2">
        <div className="md:flex space-x-3 max-w-7xl mx-auto justify-between">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex">
              <Image src="/svg/Group 1162.svg" alt="water-drop" height={20} width={18} />
              <p className="md:text-lg text-sm sm:font-extrabold text-white mr-3">No Water - No Charge</p>
            </div>
            <p className="text-white flex flex-wrap text-xs">*Conditions Apply on Stock & Domestic only.</p>
          </div>
          <div className="space-x-2 md:flex hidden">
            <NameImage classes="justify-center items-center" />
            <NameImage name="0428 518 159 " classes="justify-center items-center" />
          </div>
        </div>
      </div>
      <nav className="bg-white mx-8">
        <div className="max-w-7xl w-full mx-auto">
          <ul className="space-x-8 font-medium items-center justify-between md:flex hidden">
            {headerItems.slice(0, 3).map((item, index) => (
              <li key={index} className={`${item.path === router.pathname && ' text-lightBlue'}`}>
                <Link href={item.path} key={index}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
            <li className="-mt-6">
              <Link href="/">
                <a>
                  <Image src="/svg/image2(1).svg" alt="image2(1)" width={200} height={100} />
                </a>
              </Link>
            </li>
            {headerItems.slice(3, 6).map((item, index) => (
              <li key={index} className={`${item.path === router.pathname && ' text-lightBlue'}`}>
                <Link href={item.path} key={index}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex justify-between">
            <Image
              src="/svg/hamburger.svg"
              width={22.5}
              height={15}
              alt="hamburger"
              className="cursor-pointer"
              onClick={() => handleDrawer('open', !state.open)}
            />
            <Link href="/">
              <a>
                <Image src="/svg/image2(1).svg" alt="image2(1)" width={118} height={50} />
              </a>
            </Link>
            <NameImage name=" " classes="justify-center items-center" />
          </div>
          {state.open ? (
            <div className="bg-darkBlue w-52 left-0 top-10 absolute duration-300 z-10">
              <div className="flex justify-end pt-3 pr-3" onClick={() => handleDrawer('open', !state.open)}>
                <p className="text-white text-xl font-light font-Raleway cursor-pointer">X</p>
              </div>
              {headerItems.map((item, index) => (
                <div key={index} className="border-b border-lightGray">
                  <Link href={item.path}>
                    <a onClick={() => handleDrawer('open', false)}>
                      <p className="p-3 text-white font-Raleway">{item.name}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Header;
export const headerItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Service',
    path: '/services',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'FAQS',
    path: '/faqs',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];
