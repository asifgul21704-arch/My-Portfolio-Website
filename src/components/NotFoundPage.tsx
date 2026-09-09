import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-950 text-white font-sans text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
          404 Error
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Page Not Found
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          The requested page could not be located. Head back to the main portfolio to explore projects and contact information.
        </p>
        <div className="pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-emerald-950/40"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};
