import React from 'react'
import Image from 'next/image';
interface Props {
    name?: string;
    paragraph?: string;
    image1?:string;
    alt1?:string;
    image2?:string;
    alt2:string;
    image3?:string;
    alt3?:string;
  }
const DomesTic = (props: Props) => {
    const {name,paragraph,image1,image2,alt1,alt2,image3,alt3}=props
  return (
    <div className='container mx-auto'>
    <h1 className='text-center text-darkBlue  font-montserrat font-extrabold'>{name}</h1>
      <p className='text-center text-Gray'>{paragraph}</p>
    <div className='lg:flex justify-center px-4'>
      {image1 && <Image src={image1}  alt={alt1}  width={100} height="200px"/>}
      {image2 &&<Image src={image2}  alt={alt2} width={100} height="200px"/>}
      {image3 &&<Image src={image3}  alt={alt3} width={100} height="200px"/>}
    </div>
    </div>
  )
}

export default DomesTic;