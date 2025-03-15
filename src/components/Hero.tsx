
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AtomIcon, CircuitBoard } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background with Quantum Patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-quantum-950 to-quantum-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* SVG Quantum Patterns */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center bg-quantum-800/30 px-3 py-1 rounded-full text-quantum-200 text-sm mb-2">
              <AtomIcon className="h-4 w-4 mr-2" />
              <span>Powered by Qiskit</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quantum Computing in Your Browser
            </h1>
            <p className="text-lg text-quantum-100/80 max-w-xl">
              Explore the fascinating world of quantum computation with interactive
              circuits, simulations, and educational resources.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/circuit">
                <Button size="lg" className="bg-quantum-600 hover:bg-quantum-700">
                  <CircuitBoard className="mr-2 h-5 w-5" />
                  Build a Circuit
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Quantum Sphere Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-quantum-600/20 animate-quantum-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-quantum-500/30 animate-quantum-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-quantum-400/40 animate-quantum-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Central Atom */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AtomIcon size={64} className="text-white" />
              </div>

              {/* Orbiting Electrons */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                <div className="h-full w-1 flex items-center justify-center relative">
                  <div className="absolute top-0 w-4 h-4 bg-quantum-300 rounded-full"></div>
                  <div className="absolute bottom-0 w-4 h-4 bg-quantum-300 rounded-full"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '15s', transform: 'rotate(60deg)' }}>
                <div className="h-full w-1 flex items-center justify-center relative">
                  <div className="absolute top-0 w-4 h-4 bg-quantum-400 rounded-full"></div>
                  <div className="absolute bottom-0 w-4 h-4 bg-quantum-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
