import React from "react";
// Use the @ alias to point directly to the src folder
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
