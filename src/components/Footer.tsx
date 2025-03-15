
import React from 'react';
import { AtomIcon, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-quantum-950 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AtomIcon size={24} className="text-quantum-400" />
              <span className="text-xl font-bold">QuantumLab</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Exploring quantum computing concepts with Qiskit and bringing quantum simulations to your browser.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/circuit" className="text-gray-400 hover:text-white transition">Circuit Builder</a></li>
              <li><a href="/simulator" className="text-gray-400 hover:text-white transition">Simulator</a></li>
              <li><a href="/resources" className="text-gray-400 hover:text-white transition">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/qiskit" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/qiskit" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              Learn more about Qiskit at <a href="https://qiskit.org" target="_blank" rel="noopener noreferrer" 
                                           className="text-quantum-400 hover:text-quantum-300 transition">qiskit.org</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} QuantumLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
