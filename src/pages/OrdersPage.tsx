import React from "react";

export const OrdersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">Your Orders</h1>
        <p className="text-lg text-white/80 leading-relaxed">
          Track your past and current orders here.
        </p>

        <div className="space-y-4 mt-8">
          <div className="flex items-center justify-between bg-sky-900/30 border border-sky-400/20 rounded-xl p-4">
            <div className="text-left">
              <p className="font-semibold text-white">Order #12345</p>
              <p className="text-sm text-white/70">Date: 2023-10-26</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">$59.98</p>
              <p className="text-sm text-sky-400">Delivered</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-sky-900/30 border border-sky-400/20 rounded-xl p-4">
            <div className="text-left">
              <p className="font-semibold text-white">Order #12346</p>
              <p className="text-sm text-white/70">Date: 2023-11-15</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">$29.99</p>
              <p className="text-sm text-sky-400">Processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
