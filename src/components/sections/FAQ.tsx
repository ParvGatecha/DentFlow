"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does DentFlow AI replace my front desk staff?",
    answer: "Not at all. DentFlow AI is designed to support your receptionists, not replace them. By handling repetitive questions and routine bookings, it frees your staff to focus on patients currently in the clinic and complex administrative tasks."
  },
  {
    question: "Is patient data secure and private?",
    answer: "Yes. We take security seriously. All data is encrypted at rest and in transit. Our infrastructure is GDPR-ready and follows strict healthcare data compliance standards to ensure patient information is protected."
  },
  {
    question: "Can my staff monitor the WhatsApp conversations?",
    answer: "Absolutely. Your team gets access to a centralized dashboard where they can see all ongoing AI conversations in real-time. If a patient has a complex medical question, staff can seamlessly take over the chat."
  },
  {
    question: "Does it support Arabic?",
    answer: "Yes, DentFlow AI natively understands and responds in both Arabic and English, making it perfect for clinics in the UAE, Kuwait, and across the GCC."
  },
  {
    question: "How long does the setup take?",
    answer: "Typically, we can have your clinic fully onboarded and live within 48 hours. Our team handles the technical setup, WhatsApp API integration, and initial prompt customization."
  },
  {
    question: "Can we customize the AI's responses?",
    answer: "Yes. During onboarding, we train the AI on your specific clinic guidelines, prices, location details, and preferred tone of voice so it sounds exactly like your brand."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know about integrating DentFlow AI into your clinic.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors ${openIndex === index ? 'border-brand-500 bg-brand-50/50' : 'border-slate-200 bg-white hover:border-brand-300'}`}
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180 text-brand-600" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
