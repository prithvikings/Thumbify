
const Navbar = () => {
  return (
    <div className='py-4 flex items-center justify-between sticky top-0 bg-neutral-950 px-8 z-50'>
      <div><h1 className='cursor-pointer'>thumbfiy</h1></div>
      <div className='flex items-center gap-8'>
        <p className='text-sm cursor-pointer'>Home</p>
        <p className='text-sm cursor-pointer'>Price</p>
        <p className='text-sm cursor-pointer'>Blog</p>
      </div>
      <div>
        <button className='px-2 py-1.5 bg-red-500 rounded-sm text-sm hover:bg-red-600 cursor-pointer inset-shadow-2xs font-medium'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar