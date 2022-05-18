import { headerItems } from 'layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const BreadCrumb = () => {
  const crumb = [{ name: 'Home', path: '/', active: false }];
  const router = useRouter();
  const data = [
    ...crumb,
    ...[{ name: headerItems.find((item) => item.path === router.pathname)?.name, path: router.pathname, active: true }],
  ];
  return (
    <ul className="font-normal border border-b-borderColor py-3 leading-6">
      <div className="max-w-7xl flex mx-auto  xs:ml-auto ml-5">
        {data.map((item, index) => (
          <li key={index} className={`mx-0.5 flex ${item.active && 'text-lightBlue'}`}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
            {data.length !== index + 1 && (
              <div className="ml-2">
                <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
              </div>
            )}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default BreadCrumb;
