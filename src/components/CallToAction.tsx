
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-quantum-900 to-quantum-800 text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Quantum Journey?
        </h2>
        <p className="text-lg text-quantum-100/80 max-w-2xl mx-auto mb-10">
          Build your first quantum circuit, run simulations, and learn the fundamentals 
          of quantum computing all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/circuit">
            <Button size="lg" className="bg-white text-quantum-900 hover:bg-gray-200">
              Try Circuit Builder
            </Button>
          </Link>
          <Link to="/resources">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
