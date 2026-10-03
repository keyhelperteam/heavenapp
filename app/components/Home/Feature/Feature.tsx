import React from 'react';
import {
  FaFire,
  FaMobileAlt,
  FaMusic,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaImages,
  FaHeart,
} from 'react-icons/fa';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaHeart className='text-amber-700' />,
      title: 'Memorial Profiles',
      description: 'Create beautiful digital memorials with photos, names, and life stories for your loved ones.',
    },
    {
      icon: <FaFire className='text-emerald-700' />,
      title: 'Light Virtual Candles',
      description: 'Light virtual candles to honor your loved ones. Set a duration and leave a meaningful gesture of remembrance.',
    },
    {
      icon: <FaImages className='text-pink-600' />,
      title: 'Send Flowers',
      description: 'Send virtual flowers as timeless gestures of remembrance and love. Choose from a variety of beautiful blooms.',
    },
    {
      icon: <FaMusic className='text-sky-700' />,
      title: 'Calming Music',
      description: 'Play soothing background music to create a peaceful atmosphere while you remember and reflect.',
    },
    {
      icon: <FaMapMarkerAlt className='text-green-700' />,
      title: 'Cemetery Locations',
      description: 'Find and save the location of your loved one resting place. Integrated with Google Maps for easy navigation.',
    },
    {
      icon: <FaUsers className='text-blue-700' />,
      title: 'Community Sharing',
      description: 'Invite family and friends to share memories, light candles, and send flowers together in a shared space.',
    },
    {
      icon: <FaShieldAlt className='text-teal-700' />,
      title: 'Privacy & Security',
      description: 'Your memories are safe and secure. Choose public or private settings and control who can view each memorial.',
    },
    {
      icon: <FaMobileAlt className='text-purple-700' />,
      title: 'Access Anywhere',
      description: 'Available on iOS and Android. Access your memorials from any device, anytime, anywhere.',
    },
  ];

  return (
    <section id="features" className='bg-gradient-to-b from-amber-50 to-green-50 py-20'>
      <div className='w-[90%] mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Features & Capabilities</h2>
        <p className='text-center text-gray-600 mt-2 text-lg mb-12 max-w-2xl mx-auto'>
          Everything you need to honor and celebrate the lives of your loved ones
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col items-center space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 group'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-amber-50 to-green-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300'>
                {feature.icon}
              </div>
              <h3 className='text-lg font-bold text-gray-900'>{feature.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
