'use client';

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='center h-screen w-screen flex-col gap-3 bg-white'>
      <h2 className='font-bold text-lg text-black'>Requested Page Not Found</h2>
      <p className="text-black">Could not find the page you are looking for</p>
      <Link href="/">
        <button className='bg-blue px-6 py-4 rounded-lg text-white text-sm'>
            Go Back Home
        </button>
      </Link>
    </div>
  )
}