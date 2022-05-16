import React from 'react';
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
  const galleryData = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div>
      <div>
        <Header
          heading="There For You When You Need"
          paragraph="D.K. & E.M. Murray Water Boring Gallery in Victoria"
          clickme="Find Out More"
          src="/img/Rectangle31.png"
        />
      </div>
      <BreadCrumb />
      <div className="mt-5">
        <div className="lg:px-72">
          <h1 className="text-center text-darkBlue font-montserrat font-extrabold text-4xl">See Our Work</h1>
          <p className="text-Gray font-normal text-center">
            We provide services for drilling water bores, test bores and mineral exploration bores. Feel free to take a
            look through our gallery to see examples of the quality work we have done for past clients.
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid flex" columnClassName="mr-4">
            {galleryData.map((item) => (
              <img src={`/img/gallery/${item}.png`} alt="gallery" key={item} className="m-2" />
            ))}
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
