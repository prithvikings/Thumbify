import React from "react";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        { text: "3 Credits per month", included: true },
        { text: "AI Concept Generator", included: true },
        { text: "No custom Brand Kits", included: false },
        { text: "Standard Export Quality", included: false },
      ],
      button: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "19",
      features: [
        { text: "Unlimited Generations", included: true },
        { text: "Custom Face & Font Training", included: true },
        { text: "4K Professional Exports", included: true },
        { text: "Priority GPU Queue", included: true },
      ],
      button: "Upgrade Now",
      featured: true,
    },
  ];

  return (
    <section className="py-24 px-6 antialiased font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl">
            Simple Pricing
          </h2>
          <p className="mt-2 text-zinc-500 text-sm">
            Start for free, upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-10 bg-zinc-950 transition-colors duration-500 ${
                plan.featured ? "bg-zinc-950" : "bg-zinc-950/50"
              }`}
            >
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${plan.featured ? "text-white" : "text-zinc-500"}`}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="text-[10px] font-bold border border-zinc-700 text-zinc-300 px-2 py-0.5 rounded-md bg-zinc-900">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-6xl font-medium tracking-tighter text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-600 text-sm font-mono">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check
                        size={16}
                        className="text-zinc-100 mt-0.5"
                        strokeWidth={3}
                      />
                    ) : (
                      <X size={16} className="text-zinc-800 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included ? "text-zinc-300" : "text-zinc-600"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "bg-zinc-100 text-black hover:bg-white"
                    : "bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
