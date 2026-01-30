// components/ImageModal.tsx
import { X, Download, Share2, Wand2, Maximize2 } from "lucide-react";

const ImageModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* 1. Dark Backdrop with Blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* 2. The Modal Content */}
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button (Absolute) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* LEFT: The Image (Hero) */}
        <div className="flex-1 bg-black flex items-center justify-center p-8 relative group">
          {/* Mock Image */}
          <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 relative overflow-hidden">
            <span className="text-zinc-700 font-mono text-xs">
              4K PREVIEW RENDERING...
            </span>
            {/* Overlay Actions */}
            <div className="absolute bottom-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
                <Download size={16} />
                Download PNG
              </button>
              <button className="p-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 border border-zinc-700">
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: The Metadata & Actions */}
        <div className="w-full md:w-80 border-l border-zinc-800 bg-zinc-900/50 p-6 flex flex-col">
          <h3 className="text-lg font-medium text-white mb-1">
            Cyberpunk City
          </h3>
          <p className="text-xs text-zinc-500 mb-6">Generated 2 mins ago</p>

          <div className="space-y-6 flex-1">
            {/* Prompt Data */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Prompt
              </label>
              <p className="text-sm text-zinc-300 leading-relaxed bg-black/20 p-3 rounded-md border border-zinc-800/50">
                A futuristic city with flying cars, neon lights, high contrast,
                cinematic lighting, 8k resolution.
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Ratio
                </label>
                <p className="text-sm text-zinc-300 mt-1">16:9</p>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Model
                </label>
                <p className="text-sm text-zinc-300 mt-1">V4.2 (Pro)</p>
              </div>
            </div>
          </div>

          {/* Actions Footer */}
          <div className="mt-auto space-y-3 pt-6 border-t border-zinc-800">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-100 text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
              <Wand2 size={16} />
              Upscale to 8K (1 Credit)
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-transparent border border-zinc-700 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
              <Share2 size={16} />
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
