"use client";

import { motion } from "framer-motion";
import { Clock, Users, XCircle, MessagesSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const painPoints = [
  {
    icon: <Clock className="h-6 w-6 text-orange-500" />,
    title: "Delayed Replies",
    description: "Patients wait hours for a simple response, leading to frustration and lost bookings.",
    bgColor: "bg-orange-50"
  },
  {
    icon: <Users className="h-6 w-6 text-red-500" />,
    title: "Overwhelmed Staff",
    description: "Front desk teams spend hours answering repetitive questions instead of focusing on in-clinic patients.",
    bgColor: "bg-red-50"
  },
  {
    icon: <XCircle className="h-6 w-6 text-purple-500" />,
    title: "Missed Inquiries",
    description: "After-hours messages and weekend inquiries slip through the cracks, directly impacting your bottom line.",
    bgColor: "bg-purple-50"
  },
  {
    icon: <MessagesSquare className="h-6 w-6 text-blue-500" />,
    title: "Manual Handling",
    description: "Copy-pasting appointment reminders and follow-ups leads to errors and inconsistent communication.",
    bgColor: "bg-blue-50"
  }
];

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Is Your Clinic Losing Patients to Slow Replies?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Managing WhatsApp manually is inefficient. While your staff is busy with patients in the clinic, digital inquiries pile up, leading to a poor patient experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${point.bgColor}`}>
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="px-4 py-4 md:py-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">73%</div>
              <p className="text-sm font-medium text-slate-600">of patients expect fast messaging responses</p>
            </div>
            <div className="px-4 py-4 md:py-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">3x</div>
              <p className="text-sm font-medium text-slate-600">higher no-show rate without automated reminders</p>
            </div>
            <div className="px-4 py-4 md:py-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">80%</div>
              <p className="text-sm font-medium text-slate-600">of clinics still manually handle WhatsApp chats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
