import NameImage from 'components/common/name-image';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-darkBlue px-5">
        <div className="flex space-x-3 mt-2 max-w-7xl mx-auto justify-between">
          <div className="flex">
            <Image src="/svg/Group 1162.svg" alt="water-drop" height={20} width={18} />
            <div className="text-white my-3 ml-3">
              <span className="lg:text-xl sm:text-sm sm:font-extrabold">No Water - No Charge</span> *Conditions Apply on
              Stock & Domestic only.
            </div>
          </div>
          <div className="flex space-x-2">
            <NameImage classes="justify-center items-center" />
            <NameImage name="0428 518 159 " classes="justify-center items-center" />
          </div>
        </div>
      </div>
      <nav className="bg-white mx-8">
        <div className="max-w-7xl w-full mx-auto">
          <ul className="flex space-x-8 font-medium items-center justify-between">
            {headerItems.slice(0, 3).map((item, index) => (
              <li key={index} className={`${item.path === router.pathname && ' text-lightBlue'}`}>
                <Link href={item.path} key={index}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
            <li className="-mt-6">
              <Image src="/svg/image2(1).svg" alt="image2(1)" width={200} height={100} />
            </li>
            {headerItems.slice(3, 6).map((item, index) => (
              <li key={index} className={`${item.path === router.pathname && ' text-lightBlue'}`}>
                <Link href={item.path} key={index}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
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
