import React, { useState } from 'react';
import Image from 'next/image';
import Header from 'components/common/header';
import ServiceWater from 'components/common/service-water';
import Masonry from 'react-masonry-css';
import BreadCrumb from 'components/common/bread-crumb';
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  const galleryData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const [modalShow, setModalShow] = useState(0);

  return (
    <div>
      <Header
        heading="There For You When You Need"
        paragraph="D.K. & E.M. Murray Water Boring Gallery in Victoria"
        buttonText="Find Out More"
        src="/img/Rectangle31.png"
      />
      <BreadCrumb />
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="text-center text-darkBlue font-montserrat font-extrabold text-4xl py-5">See Our Work</h1>
        <p className="text-Gray font-normal text-center max-w-4xl mx-auto">
          We provide services for drilling water bores, test bores and mineral exploration bores. Feel free to take a
          look through our gallery to see examples of the quality work we have done for past clients.
        </p>
      </div>

      <div className=" max-w-7xl mx-auto">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid flex" columnClassName="mr-4">
          {galleryData.map((item) => (
            <img
              src={`/img/gallery/${item}.png`}
              alt="gallery"
              key={item}
              className="m-2 cursor-pointer"
              onClick={() => setModalShow(item)}
            />
          ))}
        </Masonry>
      </div>
      <div className="mt-5">
        <ServiceWater
          name="Find Water On Your Property"
          paragraph="If you’re looking to tap into the potential your property has to offer, look no further than D. K. & E.M. Murray Water Boring. Call us today to get started with your drilling project."
          text="Call Us Today"
        />
      </div>
      {modalShow && (
        <div className="popup-box">
          <div className="box">
            <div className="close-icon flex items-center justify-center">
              <Image src="/svg/closeBtn.svg" alt="closeBtn" width={10} height={10} onClick={() => setModalShow(0)} />
            </div>
            <div className="sliderLeft flex justify-center items-center ">
              <img
                src="/svg/leftArrow.svg"
                alt="leftArrow"
                className="h-3"
                onClick={() => setModalShow((prev) => (prev === 1 ? 1 : prev - 1))}
              />
            </div>
            <div className="sliderRight flex justify-center items-center">
              <img
                src="/svg/rightArrow.svg"
                alt="rightArrow"
                className="h-3"
                onClick={() => galleryData.length !== modalShow && setModalShow((next) => next + 1)}
              />
            </div>
            <div className="absolute bottom-2">
              <h1 className=" bg-blackShade text-white ml-5 rounded h-8 w-20 flex items-center justify-center font-medium text-xs">
                {modalShow}/{galleryData.length}
              </h1>
            </div>
            <div className="flex justify-center h-96 w-3/4 min-w-full">
              <img src={`/img/gallery/${modalShow}.png`} alt="1" className="sliderImage" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
