"use client";

import { motion } from "framer-motion";
import { MessageCircle, BrainCircuit, CalendarCheck, BellRing, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-600" />,
    title: "Patient Messages",
    description: "Patient sends a WhatsApp inquiry anytime, day or night.",
    bgColor: "bg-brand-50",
    borderColor: "border-brand-200"
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-purple-600" />,
    title: "AI Responds",
    description: "DentFlow AI instantly replies, answering FAQs or suggesting times.",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-blue-600" />,
    title: "Booking Captured",
    description: "Appointment is confirmed and synced to your clinic system.",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: <BellRing className="h-6 w-6 text-green-600" />,
    title: "Staff Notified",
    description: "Front desk sees the update without lifting a finger.",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }
];

export default function Solution() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="solution">
      {/* Background gradients */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-50 to-transparent pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How DentFlow AI Transforms Your Clinic
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our intelligent WhatsApp assistant handles the heavy lifting, allowing your front desk to focus on providing an excellent in-clinic patient experience.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`bg-white rounded-2xl p-6 border ${step.borderColor} shadow-sm relative h-full flex flex-col items-center text-center`}>
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white ring-4 ring-white ${step.bgColor}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>

                {/* Arrow pointing right (Desktop only) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-8 w-8 bg-white rounded-full items-center justify-center border border-slate-200 shadow-sm text-slate-400">
                    <ArrowRight size={16} />
                  </div>
                )}
                
                {/* Arrow pointing down (Mobile only) */}
                {index < workflowSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 text-slate-300">
                    <div className="h-8 w-px bg-slate-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
