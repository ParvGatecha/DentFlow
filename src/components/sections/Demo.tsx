"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Send } from "lucide-react";

export default function Demo() {
  const [messages, setMessages] = useState([
    { sender: "patient", text: "Hi, I want an appointment tomorrow" },
    { sender: "ai", text: "Sure! I can help with that. Which time works best for you?", delay: 1000 },
    { sender: "ai", text: "I have 10:00 AM or 3:30 PM available tomorrow.", delay: 1500 }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsg = { sender: "patient", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    
    if (step === 1) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "ai", text: "Perfect! 10:00 AM is locked in. Could you please provide your full name?", delay: 0 }]);
        setStep(2);
      }, 1000);
    } else if (step === 2) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "ai", text: "Thanks! Your appointment is confirmed for tomorrow at 10:00 AM. We'll send a reminder 24 hours before.", delay: 0 }]);
        setStep(3);
      }, 1000);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="demo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              See DentFlow AI in Action
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Experience exactly what your patients will see. Our intelligent assistant processes natural language, understands intent, and books appointments seamlessly.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4">Try the interactive demo:</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-6">
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                  <span>Respond with your preferred time (e.g., "10 AM")</span>
                </li>
                <li className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                  <span>Provide a name when asked</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md mx-auto">
            {/* Phone Mockup */}
            <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-800">
              {/* Phone screen */}
              <div className="bg-[#EFEAE2] rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] relative">
                
                {/* Header */}
                <div className="bg-[#005c4b] text-white px-6 pt-12 pb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 shrink-0">
                    <MessageSquareText size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Pearl Dental Clinic</div>
                    <div className="text-xs text-brand-100">Online</div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3" style={{ backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png")', opacity: 0.9 }}>
                  <div className="bg-[#E1F6Cb] text-slate-900 rounded-lg rounded-tr-none p-2 text-sm self-end max-w-[80%] shadow-sm">
                    Hi, I want an appointment tomorrow
                    <span className="text-[10px] text-slate-500 float-right mt-2 ml-2">10:00</span>
                  </div>
                  
                  <AnimatePresence>
                    {messages.slice(1).map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: msg.delay ? msg.delay / 1000 : 0.2 }}
                        className={`text-sm rounded-lg p-2 max-w-[80%] shadow-sm ${
                          msg.sender === "ai" 
                            ? "bg-white rounded-tl-none self-start" 
                            : "bg-[#E1F6Cb] rounded-tr-none self-end"
                        }`}
                      >
                        {msg.text}
                        <span className="text-[10px] text-slate-500 float-right mt-2 ml-2">10:01</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="bg-[#f0f2f5] p-2 flex gap-2 items-center">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Type a message" 
                      className="w-full bg-transparent outline-none text-sm"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      disabled={step === 3}
                    />
                  </div>
                  <button 
                    className="w-10 h-10 bg-[#005c4b] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-[#004a3c] transition-colors"
                    onClick={handleSend}
                    disabled={step === 3}
                  >
                    <Send size={18} className="-ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
