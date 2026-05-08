"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "120+", label: "Clinics Onboarded" },
  { value: "50k+", label: "Patient Conversations" },
  { value: "98%", label: "Faster Response Time" },
  { value: "24/7", label: "Automated Comms" }
];

export default function SocialProof() {
  return (
    <section className="bg-brand-600 border-y border-brand-700 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-brand-100 font-medium text-sm md:text-base">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
