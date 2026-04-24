import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6 text-center">
      <header className="max-w-4xl">
        <h1 className="text-6xl font-extrabold text-blue-900 mb-6 tracking-tight">
          Dental OS
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          The comprehensive operating system for modern dental practices. 
          Streamlining workflows, enhancing patient care, and digitizing the clinic experience.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#access" 
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Access
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 hover:bg-blue-50 transition-all"
          >
            Learn More
          </a>
        </div>
      </header>
      <footer className="absolute bottom-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Dental OS. All rights reserved.
      </footer>
    </div>
  );
}
