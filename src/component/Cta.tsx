import React from "react";
import { MoveRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-24 px-4 font-sans antialiased">
      <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-zinc-950 border border-zinc-800 overflow-hidden px-8 py-24 md:px-20 md:py-32 text-center">
        {/* Subtle Background Glow - Pure Zinc */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="max-w-3xl text-4xl md:text-7xl font-medium tracking-tighter text-white mb-8">
            Ready to render?
          </h2>

          <p className="max-w-xl text-lg text-zinc-400 mb-12 leading-relaxed">
            Join 10,000+ creators using AI to automate their studio. No credit
            card required for the first 3 drafts.
          </p>

          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full text-lg font-semibold tracking-tight transition-transform duration-300 hover:scale-105 active:scale-95">
            <span>Start Generating</span>
            <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

            {/* Inner Button Highlight */}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-zinc-950" />
          </button>

          <p className="mt-8 text-xs font-mono text-zinc-600 uppercase tracking-widest">
            System Status: <span className="text-zinc-400">Online</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
