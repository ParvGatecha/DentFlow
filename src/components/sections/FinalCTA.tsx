"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[80px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Transform Your Clinic's <br className="hidden md:block" /> WhatsApp Communication
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 120+ forward-thinking dental clinics that have eliminated missed inquiries, reduced no-shows, and empowered their front desk teams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://calendly.com/gatechaparv/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-brand-500/20">
                Book a Demo
              </Button>
            </Link>
            <Link href="mailto:hello@dentflow.ai" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white">
                Talk to Sales
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">
            No credit card required for demo. Setup takes less than 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
