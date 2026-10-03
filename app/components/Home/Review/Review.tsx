'use client';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  context: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "HeavenApp gave me a beautiful way to remember my mother. It's like visiting her whenever I need to. Lighting a candle on anniversaries has become my quiet moment of peace.",
    name: "Sarah M.",
    context: "Remembering her mother",
  },
  {
    id: 2,
    quote: "Lighting a virtual candle every anniversary has become our family tradition. It keeps us connected and gives us a meaningful way to honor my grandfather's memory together.",
    name: "James L.",
    context: "Honoring his grandfather",
  },
  {
    id: 3,
    quote: "A peaceful space to share my dad's favorite memories. The flowers and messages from friends mean everything. It's given our whole family a place to come together.",
    name: "Emily R.",
    context: "Celebrating her father's life",
  },
];

const Review = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
    <section id="testimonials" className='py-16 bg-gradient-to-b from-blue-50 to-green-50'>
      <div className='w-[90%] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Stories from Our Community</h2>
          <p className='text-center text-gray-600 text-lg'>See how HeavenApp helps families remember and honor their loved ones</p>
        </div>

        <Carousel
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='p-2'>
              <div className='bg-white rounded-2xl shadow-md border border-amber-100 p-8 h-full mx-2 transition-all duration-300 hover:shadow-xl hover:border-amber-200'>
                <p className='text-gray-700 italic text-lg leading-relaxed mb-4'>&quot;{testimonial.quote}&quot;</p>
                <h3 className='font-bold text-gray-900 text-lg'>- {testimonial.name}</h3>
                <p className='text-sm text-gray-500'>{testimonial.context}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Review
