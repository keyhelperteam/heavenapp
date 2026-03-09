import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 flex-1'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'> 
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">
              <span className='text-3xl md:text-4xl text-amber-500'>HeavenApp</span>
            </h1>
            <p className='mt-4 text-sm leading-relaxed w-[95%] text-gray-300'>
              A peaceful space to remember and honor your loved ones. Create lasting tributes and keep their memories alive.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-white'>Navigation</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>Home</a></li>
              <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>About</a></li>
              <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>Features</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-white'>Legal</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link href="/PrivacyAndPolicy" className='text-gray-400 hover:text-amber-400 transition-colors'>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/TermsOfService" className='text-gray-400 hover:text-amber-400 transition-colors'>Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-white'>Connect</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>Email Support</a></li>
              <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className='mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>© 2025 HeavenApp. All rights reserved.</p>
          <p className='mt-4 md:mt-0'>Made with care to honor memories</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer