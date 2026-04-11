import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export const CartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-3xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">
          Your Shopping Cart
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          Review your selected items before proceeding to checkout.
        </p>

        <div className="space-y-4 mt-8">
          <div className="flex items-center justify-between bg-sky-900/30 border border-sky-400/20 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-sky-800/50 rounded-lg flex items-center justify-center text-sky-400/70">
                IMG
              </div>
              <div>
                <p className="font-semibold text-white">Minimal Tee</p>
                <p className="text-sm text-white/70">Size: M, Color: Black</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">$29.99</p>
              <p className="text-sm text-white/70">Qty: 1</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-xl font-bold text-white pt-4 border-t border-sky-400/20">
            <span>Total:</span>
            <span>$29.99</span>
          </div>
        </div>
        <NavLink to="/checkout">
          <Button variant="primary" className="w-full mt-6">
            Proceed to Checkout
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
