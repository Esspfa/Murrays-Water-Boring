import React from 'react';
import Button from 'components/common/button';
import Image from 'next/image';
import ServiceWater from 'components/common/service-water';
import Masonry from 'react-masonry-css';
import ImageGallery from 'components/common/imagegallery';
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  return (
    <div>
      <div className="bg-darkLight w-full lg:flex">
        <div className="">
          <div className="px-4 sm:text-center justify-center">
            <h1 className="text-white font-black lg:text-5xl font-montserrat ">There For You When You Need Us</h1>
            <h1 className=" text-white text-lg">D.K. & E.M. Murray Water Boring Gallery in Victoria</h1>
            <Button classes="rounded-full bg-darkBlue  h-10 text-white">Find Out More</Button>
          </div>
        </div>
        <div className="">
          <img src="/img/Rectangle31.png" alt="s" className="w-full" />
        </div>
      </div>
      <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-darkLight">Gallery</h1>
        </div>
      </div>
      <div className="mt-5">
        <div className="lg:px-72">
          <h1 className="text-center text-darkBlue font-montserrat font-extrabold">See Our Work</h1>
          <p className="text-Gray font-normal ">
            We provide services for drilling water bores, test bores and mineral exploration bores. Feel free to take a
            look through our gallery to see examples of the quality work we have done for past clients.
          </p>
        </div>
      </div>
      <div  >
        <div className='max-w-5xl mx-auto'>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid flex"
            columnClassName="my-masonry-grid_column"
          >
            <div>
              <ImageGallery 
              name="1" 
              path="/img/gallery/1.png"/>
            </div>
            <div>
              <ImageGallery 
              name="2" 
              path="/img/gallery/2.png"/>
            </div>
            <div>
              <ImageGallery 
              name="3" 
              path="/img/gallery/3.png"/>
            </div>
            <div>
              <ImageGallery 
              name="4" 
              path="/img/gallery/4.png"/>
            </div>
          </Masonry>
        </div>
      </div>
      <div className="mt-5">
        <ServiceWater
          name="Find Water On Your Property"
          paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
          text="Call Us Today"
        />
      </div>
    </div>
  );
};

export default Gallery;
