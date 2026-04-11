import React from 'react';
import { Button } from '@/components/ui/button';

export const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-3xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-white/80 leading-relaxed">Have questions or need assistance? Reach out to us!</p>
        
        <form className="space-y-4 mt-8 text-left">
          <div>
            <label htmlFor="contactName" className="block text-white/70 text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="contactName"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-white/70 text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="contactEmail"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="contactMessage" className="block text-white/70 text-sm font-medium mb-2">Message</label>
            <textarea
              id="contactMessage"
              rows={5}
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <Button type="submit" className="w-full mt-6" variant="primary">Send Message</Button>
        </form>
      </div>
    </div>
  );
};
