import React from 'react';
import { Button } from '@/components/ui/button';

export const CheckoutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-3xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">Checkout</h1>
        <p className="text-lg text-white/80 leading-relaxed">Enter your shipping and payment details to complete your order.</p>
        
        <form className="space-y-6 mt-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">Shipping Information</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input type="text" placeholder="Address Line 1" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input type="text" placeholder="City" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="State/Province" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                <input type="text" placeholder="Zip/Postal Code" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">Payment Information</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Card Number" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <div className="grid grid-cols-3 gap-3">
                <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                <input type="text" placeholder="CVC" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                <input type="text" placeholder="ZIP" className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              </div>
            </div>
          </div>
          
          <Button type="submit" variant="primary" className="w-full mt-6">Place Order</Button>
        </form>
      </div>
    </div>
  );
};
