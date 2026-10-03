import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/imagePath';

interface Screenshot {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    src: '/images/app_images/main_dashboard.png',
    alt: 'HeavenApp main dashboard showing a memorial profile with photo, name, and life period alongside the mini player with candle, flower, and music controls',
    title: 'Main Dashboard',
    description: 'View your loved one\'s memorial profile with a beautiful themed layout, complete with profile photo, name, and life period. The mini player at the bottom provides quick access to lighting candles, sending flowers, and playing calming music.',
  },
  {
    id: 2,
    src: '/images/app_images/list_of_in_loving_person.png',
    alt: 'HeavenApp list of saved memorial profiles showing grid of in-memory persons',
    title: 'Memorial Profiles',
    description: 'Browse all your saved memorial profiles in one place. Each profile card displays a photo, name, and life period. Set a profile as primary for quick access or create new memorials with a single tap.',
  },
  {
    id: 3,
    src: '/images/app_images/activities.png',
    alt: 'HeavenApp activities screen showing notifications from family and friends',
    title: 'Activity Feed',
    description: 'Stay connected with the community around each memorial. The activity feed shows notifications when friends light candles, send flowers, share memories, or interact with your loved one\'s profile.',
  },
  {
    id: 4,
    src: '/images/app_images/cemetery_location.png',
    alt: 'HeavenApp cemetery location screen showing Google Maps with cemetery marker',
    title: 'Cemetery Location',
    description: 'Find and save the location of your loved one\'s final resting place. Integrated Google Maps shows cemetery markers with address and coordinates. Open directly in your preferred maps app for navigation.',
  },
];

const AppShowcase = () => {
  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            App Screenshots
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how HeavenApp helps you create beautiful memorials and stay connected with your loved ones, anywhere, anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="group flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-green-200/30 to-blue-200/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl">
                  <div className="w-[160px] h-[320px] relative rounded-[1.25rem] overflow-hidden bg-gray-800">
                    <Image
                      src={getImagePath(screenshot.src)}
                      alt={screenshot.alt}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
