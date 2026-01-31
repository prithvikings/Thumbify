"use client";
import React, { useState } from "react";
import { Check, X, Zap } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-24 px-6 antialiased font-sans overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/0 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Predictable pricing, <br />
            <span className="text-zinc-500">professional results.</span>
          </h2>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${!isAnnual ? "bg-zinc-100 text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${isAnnual ? "bg-zinc-100 text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-white"}`}
            >
              Yearly{" "}
              <span className="text-[10px] text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-1">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* The Monolith Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-zinc-800 bg-zinc-950 divide-y md:divide-y-0 md:divide-x divide-zinc-800 overflow-hidden shadow-2xl shadow-black">
          {/* PLAN 1: FREE (The "Base" Layer) */}
          <div className="p-8 md:p-12 flex flex-col h-full hover:bg-zinc-900/30 transition-colors duration-300">
            <div className="mb-8">
              <h3 className="text-zinc-400 font-medium text-sm tracking-wide uppercase mb-4">
                Starter
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-zinc-200 tracking-tighter">
                  $0
                </span>
                <span className="text-zinc-600 text-sm">/mo</span>
              </div>
              <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                Perfect for hobbyists and testing the waters. No credit card
                required.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <FeatureItem text="3 Credits per month" />
              <FeatureItem text="AI Concept Generator" />
              <FeatureItem text="Standard Export (1080p)" />
              <FeatureItem text="Community Support" />
              <FeatureItem text="Custom Brand Kits" included={false} />
              <FeatureItem text="4K Upscaling" included={false} />
            </ul>

            <button className="w-full py-3 rounded-lg text-sm font-medium border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-all bg-transparent cursor-pointer">
              Get Started
            </button>
          </div>

          {/* PLAN 2: PRO (The "Spotlight" Layer) */}
          <div className="relative p-8 md:p-12 flex flex-col h-full bg-zinc-900/20">
            {/* Radial Highlight Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-medium text-sm tracking-wide uppercase">
                  Pro Creator
                </h3>
                <span className="bg-zinc-100 text-zinc-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  POPULAR
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tighter">
                  {isAnnual ? "$15" : "$19"}
                </span>
                <span className="text-zinc-500 text-sm">/mo</span>
              </div>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                For serious creators who need brand consistency and highest
                quality exports.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              <FeatureItem text="Unlimited Generations" highlight />
              <FeatureItem text="Custom Face & Font Training" highlight />
              <FeatureItem text="4K Professional Exports" highlight />
              <FeatureItem text="Priority GPU Queue" highlight />
              <FeatureItem text="Commercial License" />
              <FeatureItem text="Private Mode" />
            </ul>

            <button className="group relative w-full py-3 rounded-lg  bg-gradient-to-b from-zinc-800 to-zinc-900 border-t border-zinc-700 border-b border-black border-x border-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.4)] transition-all duration-200 hover:from-zinc-700 hover:to-zinc-800 hover:border-t-zinc-600 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.5)] active:translate-y-[1px] cursor-pointer">
              <span className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-100">
                <Zap
                  size={16}
                  className="fill-yellow-500 text-yellow-500 glow-sm"
                />
                Upgrade to Pro
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  text: string;
  included?: boolean;
  highlight?: boolean;
}

// Sub-component for cleaner code
const FeatureItem = ({
  text,
  included = true,
  highlight = false,
}: FeatureItemProps) => {
  return (
    <li className="flex items-start gap-3">
      {included ? (
        <div
          className={`mt-0.5 rounded-full p-0.5 ${highlight ? "bg-zinc-100 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}
        >
          <Check size={10} strokeWidth={4} />
        </div>
      ) : (
        <X size={14} className="text-zinc-700 mt-0.5" />
      )}
      <span
        className={`text-sm ${included ? (highlight ? "text-white font-medium" : "text-zinc-300") : "text-zinc-600 line-through"}`}
      >
        {text}
      </span>
    </li>
  );
};

export default Pricing;
