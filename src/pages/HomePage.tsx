import React from "react";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-8 tracking-tight font-medium">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Your New Project
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          This is a basic template designed to help you get started quickly. It
          includes a responsive layout, modern styling, and essential
          components. Customize this page to fit your specific needs.
        </p>
      </div>
    </div>
  );
};
