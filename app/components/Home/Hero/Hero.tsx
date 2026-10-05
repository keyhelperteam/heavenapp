import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { getImagePath } from '@/app/utils/imagePath';

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-gradient-to-br from-amber-50 via-green-50 to-blue-50'>
      <div className='flex justify-center flex-col w-[90%] sm:w-[85%] h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          <div data-aos="fade-right">
            <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white border border-amber-200'>
              <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-base sm:text-sm text-xs text-white'>
                Remember Always
              </div>
              <p className='text-xs sm:text-sm text-gray-700'>Cherish memories, honor legacies</p>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold leading-tight lg:leading-[3.2rem] text-gray-900'>
              A Peaceful Space to Remember Your Loved Ones
            </h1>

            <p className='text-gray-600 text-lg leading-relaxed mb-8'>
              HeavenApp helps you create beautiful digital memorials for your loved ones. Light virtual candles, send flowers, share photos and stories, and stay connected with family and friends — all in one peaceful place.
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4'>
              <a
                href="https://apps.apple.com/lv/app/heaven-miss-your-loved-one/id1625770825"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
              >
                <FaApple className='text-2xl' />
                <div className='text-left'>
                  <div className='text-[11px] leading-tight text-gray-300'>Download on the</div>
                  <div className='text-lg font-semibold leading-tight'>App Store</div>
                </div>
              </a>

              <div className='relative inline-block'>
                <Link
                  href="/android-beta"
                  className='inline-block'
                >
                  <Image src={getImagePath('/images/google_play_app.png')} alt="Get it on Google Play" width={150} height={50} className='cursor-pointer hover:opacity-90 transition-opacity' />
                </Link>
                <span className='absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md'>Beta</span>
              </div>
            </div>

            <p className='text-sm text-gray-500 mb-4'>iOS app available now. Android app in beta — sign up for early access.</p>
          </div>

          <div className='hidden lg:block' data-aos="fade-left" data-aos-delay="200">
            <Image src={getImagePath('/images/hero.png')} alt="HeavenApp hero illustration" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
