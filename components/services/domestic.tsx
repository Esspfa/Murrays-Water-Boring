import React from 'react';
import Image from 'next/image';
interface Props {
  name?: string;
  paragraph?: string;
  images: Array<string>;
  nameClasses?: string;
  paragraphClasses?: string;
}
const Domestic = (props: Props) => {
  const { name, paragraph, images, nameClasses, paragraphClasses } = props;
  return (
    <div className="max-w-7xl mx-auto my-8 h-full flex justify-center items-center">
      <div>
        <h1 className={`text-center text-darkBlue font-montserrat text-4xl font-extrabold ${nameClasses}`}>{name}</h1>
        <p className={`text-center text-Gray my-5 ${paragraphClasses} max-w-2xl mx-auto`}>{paragraph}</p>
        <div className="xs:flex justify-center mx-4">
          {images.map((item, index) => (
            <div key={index} className="mr-4">
              <Image src={item} alt="image-1" width={696} height={450} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domestic;
