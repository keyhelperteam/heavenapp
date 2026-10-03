import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/app/utils/imagePath'

const WhyChoose = () => {
  const benefits = [
    {
      title: 'Simple & Intuitive',
      description: 'Create beautiful memorials in just a few taps. Our clean, user-friendly interface makes remembering easy and stress-free.',
    },
    {
      title: 'Light Candles & Send Flowers',
      description: 'Light virtual candles and send flowers to honor your loved ones. Meaningful gestures that feel personal and meaningful.',
    },
    {
      title: 'Share Stories & Photos',
      description: 'Gather photos, stories, and precious moments in one place. Share memories with family and friends who care.',
    },
    {
      title: 'Remember Together',
      description: 'Build a community around remembrance. Invite loved ones to share memories, light candles, and celebrate life together.',
    },
  ];

  return (
    <section id="about" className='py-16 bg-gradient-to-b from-white to-green-50'>
      <div className='w-[90%] mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Why Choose HeavenApp</h2>
        <p className='text-center text-gray-600 mt-2 text-lg mb-12 max-w-2xl mx-auto'>
          Create meaningful tributes to those who matter most, with heartfelt tools designed to honor and celebrate life
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex flex-col items-center space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 group'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className='relative'>
                <Image src={getImagePath(`/images/i${index + 1}.png`)} alt={`benefit-icon-${index + 1}`} width={70} height={70} className='rounded-lg' />
                <div className='absolute -inset-1 bg-gradient-to-r from-amber-200/30 to-green-200/30 rounded-lg blur group-hover:blur-md transition-all duration-300'></div>
              </div>
              <h3 className='text-lg font-bold text-gray-900'>{benefit.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
