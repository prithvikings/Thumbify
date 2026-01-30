import { FileText, Sparkles, Download, Brain, Palette } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 font-sans antialiased text-zinc-900">
      {/* Header Section */}
      <div className="mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
          Workflow
        </span>
        <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl text-zinc-400">
          How it works
        </h2>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col gap-8">
        {/* Top Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Paste Script",
              desc: "Simply drop your video script or outline. Our AI parses the key emotional hooks.",
              icon: <FileText size={24} strokeWidth={1.5} />,
              bgIcon: "bg-zinc-100",
              textIcon: "text-zinc-900",
            },
            {
              title: "2. AI Concepts",
              desc: "Get 3 distinct high-CTR visual directions generated specifically for your niche.",
              icon: <Sparkles size={24} strokeWidth={1.5} />,
              bgIcon: "bg-zinc-800",
              textIcon: "text-zinc-100",
            },
            {
              title: "3. Export",
              desc: "Refine, add your brand kit, and export in 4K resolution directly to your studio.",
              icon: <Download size={24} strokeWidth={1.5} />,
              bgIcon: "bg-zinc-100",
              textIcon: "text-zinc-900",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-8 border border-dashed border-zinc-700/50 rounded-2xl transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/20"
            >
              <div>
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bgIcon} ${item.textIcon} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="font-medium mb-3 text-lg text-zinc-200">
                  {item.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Partition: Centered, subtle, and not full-width */}
        <div className="relative w-full flex justify-center py-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="absolute -top-2 bg-black px-4 text-zinc-700 text-xs tracking-widest uppercase">
            Core Features
          </div>
        </div>

        {/* Bottom Row: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex flex-col justify-between p-8 border border-dashed border-zinc-700/50 rounded-2xl transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/20">
            <div>
              <Brain className="text-zinc-100 mb-6 size-10 stroke-1" />
              <h3 className="font-medium mb-3 text-lg text-zinc-200">
                Contextual Awareness
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
                Our AI doesn't just make images. It understands "The Hook," "The
                Conflict," and "The Resolution."
              </p>
            </div>
          </div>

          <div className="group flex flex-col justify-between p-8 border border-dashed border-zinc-700/50 rounded-2xl transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/20">
            <div>
              <Palette className="text-zinc-100 mb-6 size-10 stroke-1" />
              <h3 className="font-medium mb-3 text-lg text-zinc-200">
                Brand Consistency
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
                Upload your face and fonts once. ThumbAI learns your aesthetic
                and ensures every thumbnail matches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
