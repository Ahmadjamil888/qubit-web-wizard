
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AtomIcon, BookOpen, CircuitBoard, Code, Server } from 'lucide-react';

const features = [
  {
    icon: <CircuitBoard className="h-12 w-12 text-quantum-600" />,
    title: 'Interactive Circuit Builder',
    description: 'Create quantum circuits using a drag-and-drop interface. Visualize gates and operations in real-time.'
  },
  {
    icon: <AtomIcon className="h-12 w-12 text-quantum-600" />,
    title: 'Quantum Simulator',
    description: 'Run your quantum circuits in a browser-based simulator and observe quantum states and measurement results.'
  },
  {
    icon: <BookOpen className="h-12 w-12 text-quantum-600" />,
    title: 'Educational Resources',
    description: 'Access curated resources to learn quantum computing concepts, algorithms, and Qiskit programming.'
  },
  {
    icon: <Code className="h-12 w-12 text-quantum-600" />,
    title: 'Qiskit Integration',
    description: 'Explore the power of Qiskit directly in your browser, with code examples and interactive tutorials.'
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Quantum Computing</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the powerful features that make quantum computing accessible to everyone, 
            from beginners to experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
