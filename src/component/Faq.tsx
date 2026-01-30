"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the AI generate concepts?",
      answer:
        "Our model analyzes the emotional arc and pacing of your script. It then cross-references this with current high-performing visual trends in your specific niche to generate 3 unique visual directions.",
    },
    {
      question: "What resolution are the exports?",
      answer:
        "All paid plans support native 4K export at 60fps. The Free plan is limited to 1080p, which is still optimized for mobile viewing on TikTok and Instagram.",
    },
    {
      question: "Can I use my own brand assets?",
      answer:
        "Yes. You can upload your own fonts, logos, and color palettes. Our AI will automatically apply these constraints to every generated frame to ensure brand consistency.",
    },
    {
      question: "Do I own the commercial rights?",
      answer:
        "Absolutely. You retain full commercial ownership of all videos generated on the Pro plan. Free plan generations are licensed under CC-BY 4.0.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "We offer a 7-day money-back guarantee if you haven't used more than 10 generations. We believe in our product, but we understand if it's not the right fit for your workflow.",
    },
  ];

  return (
    <section className="py-24 px-6 font-sans antialiased bg-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-100 mb-4">
            Common Questions
          </h2>
          <p className="text-zinc-400 text-base">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-zinc-800">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group border-b border-zinc-800">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-medium transition-colors duration-200 ${
                    openIndex === idx
                      ? "text-zinc-100"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-6">
                  <Plus
                    className={`h-5 w-5 transition-transform duration-300 ease-out ${
                      openIndex === idx
                        ? "rotate-45 text-zinc-100"
                        : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 opacity-100 pb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base text-zinc-500 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
