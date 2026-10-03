import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AppShowcase from './AppShowcase/AppShowcase'
import Feature from './Feature/Feature'
import Review from './Review/Review'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyChoose />
      <AppShowcase />
      <Feature />
      <Review />
    </div>
  )
}

export default Home
