'use client';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
  return (
    <div className='pt-16 pb-16 bg-gradient-to-b from-blue-50 to-green-50'>
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900'>Stories from Our Community</h1>
      <p className='text-center text-gray-600 mb-8'>See how HeavenApp helps families remember and honor their loved ones</p>
      <div className='w-[80%] mx-auto'>
        <Carousel
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className='p-6 bg-white rounded-xl shadow-md border border-amber-100 mx-2'>
            <p className='text-gray-700 italic'>&quot;HeavenApp gave me a beautiful way to remember my mother. It's like visiting her whenever I need to.</p>
            <h3 className='font-bold mt-3 text-gray-900'>- Sarah M.</h3>
            <p className='text-sm text-gray-500'>Remembering her mother</p>
          </div>
          <div className='p-6 bg-white rounded-xl shadow-md border border-amber-100 mx-2'>
            <p className='text-gray-700 italic'>Lighting a virtual candle every anniversary has become our family tradition. It keeps us connected.&rdquo;</p>
            <h3 className='font-bold mt-3 text-gray-900'>- James L.</h3>
            <p className='text-sm text-gray-500'>Honoring his grandfather</p>
          </div>
          <div className='p-6 bg-white rounded-xl shadow-md border border-amber-100 mx-2'>
            <p className='text-gray-700 italic'>A peaceful space to share my dad&apos;s favorite memories. The flowers and messages from friends mean everything.</p>
            <h3 className='font-bold mt-3 text-gray-900'>- Emily R.</h3>
            <p className='text-sm text-gray-500'>Celebrating her father&apos;s life</p>
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Review