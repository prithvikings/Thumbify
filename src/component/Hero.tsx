import React from "react";

const Hero = () => {
  return (
    <div className="py-16">
      <h1 className="text-5xl font-medium max-w-xl text-neutral-100 font-spacegrotesk">
        Viral thumbnails. <br /> Zero design skills required.
      </h1>
      <p className="max-w-lg mt-4 text-neutral-500">
        Generate high-CTR thumbnails directly from your script.
      </p>
      <div className="flex items-center gap-4 mt-8">
        {/* 1. PRIMARY BUTTON: The "Hardware" Feel */}
        <button
          className="
      group relative px-4 py-1.5 
      rounded-md 
      text-sm font-semibold text-zinc-100 
      bg-zinc-900
      border border-zinc-800
      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)]
      transition-all duration-200
      
      hover:bg-zinc-800 
      hover:border-zinc-700
      hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.5)]
      hover:-translate-y-[1px]
      
      active:translate-y-[0px] active:shadow-none
      cursor-pointer
    "
        >
          <div className="flex items-center gap-2">
            <span>Create Now</span>
            {/* Tiny arrow accent */}
            <svg
              className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                transform="rotate(180 12 12)"
              />
            </svg>
          </div>
        </button>

        {/* 2. SECONDARY BUTTON: The "Etched" Feel */}
        <button
          className="
      px-4 py-1.5 
      rounded-md 
      text-sm font-medium text-zinc-400 
      bg-transparent
      border border-zinc-800/50
      transition-all duration-200
      
      hover:text-zinc-200 
      hover:bg-zinc-900/50 
      hover:border-zinc-700
      cursor-pointer
    "
        >
          Features
        </button>
      </div>
      <p className="text-neutral-700 text-xs mt-2 font-medium">
        No credit card required. Join 500+ creators.
      </p>
      <div className="mt-16 h-[96vh] bg-gray-300 w-full rounded-md"></div>
    </div>
  );
};

export default Hero;
