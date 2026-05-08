"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Dr. Ahmed Al-Mutairi",
    role: "Lead Dentist",
    clinic: "Pearl Dental Kuwait",
    initials: "AA",
    quote: "DentFlow AI helped us handle WhatsApp inquiries much faster during peak hours. Our front desk team spends far less time answering repetitive booking questions now."
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    clinic: "Smile Clinic London",
    initials: "SW",
    quote: "The automated reminders have almost completely eliminated our no-shows. Patients appreciate the quick replies, and we appreciate the seamless dashboard."
  },
  {
    name: "Dr. Faisal Al-Harbi",
    role: "Clinic Director",
    clinic: "Elite Aesthetics Riyadh",
    initials: "FA",
    quote: "Implementing DentFlow AI was the best operational decision we made this year. Capturing leads after hours has paid for the software 10x over."
  },
  {
    name: "Noor Hassan",
    role: "Patient Coordinator",
    clinic: "Lumina Smiles Dubai",
    initials: "NH",
    quote: "It's literally like having an extra receptionist who works 24/7. It handles all the basic inquiries in both Arabic and English perfectly."
  },
  {
    name: "Dr. James Carter",
    role: "Orthodontist",
    clinic: "Carter Ortho UK",
    initials: "JC",
    quote: "For Invisalign patients, the follow-up campaigns run on autopilot. It keeps our patients engaged and our schedule full."
  },
  {
    name: "Fatima Al-Sayed",
    role: "Clinic Manager",
    clinic: "Oasis Dental Bahrain",
    initials: "FA",
    quote: "The interface is so easy for our team to use. If a case is complex, staff can seamlessly jump into the WhatsApp chat and take over from the AI."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="testimonials">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Premium Clinics Worldwide
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            See how forward-thinking dental practices are using DentFlow AI to upgrade their patient experience and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-200 text-[15px] leading-relaxed flex-1 mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="h-10 w-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-sm shrink-0 border border-brand-500/30">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-400">{testimonial.role}, <span className="text-brand-400">{testimonial.clinic}</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
