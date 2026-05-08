import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MessageSquareText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
            <MessageSquareText size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">DentFlow AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-brand-600 transition-colors">Features</Link>
          <Link href="#solution" className="hover:text-brand-600 transition-colors">How it Works</Link>
          <Link href="#testimonials" className="hover:text-brand-600 transition-colors">Testimonials</Link>
          <Link href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#demo" className="hidden md:block text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            Log in
          </Link>
          <Link href="https://calendly.com/gatechaparv/30min" target="_blank" rel="noopener noreferrer">
            <Button size="sm">Book Demo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
