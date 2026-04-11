import React from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] p-6">
      <div className="bg-sky-950/20 border border-sky-400/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-md mx-auto text-center space-y-6 tracking-tight font-medium">
        <h1 className="text-4xl font-bold text-white mb-4">Join Us!</h1>
        <p className="text-lg text-white/80 leading-relaxed">Create an account to manage your orders and profile.</p>
        <form className="space-y-4 text-left">
          <div>
            <label htmlFor="username" className="block text-white/70 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="yourusername"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white/70 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-white/70 text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 rounded-xl bg-sky-900/30 border border-sky-400/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full mt-6" variant="primary">Sign Up</Button>
        </form>
        <p className="text-white/70 text-sm mt-4">Already have an account? <NavLink to="/login" className="text-sky-400 hover:underline">Log In</NavLink></p>
      </div>
    </div>
  );
};