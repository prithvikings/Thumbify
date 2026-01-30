"use client";

import React, { useState } from "react";
import {
  Maximize2,
  MoreHorizontal,
  Download,
  Share2,
  RefreshCw,
  Image as ImageIcon,
  Type,
  Wand2,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const ProjectEditor = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeRatio, setActiveRatio] = useState("16:9");

  // Fake "Generating" state toggle for demo
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="flex flex-col h-full bg-black text-zinc-100">
      {/* 1. EDITOR HEADER (Context & Actions) */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center border border-zinc-700 shadow-sm">
            <span className="font-bold text-xs">P</span>
          </div>
          <div>
            <input
              type="text"
              defaultValue="Untitled Project"
              className="bg-transparent text-sm font-medium focus:outline-none text-zinc-100 placeholder:text-zinc-600 w-48 hover:bg-zinc-900/50 rounded px-1 transition-colors"
            />
            <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
              <span>Auto-saved</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-1">
            {["16:9", "9:16", "1:1"].map((ratio) => (
              <button
                key={ratio}
                onClick={() => setActiveRatio(ratio)}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                  activeRatio === ratio
                    ? "bg-zinc-800 text-zinc-100 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-zinc-800 mx-2" />
          <button className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors">
            <Share2 size={16} />
          </button>
          <button className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT COLUMN: Controls & Input */}
        <div className="w-[400px] flex-shrink-0 border-r border-zinc-800 bg-zinc-950/30 flex flex-col overflow-y-auto">
          <div className="p-6 space-y-8">
            {/* Script Input */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <Type size={14} />
                  Script / Concept
                </label>
                <span className="text-xs text-zinc-600">0/500</span>
              </div>
              <textarea
                className="w-full h-40 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 resize-none transition-all"
                placeholder="Describe your video idea... e.g., 'A futuristic city with flying cars, neon lights, cyberpunk style, high contrast.'"
              />
            </div>

            {/* Style Selector */}
            <div className="space-y-4">
              <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Wand2 size={14} />
                Visual Style
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Realistic", "3D Render", "Anime", "Minimalist"].map(
                  (style) => (
                    <button
                      key={style}
                      className="flex items-center justify-start gap-2 px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs hover:border-zinc-600 transition-all text-left group"
                    >
                      <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-zinc-400" />
                      <span className="text-zinc-400 group-hover:text-zinc-200">
                        {style}
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Advanced Toggle */}
            <div className="pt-4 border-t border-zinc-800">
              <button className="flex items-center justify-between w-full text-xs text-zinc-500 hover:text-zinc-300 group">
                <span>Advanced Settings</span>
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Sticky Generate Button */}
          <div className="mt-auto p-6 border-t border-zinc-800 bg-black/20 backdrop-blur-sm sticky bottom-0">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="group relative w-full py-4 bg-zinc-100 text-zinc-950 rounded-lg font-semibold text-sm shadow-xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span
                className={`relative z-10 flex items-center justify-center gap-2 ${isGenerating ? "animate-pulse" : ""}`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles
                      size={16}
                      className="text-purple-600 fill-purple-600"
                    />
                    Generate Concepts
                  </>
                )}
              </span>

              {/* Subtle Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
            <p className="text-center text-[10px] text-zinc-600 mt-3">
              Uses 1 credit per generation.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Gallery / Canvas */}
        <div className="flex-1 bg-black p-8 overflow-y-auto relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          {/* Empty State / Content */}
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-zinc-300">Results</h2>
              <div className="flex gap-2">
                <button className="p-1.5 rounded hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300">
                  <Maximize2 size={16} />
                </button>
                <button className="p-1.5 rounded hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            {isGenerating ? (
              /* Loading Skeletons */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-zinc-900/50 rounded-xl border border-zinc-800 animate-pulse relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent animate-shimmer" />
                    <div className="absolute bottom-4 left-4 right-4 h-4 bg-zinc-800 rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : (
              /* Generated Results Mockup */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Neon City", color: "bg-purple-900/20" },
                  { title: "Cyberpunk Street", color: "bg-blue-900/20" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all cursor-pointer"
                  >
                    {/* Placeholder Image */}
                    <div
                      className={`absolute inset-0 ${item.color} flex items-center justify-center`}
                    >
                      <ImageIcon className="text-zinc-700 w-12 h-12" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="p-3 bg-zinc-100 rounded-full text-black hover:scale-110 transition-transform">
                        <Download size={18} />
                      </button>
                      <button className="p-3 bg-zinc-800 border border-zinc-700 rounded-full text-white hover:scale-110 transition-transform">
                        <Maximize2 size={18} />
                      </button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs font-medium text-zinc-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEditor;
