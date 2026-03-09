import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/imagePath';

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-gradient-to-br from-amber-50 via-green-50 to-blue-50'>
        <div className='flex justify-center flex-col w-[80%] sm:w-[80%] h-full mx-auto' >
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Top Box */}
                <div> 
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white border border-amber-200'>
                        <div className='p-3 py-1 md:px-5 md:py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 md:text-base sm:text-sm text-xs text-white'>
                            Remember Always
                        </div>
                        <p className='text-xs sm:text-sm text-gray-700'>Cherish memories, honor legacies</p>
                    </div>
                    {/* Heading Content */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading=[3rem] lg:leading-[3.5rem] text-gray-900'>
                        A Peaceful Space to Remember
                    </h1>
                    {/* Description */}
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Create a beautiful memorial for your loved ones. Share memories, light candles, send flowers, and celebrate the moments that matter most. Keep their legacy alive, anywhere, anytime.
                    </p>
                    { /* play store and app store image */}
                    <div className='flex items-center space-x-4 mt-8'>
                        <Image src={getImagePath('/images/google_play_app.png')} alt="playstore" width={150} height={50} />
                        <Image src={getImagePath('/images/apple_store_app.png')} alt="appstore" width={150} height={50} />
                    </div>
                    <p className='text-sm text-gray-500 mt-4'>Available on iOS and Android</p>
                </div>
  


                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image src={getImagePath('/images/hero.png')} alt="hero" width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero