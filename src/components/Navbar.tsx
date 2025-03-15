
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AtomIcon, BookOpen, CircuitBoard, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 border-b bg-white dark:bg-gray-950">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <AtomIcon size={32} className="text-quantum-700" />
          <span className="text-2xl font-bold text-quantum-900 dark:text-quantum-100">QuantumLab</span>
        </Link>
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center">
              <Home className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Link to="/circuit">
            <Button variant="ghost" className="flex items-center">
              <CircuitBoard className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Circuit</span>
            </Button>
          </Link>
          <Link to="/simulator">
            <Button variant="ghost" className="flex items-center">
              <AtomIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Simulator</span>
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="ghost" className="flex items-center">
              <BookOpen className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Resources</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
