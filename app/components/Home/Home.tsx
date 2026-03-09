import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyChoose />
      <Feature />
      <Review />
      <Footer />
    </div>
    
  )
}

export default Home
