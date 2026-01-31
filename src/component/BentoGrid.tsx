import {
  FileText,
  Sparkles,
  Download,
  Brain,
  Palette,
  ArrowRight,
} from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="relative w-full py-24 px-6 font-sans antialiased selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Background Ambience (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-zinc-700" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">
              Workflow
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            From Script to{" "}
            <span className="text-zinc-400">Viral Thumbnail.</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            Our engine deconstructs your content into visual hooks. It’s not
            just generation; it’s architectural design for click-through rates.
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col gap-6">
          {/* Top Row: The 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Paste Script",
                desc: "Drop your video outline. The parser extracts emotional hooks and key entities.",
                icon: <FileText size={20} />,
              },
              {
                step: "02",
                title: "AI Visualization",
                desc: "Generates 3 distinct visual compositions based on high-performing niche data.",
                icon: <Sparkles size={20} />,
                highlight: true, // Special styling for the 'Magic' step
              },
              {
                step: "03",
                title: "Export & Ship",
                desc: "Auto-upscale to 4K. Apply brand fonts. Push directly to YouTube Studio.",
                icon: <Download size={20} />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  group relative flex flex-col p-6 h-full
                  rounded-xl border
                  transition-all duration-300
                  ${
                    item.highlight
                      ? "bg-zinc-900/80 border-zinc-700 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                      : "bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                  }
                `}
              >
                {/* Icon Container */}
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`
                    p-3 rounded-lg border 
                    ${
                      item.highlight
                        ? "bg-zinc-800 border-zinc-600 text-white"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700"
                    }
                    transition-colors duration-300
                  `}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* The Technical Divider */}
          <div className="flex items-center gap-4 py-8 opacity-50">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
              System Capabilities
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>

          {/* Bottom Row: Large Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Context Card */}
            <div className="group relative p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Brain size={120} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-6">
                  <Brain size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Contextual Awareness
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    Most generators just layer pixels. ThumbAI understands
                    narrative structure, effectively visualizing abstract
                    concepts like "conflict" or "growth."
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Card */}
            <div className="group relative p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Palette size={120} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-6">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Design System Enforcement
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    Upload your typography and face models once. The engine
                    treats them as immutable constraints, ensuring 100% brand
                    consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
