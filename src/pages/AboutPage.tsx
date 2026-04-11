import React from "react";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg text-white/80 leading-relaxed">
          This is a generic template for your application. You can customize
          this section to describe your brand, mission, and values.
        </p>
        <p className="text-lg text-white/80 leading-relaxed">
          Built with React, Tailwind CSS, and Framer Motion, this template
          provides a solid foundation for building modern, responsive web
          applications.
        </p>
      </div>
    </div>
  );
};
