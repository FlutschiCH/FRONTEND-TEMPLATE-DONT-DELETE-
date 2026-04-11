import React from "react";
import { Button } from "@/components/ui/button";

export const ProductDetailPage = () => {
  const productId = "123";

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">
          Product: Minimal Tee
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          A high-quality, comfortable minimalist t-shirt. Perfect for everyday
          wear.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-sky-900/30 border border-sky-400/20 rounded-[1.5rem] p-6 text-sky-400/70 h-80 flex items-center justify-center">
            Product Image Placeholder
          </div>
          <div className="text-left space-y-4">
            <p className="text-3xl font-bold text-sky-400">$29.99</p>
            <p className="text-white/70">
              Size: <span className="font-semibold">M</span>
            </p>
            <p className="text-white/70">
              Color: <span className="font-semibold">Black</span>
            </p>
            <p className="text-white/70">Material: 100% Organic Cotton</p>
            <Button variant="primary" className="w-full mt-6">
              Add to Cart
            </Button>
            <Button variant="secondary" className="w-full">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
