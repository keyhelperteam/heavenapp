import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className='bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-amber-500">
              HeavenApp
            </h1>
            <p className='mt-4 text-sm leading-relaxed text-gray-300 max-w-sm'>
              A peaceful digital space to remember and honor your loved ones. Create lasting tributes, light candles, send flowers, and share precious memories with family and friends.
            </p>
            <div className='mt-6 flex space-x-4'>
              <a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.59 0 0 .594 0 1.336v21.328C0 23.406.59 24 1.325 24H12.85v-9.294H9.692V10.41h3.158V8.037c0-3.127 1.867-4.832 4.608-4.832 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 4.375h-3.11V24h6.116c.735 0 1.325-.594 1.325-1.336V1.336C24 .594 23.41 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.904 10.256c-.064.112-.134.22-.212.326.007-.016.014-.032.02-.048.146-2.26.836-3.815 2.084-4.91-.957 1.404-2.71 2.167-4.524 2.276-.04-.096-.08-.192-.12-.284-.88-2.01-2.87-3.546-5.02-3.656-2 .07-3.96.83-5.52 2.33C2.07 7.37 1.86 9.83 2.88 12.2c-.008.06-.016.12-.024.184-.024.108-.04.214-.04.32 0 4.11.876 7.828 2.314 11.198C5.58 21.36 6.6 21.6 7.58 21.6c.66 0 1.28-.07 1.86-.204 0-.134.024-.26.044-.376 1.03-.406 1.98-1.06 2.83-1.93.028-.024.056-.048.084-.076-3.33.52-5.918 3.096-6.012 6.628h14.59c.014-.064.02-.128.02-.192 0-.06-.008-.116-.022-.172.016-.02.032-.04.048-.06 3.79-3.02 5.08-7.72 4.41-11.64z" />
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56c-.883.386-1.83.636-2.828.746.996-.592 1.756-1.528 2.124-2.64-.926.54-1.93.916-3.01.916-2.805 0-5.075-2.228-5.075-4.98 0-.384.046-.756.122-1.116-4.152.832-7.826 3.134-10.296 6.54C2.662 9.71 2.4 10.626 2.4 11.6c0 1.71.876 3.21 2.228 4.08-.814-.02-1.572-.252-2.244-.616v.062c0 2.38 1.712 4.372 4.002 4.826-.514.136-1.062.214-1.632.214-.394 0-.104.076-.44.46-1.45 1.52-.344-.34-3.12.316-.458.236 1.614 2.276 2.95.878 3.12-1.686.02-.362.032-.57.032-.57 6.138.002 9.672-4.836 9.672-9.026V7.236c3.156-1.744 5.684-3.906 7.35-6.27z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Navigation</h3>
            <ul className='space-y-3'>
              <li><Link href="/" className='text-gray-400 hover:text-amber-400 transition-colors'>Home</Link></li>
              <li><Link href="#features" className='text-gray-400 hover:text-amber-400 transition-colors'>Features</Link></li>
              <li><Link href="#about" className='text-gray-400 hover:text-amber-400 transition-colors'>About</Link></li>
              <li><Link href="#screenshots" className='text-gray-400 hover:text-amber-400 transition-colors'>Screenshots</Link></li>
              <li><Link href="#testimonials" className='text-gray-400 hover:text-amber-400 transition-colors'>Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Legal</h3>
            <ul className='space-y-3'>
              <li>
                <Link href="/PrivacyAndPolicy" className='text-gray-400 hover:text-amber-400 transition-colors'>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/TermsOfService" className='text-gray-400 hover:text-amber-400 transition-colors'>Terms of Service</Link>
              </li>
              <li>
                <a href="mailto:heavenappteam@gmail.com" className='text-gray-400 hover:text-amber-400 transition-colors'>Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Contact</h3>
            <ul className='space-y-3'>
              <li className='text-gray-300'>heavenappteam@gmail.com</li>
              <li className='text-gray-300'>Available 24/7</li>
              <li className='text-gray-300'>iOS & Android</li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>&copy; 2025 HeavenApp. All rights reserved.</p>
          <p className='mt-4 md:mt-0'>Made with care to honor memories</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
