
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        
        {/* Quantum Computing Overview */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Quantum Computing?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Quantum computing is a type of computation that harnesses the phenomena of quantum mechanics, 
                  such as superposition and entanglement, to perform operations on data.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or "qubits" 
                  that can exist in multiple states simultaneously, allowing them to solve certain problems much faster 
                  than classical computers.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Potential applications include cryptography, optimization problems, drug discovery, 
                  material science, and artificial intelligence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-quantum-50 to-quantum-100 dark:from-quantum-900 dark:to-quantum-950 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Quantum Concepts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-quantum-600 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">1</span>
                    <div>
                      <span className="font-semibold block mb-1">Superposition</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Qubits can exist in multiple states at once, unlike classical bits.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-quantum-600 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">2</span>
                    <div>
                      <span className="font-semibold block mb-1">Entanglement</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Quantum states become correlated, allowing instantaneous interaction regardless of distance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-quantum-600 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">3</span>
                    <div>
                      <span className="font-semibold block mb-1">Quantum Gates</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Operations that manipulate qubits, similar to classical logic gates but with quantum properties.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-quantum-600 text-white rounded-full w-6 h-6 mr-3 mt-0.5 flex-shrink-0">4</span>
                    <div>
                      <span className="font-semibold block mb-1">Quantum Measurement</span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">The act of observing a quantum system, which causes it to collapse to a definite state.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Qiskit Introduction */}
        <section className="py-20 bg-quantum-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Introducing Qiskit</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Qiskit is an open-source software development kit for working with quantum computers 
                at the level of circuits, pulses, and algorithms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm font-mono">
{`# Example Qiskit code for a simple quantum circuit
from qiskit import QuantumCircuit, transpile, Aer, execute
from qiskit.visualization import plot_histogram

# Create a Quantum Circuit with 2 qubits
qc = QuantumCircuit(2, 2)

# Add a Hadamard gate to qubit 0
qc.h(0)

# Add a CNOT gate with control qubit 0 and target qubit 1
qc.cx(0, 1)

# Measure qubits
qc.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()

# Get the measurement counts
counts = result.get_counts(qc)
print(counts)`}
              </pre>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
