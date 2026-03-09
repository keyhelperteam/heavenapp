import React from 'react';
import { FaBook, FaCog, FaDesktop, FaHeadset, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaBook className='text-amber-700' />,
      text: 'Create Memories',
    },
    {
      icon: <FaMobileAlt className='text-green-700' />,
      text: 'Access Anytime, Anywhere',
    },
    {
      icon: <FaShieldAlt className='text-sky-700' />,
      text: 'Your Memory is Safe & Secure',
    },
   {
      icon: <FaHeadset className='text-emerald-700' />,
      text: 'Caring Support Team',
    },
    {
      icon: <FaCog className='text-amber-600' />,
      text: 'Customize Your Tribute',
    },
    {
      icon: <FaLayerGroup className='text-green-600' />,
      text: 'Multiple Layout Options',
    },
    {
      icon: <FaDesktop className='text-sky-600' />,
      text: 'Works on All Devices',
    },
    {
      icon: <FaLaptop className='text-teal-700' />,
      text: 'User-Friendly Interface',
    },
  ];

  return (
    <div className='bg-gradient-to-b from-amber-50 to-green-50 pt-20 pb-20'>
      <div className='w-[80%] mx-auto text-center'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Features & Benefits</h1>
        <p className='text-center text-gray-600 mt-2 text-lg'>Everything you need to honor and celebrate memories</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center justify-center space-y-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-100 hover:border-amber-300'>
              <div className='text-5xl'>{feature.icon}</div>
              <h1 className='text-lg font-bold text-gray-900'>{feature.text}</h1>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Feature