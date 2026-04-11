import React from "react";
import { Button } from "@/components/ui/button";

export const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-5xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">Our Collection</h1>
        <p className="text-lg text-white/80 leading-relaxed">
          Explore our latest minimalist designs and find your perfect style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-sky-900/30 border border-sky-400/20 rounded-[1.5rem] p-6 text-sky-400/70 h-64 flex flex-col items-center justify-center space-y-2">
            <p className="font-semibold">Minimal Tee</p>
            <p className="text-sm">$29.99</p>
            <Button variant="primary" className="mt-4">
              View Details
            </Button>
          </div>
          <div className="bg-sky-900/30 border border-sky-400/20 rounded-[1.5rem] p-6 text-sky-400/70 h-64 flex flex-col items-center justify-center space-y-2">
            <p className="font-semibold">Ocean Hoodie</p>
            <p className="text-sm">$59.99</p>
            <Button variant="primary" className="mt-4">
              View Details
            </Button>
          </div>
          <div className="bg-sky-900/30 border border-sky-400/20 rounded-[1.5rem] p-6 text-sky-400/70 h-64 flex flex-col items-center justify-center space-y-2">
            <p className="font-semibold">Deep Dive Jeans</p>
            <p className="text-sm">$79.99</p>
            <Button variant="primary" className="mt-4">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
