import React from "react";
import { Star, Twitter } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "YouTuber (1.2M Subs)",
      handle: "@arivera",
      content:
        "I was skeptical about AI thumbnails, but the emotive matching is scary good. My CTR went from 4.5% to 7.2% on the first video.",
      avatar: "AR",
    },
    {
      name: "Sarah Chen",
      role: "Growth Lead @ Vercel",
      handle: "@sarah_ship",
      content:
        "The brand consistency feature is the killer app. It actually looks like *my* design system, not generic stock photos. Huge time saver.",
      avatar: "SC",
    },
    {
      name: "Marcus J.",
      role: "Filmmaker",
      handle: "@marcus_film",
      content:
        "Finally, a tool that understands 'pacing' in a script. The visual concepts matched my storyboard perfectly.",
      avatar: "MJ",
    },
    {
      name: "David Park",
      role: "Agency Owner",
      handle: "@dpark_social",
      content:
        "We replaced our entire ideation phase with this. Clients are blown away by the speed of our pitch decks now.",
      avatar: "DP",
    },
    {
      name: "Emily R.",
      role: "Content Creator",
      handle: "@emily_creates",
      content:
        "I used to spend 4 hours on thumbnails. Now I spend 15 minutes refining what the AI gives me. It pays for itself instantly.",
      avatar: "ER",
    },
    {
      name: "James L.",
      role: "Tech Reviewer",
      handle: "@tech_jim",
      content:
        "The 4K export quality is actually usable for print. I didn't expect that level of detail from a web app.",
      avatar: "JL",
    },
  ];

  return (
    <section className="py-24 px-6 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full bg-zinc-900/50">
            Community
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight text-zinc-100">
            Trusted by the best
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Join thousands of creators who have accelerated their workflow.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              {/* User Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm font-medium ring-2 ring-black">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200 leading-none">
                      {item.name}
                    </h4>
                    <span className="text-xs text-zinc-500">{item.role}</span>
                  </div>
                </div>
                <Twitter className="h-4 w-4 text-zinc-600" />
              </div>

              {/* Content */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                "{item.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-zinc-200 text-zinc-200"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
