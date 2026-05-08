"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Play, CheckCircle2, MessageSquareText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-28 md:pt-32 md:pb-36">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-20 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="glass" className="mb-6 px-4 py-1.5 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                AI WhatsApp Assistant Built for Dental Clinics
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Automate Patient Communication Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-400">Overloading Your Front Desk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-[600px] leading-relaxed"
          >
            Turn WhatsApp into a 24/7 patient communication system. Handle appointment bookings, reminders, and common inquiries automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-brand-500/25">
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base group">
              <Play className="mr-2 h-4 w-4 group-hover:text-brand-500 transition-colors" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-500" /> WhatsApp Integrated</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-500" /> GDPR Ready</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-500" /> Secure Infrastructure</span>
          </motion.div>
        </div>

        {/* Dashboard / Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-[1000px]"
        >
          <div className="rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-brand-500/10">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white flex flex-col md:flex-row h-[500px]">
              
              {/* Sidebar Mockup */}
              <div className="hidden md:flex w-64 bg-slate-50 border-r border-slate-200 flex-col p-4">
                <div className="h-8 w-24 bg-slate-200 rounded animate-pulse mb-8" />
                <div className="space-y-3">
                  <div className="h-10 bg-white border border-slate-200 rounded flex items-center px-3 gap-3">
                    <div className="w-4 h-4 rounded-full bg-brand-500" />
                    <div className="h-3 w-20 bg-slate-200 rounded" />
                  </div>
                  <div className="h-10 rounded flex items-center px-3 gap-3 opacity-60">
                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                    <div className="h-3 w-16 bg-slate-200 rounded" />
                  </div>
                  <div className="h-10 rounded flex items-center px-3 gap-3 opacity-60">
                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                    <div className="h-3 w-24 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Main Area Mockup */}
              <div className="flex-1 flex flex-col relative bg-slate-50 md:bg-white overflow-hidden">
                <div className="h-16 border-b border-slate-200 bg-white flex items-center px-6">
                  <div className="h-4 w-48 bg-slate-100 rounded" />
                </div>
                
                {/* Chat Mockup bubbles */}
                <div className="flex-1 p-6 space-y-6 overflow-hidden">
                  <div className="flex items-end gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-200" />
                    <div className="bg-slate-100 rounded-2xl rounded-bl-sm p-4 max-w-[80%]">
                      <div className="h-3 w-48 bg-slate-300 rounded mb-2" />
                      <div className="h-3 w-32 bg-slate-200 rounded" />
                    </div>
                  </div>
                  <div className="flex items-end gap-2 justify-end">
                    <div className="bg-brand-500 text-white rounded-2xl rounded-br-sm p-4 max-w-[80%] shadow-md shadow-brand-500/20">
                      <div className="text-sm">Hi! I'm DentFlow AI. I see you'd like to book an appointment. Would you prefer morning or afternoon?</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 border border-brand-200">
                      <MessageSquareText size={14} />
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-200" />
                    <div className="bg-slate-100 rounded-2xl rounded-bl-sm p-4 max-w-[80%]">
                      <div className="text-sm text-slate-700">Tomorrow morning if possible!</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 justify-end">
                     <div className="bg-brand-500 text-white rounded-2xl rounded-br-sm p-4 max-w-[80%] shadow-md shadow-brand-500/20">
                      <div className="text-sm">Perfect. I have 9:30 AM or 11:00 AM available with Dr. Ahmed. Which works better for you?</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 border border-brand-200">
                      <MessageSquareText size={14} />
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="absolute bottom-6 right-6 glass-card rounded-lg p-4 w-64 shadow-xl flex items-start gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">New Appointment Booked</p>
                    <p className="text-xs text-slate-300 mt-1">Sarah W. at 9:30 AM tomorrow</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
