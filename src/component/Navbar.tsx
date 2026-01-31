import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 flex items-center justify-between sticky top-0 bg-neutral-950 px-8 z-50">
      <div>
        <h1 className="cursor-pointer">thumbfiy</h1>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-sm cursor-pointer">Home</p>
        <p className="text-sm cursor-pointer">Price</p>
        <p className="text-sm cursor-pointer">Blog</p>
      </div>
      <Link href="/login">
        <button
          className="
    group relative 
    px-4 py-1.5 
    rounded-md 
    text-sm font-medium text-zinc-100 
    transition-all duration-300
    
    /* 1. THE BASE & VOLUME: Subtle vertical gradient to suggest curve */
    bg-gradient-to-b from-zinc-800 to-zinc-900
    
    /* 2. THE EDGES: Darker border to define the shape */
    border border-zinc-800
    
    /* 3. THE DEPTH (The Magic): Top inner white highlight + Bottom outer shadow */
    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),_0_1px_2px_0_rgba(0,0,0,0.4)]
    
    /* Hover State: Brighten the top rim and lift the button */
    hover:border-zinc-700
    hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),_0_4px_12px_0_rgba(0,0,0,0.5)]
    hover:from-zinc-700 hover:to-zinc-800
    
    /* Active State: Press it 'into' the screen */
    active:shadow-none
    active:translate-y-[1px]
    cursor-pointer
  "
        >
          <span className="relative flex items-center gap-2">
            Open Studio
            <svg
              className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
