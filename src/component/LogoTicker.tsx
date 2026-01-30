// components/LogoTicker.tsx
"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Acme Corp", src: "/logos/acme.svg" },
  { name: "Echo Valley", src: "/logos/echo.svg" },
  { name: "Quantum", src: "/logos/quantum.svg" },
  { name: "Pulse", src: "/logos/pulse.svg" },
  { name: "Outside", src: "/logos/outside.svg" },
  { name: "Apex", src: "/logos/apex.svg" },
];

const LogoTicker = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
            Trusted by top creators
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-14 pr-14"
          >
            {[...logos, ...logos].map((logo, idx) => (
              /* Replace this text with actual <img /> tags when you have assets */
              <h3
                key={idx}
                className="text-xl text-zinc-300 font-medium whitespace-nowrap"
              >
                {logo.name}
              </h3>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
