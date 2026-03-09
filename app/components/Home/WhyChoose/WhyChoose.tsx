import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/app/utils/imagePath'

const WhyChoose = () => {
  const benefits = [
    {
      title: 'Easy to Use',
      description: 'Simple and intuitive interface. Create and share memories in just a few clicks, no complicated steps.'
    },
    {
      title: 'Send Virtual Flowers',
      description: 'Light candles and send flowers to honor your loved ones. A timeless gesture of remembrance and love.'
    },
    {
      title: 'Share Stories & Photos',
      description: 'Gather memories in one place. Share photos, stories, and precious moments with family and friends.'
    },
    {
      title: 'Remember Together',
      description: 'Build a community around memories. Invite loved ones to celebrate and share in the remembrance.'
    }
  ];

  return (
    <div className='pt-16 pb-16 bg-gradient-to-b from-white to-green-50'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Why Choose HeavenApp</h1>
        <p className='text-center text-gray-600 mt-2 text-lg'>Create a meaningful tribute to those who matter most</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto mt-10'>
            {benefits.map((benefit, index) => (
            <div key={index} className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-amber-100'>
                <Image src={getImagePath(`/images/i${index + 1}.png`)} alt={`benefit-${index}`} width={70} height={70} className='rounded-lg' />
                <h1 className='text-lg font-bold text-gray-900'>{benefit.title}</h1>
                <p className='text-gray-600 text-center text-sm leading-relaxed'>{benefit.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default WhyChoose