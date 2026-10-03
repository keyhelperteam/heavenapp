import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/imagePath';

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-gradient-to-br from-amber-50 via-green-50 to-blue-50'>
      <div className='flex justify-center flex-col w-[90%] sm:w-[85%] h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          <div>
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

            <div className='flex items-center space-x-4 mb-4'>
              <Image src={getImagePath('/images/google_play_app.png')} alt="Get it on Google Play" width={150} height={50} />
              <Image src={getImagePath('/images/apple_store_app.png')} alt="Download on the App Store" width={150} height={50} />
            </div>
            <p className='text-sm text-gray-500'>Available on iOS and Android</p>
          </div>

          <div className='hidden lg:block'>
            <Image src={getImagePath('/images/hero.png')} alt="HeavenApp hero illustration" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
