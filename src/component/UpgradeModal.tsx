// components/UpgradeModal.tsx
import { Check, Zap } from "lucide-react";

const UpgradeModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Sidebar: The "Why" */}
        <div className="w-full md:w-2/5 bg-zinc-900 p-8 flex flex-col justify-between border-r border-zinc-800">
          <div>
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-blue-500 fill-blue-500" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Go Pro</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Unlock the full potential of ThumbAI. Higher resolution, faster
              speeds, and commercial rights.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-3">
              Trusted By
            </p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content: The Plans */}
        <div className="w-full md:w-3/5 p-8 bg-black">
          <div className="space-y-4">
            {/* Plan Option */}
            <label className="flex items-center justify-between p-4 border border-blue-600 bg-blue-900/10 rounded-xl cursor-pointer hover:bg-blue-900/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-white">Creator Pro</p>
                  <p className="text-xs text-blue-200">Best for individuals</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">$19</p>
                <p className="text-[10px] text-zinc-400">/month</p>
              </div>
            </label>

            {/* Features List */}
            <ul className="space-y-3 pt-4">
              {[
                "Unlimited Generations",
                "Commercial License",
                "Priority GPU Access",
                "Private Mode",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <Check size={16} className="text-blue-500" />
                  {feat}
                </li>
              ))}
            </ul>

            <button className="w-full mt-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
              Upgrade Now
            </button>
            <p className="text-center text-xs text-zinc-600 mt-3">
              Cancel anytime. 7-day money back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
