import React from 'react'

const Hero = () => {
  return (
    <div className='py-16'>
      <h1 className='text-5xl font-medium max-w-xl text-neutral-100 font-spacegrotesk'>Viral thumbnails. <br /> Zero design skills required.</h1>
      <p className='max-w-lg mt-4 text-neutral-500'>Generate high-CTR thumbnails directly from your script.</p>
      <div className='btn flex gap-4 mt-8'>
        <button className='bg-neutral-900 px-2 py-1.5 text-sm cursor-pointer'>Create Now</button>
        <button className='bg-neutral-300 text-neutral-900 text-sm px-2 py-1.5 cursor-pointer'>Features</button>
      </div>
      <p className='text-neutral-700 text-xs mt-2 font-medium'>No credit card required. Join 500+ creators.</p>
      <div className='mt-16 h-[96vh] bg-gray-300 w-full rounded-md'></div>
    </div>
  )
}

export default Hero

