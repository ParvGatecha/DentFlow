"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "79",
    currency: "USD",
    period: "/month",
    description: "Perfect for single-doctor clinics just starting out.",
    features: [
      "Up to 500 WhatsApp conversations",
      "Automated Appointment Booking",
      "Standard Reminders",
      "Basic Dashboard Access",
      "Email Support"
    ],
    buttonText: "Start Free Trial",
    highlighted: false
  },
  {
    name: "Growth",
    price: "189",
    currency: "USD",
    period: "/month",
    description: "Ideal for growing clinics with multiple dentists.",
    features: [
      "Unlimited WhatsApp conversations",
      "Advanced Reminders & Follow-ups",
      "Multi-language Support (Ar/En)",
      "Full Analytics Dashboard",
      "Priority Onboarding Support",
      "Custom FAQ Automation"
    ],
    buttonText: "Get Started",
    highlighted: true
  },
  {
    name: "Premium",
    price: "Custom",
    currency: "",
    period: "",
    description: "For clinic chains and premium aesthetic centers.",
    features: [
      "Everything in Growth",
      "Multi-branch Routing",
      "EHR/PMS Integration",
      "Dedicated Account Manager",
      "Custom WhatsApp Workflows",
      "White-labeled Dashboard"
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Choose the plan that fits your clinic's needs. All plans include standard WhatsApp integration and our core AI engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.highlighted 
                  ? "border-2 border-brand-500 shadow-xl scale-105 z-10" 
                  : "border border-slate-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.currency && <span className="text-lg font-semibold text-slate-600">{plan.currency}</span>}
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlighted ? "default" : "outline"} 
                className="w-full h-12"
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
