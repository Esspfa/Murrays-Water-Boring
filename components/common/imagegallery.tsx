import React, { useState } from 'react';
import Image from 'next/image';
interface Props {
name:string;
path:string
}

const ImageGallery = (props: Props) => {
  const {path,name} = props;
  return (
    <div className='mt-10'>
      <img src={path} alt={name} />
    </div>
  )
}

export default ImageGallery;