"use client";

import { motion } from "framer-motion";
import { 
  CalendarPlus, 
  BellRing, 
  RefreshCcw, 
  MessageSquareReply, 
  LayoutDashboard, 
  Globe2, 
  BarChart3, 
  Magnet, 
  GitMerge, 
  Moon
} from "lucide-react";

const features = [
  {
    icon: <CalendarPlus className="h-6 w-6" />,
    title: "Appointment Booking",
    description: "Allow patients to book directly through WhatsApp, checking real-time availability."
  },
  {
    icon: <BellRing className="h-6 w-6" />,
    title: "Automated Reminders",
    description: "Send smart reminders to drastically reduce patient no-shows and late cancellations."
  },
  {
    icon: <RefreshCcw className="h-6 w-6" />,
    title: "Follow-Up Campaigns",
    description: "Automatically reach out to patients for post-treatment check-ins or routine checkups."
  },
  {
    icon: <MessageSquareReply className="h-6 w-6" />,
    title: "FAQ Automation",
    description: "Instantly answer common questions about location, insurance, and clinic hours."
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Clinic Dashboard",
    description: "A centralized view for your staff to monitor chats and take over when necessary."
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Multi-language Support",
    description: "Converse fluently in English, Arabic, and other languages tailored to the GCC."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics",
    description: "Track response times, message volume, and conversion rates seamlessly."
  },
  {
    icon: <Magnet className="h-6 w-6" />,
    title: "Lead Capture",
    description: "Automatically collect patient details from new WhatsApp inquiries."
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: "Smart Routing",
    description: "Direct complex or emergency medical queries instantly to human staff."
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "After-hours Replies",
    description: "Never leave a patient hanging. Capture bookings even when the clinic is closed."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Everything You Need to Manage Patient Comms
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A complete suite of tools designed exclusively for the operational needs of modern dental clinics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
