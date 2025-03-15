
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Simulator = () => {
  const { toast } = useToast();
  const [code, setCode] = useState(`# Create a simple Bell state circuit
from qiskit import QuantumCircuit, transpile, Aer, execute
from qiskit.visualization import plot_histogram

# Create a 2-qubit circuit
qc = QuantumCircuit(2, 2)

# Apply Hadamard gate to qubit 0
qc.h(0)

# Apply CNOT gate with control qubit 0 and target qubit 1
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()

# Get and print the results
counts = result.get_counts(qc)
print(counts)`);
  
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate the output (in a real app, this would use a WebAssembly Qiskit simulator)
    setTimeout(() => {
      setOutput("Running Qiskit quantum circuit simulation...\n\nInitializing quantum circuit with 2 qubits and 2 classical bits...\nApplying Hadamard gate to qubit 0...\nApplying CNOT gate from qubit 0 to qubit 1...\nMeasuring qubits...\nExecuting simulation with 1000 shots...\n\nSimulation Results:\n{'00': 498, '11': 502}\n\nCircuit successfully executed! The results show the quantum state is in a Bell state with approximately equal probabilities for |00⟩ and |11⟩.");
      setIsRunning(false);
      
      toast({
        title: "Simulation Complete",
        description: "Quantum circuit simulation finished successfully",
      });
    }, 2000);
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Quantum Simulator</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Write Qiskit code and run quantum simulations directly in your browser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Qiskit Code Editor</CardTitle>
                <CardDescription>
                  Write your quantum circuit code using Qiskit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="font-mono h-96 mb-4"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your Qiskit code here..."
                />
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={clearCode}>
                    Clear
                  </Button>
                  <Button 
                    onClick={runSimulation} 
                    disabled={isRunning}
                  >
                    {isRunning ? "Running..." : "Run Simulation"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Simulation Output</CardTitle>
                <CardDescription>
                  Results and output from your quantum simulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 font-mono p-4 rounded-md h-96 overflow-auto">
                  {output ? output : <span className="text-gray-500">Output will appear here...</span>}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Example Circuits</CardTitle>
              <CardDescription>
                Explore these example quantum circuits to learn Qiskit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="bell">
                <TabsList className="mb-4">
                  <TabsTrigger value="bell">Bell State</TabsTrigger>
                  <TabsTrigger value="grover">Grover's Algorithm</TabsTrigger>
                  <TabsTrigger value="teleport">Quantum Teleportation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bell">
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md font-mono text-sm overflow-x-auto">
{`# Bell State Circuit
from qiskit import QuantumCircuit, transpile, Aer, execute
from qiskit.visualization import plot_histogram

# Create quantum circuit with 2 qubits and 2 classical bits
qc = QuantumCircuit(2, 2)

# Apply Hadamard gate to qubit 0
qc.h(0)

# Apply CNOT with qubit 0 as control and qubit 1 as target
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()

# Get the measurement counts
counts = result.get_counts(qc)
print(counts)`}
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    This circuit creates a Bell state, which is a maximally entangled state between two qubits. 
                    The result should show approximately equal probabilities for measuring |00⟩ and |11⟩.
                  </p>
                </TabsContent>
                
                <TabsContent value="grover">
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md font-mono text-sm overflow-x-auto">
{`# Simple Grover's Algorithm for 2 qubits
from qiskit import QuantumCircuit, transpile, Aer, execute
from qiskit.visualization import plot_histogram

# Create a 2-qubit Grover's circuit
qc = QuantumCircuit(2, 2)

# Apply Hadamard gates to both qubits
qc.h([0, 1])

# Oracle - mark the |11> state with a phase flip
qc.cz(0, 1)  # Controlled-Z gate

# Diffusion operator (amplification)
qc.h([0, 1])
qc.x([0, 1])
qc.cz(0, 1)
qc.x([0, 1])
qc.h([0, 1])

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()

# Get the measurement counts
counts = result.get_counts(qc)
print(counts)`}
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    This implements a simple version of Grover's algorithm for 2 qubits, 
                    which is a quantum search algorithm. It amplifies the probability of 
                    finding the marked state |11⟩.
                  </p>
                </TabsContent>
                
                <TabsContent value="teleport">
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md font-mono text-sm overflow-x-auto">
{`# Quantum Teleportation
from qiskit import QuantumCircuit, transpile, Aer, execute
from qiskit.visualization import plot_histogram

# Create quantum circuit with 3 qubits and 2 classical bits
qc = QuantumCircuit(3, 2)

# Prepare the state to teleport (qubit 0)
qc.h(0)  # Create superposition
qc.p(0.4, 0)  # Add a phase

# Create entanglement between qubits 1 and 2
qc.h(1)
qc.cx(1, 2)

# Bell measurement between qubits 0 and 1
qc.cx(0, 1)
qc.h(0)

# Measure qubits 0 and 1
qc.measure([0, 1], [0, 1])

# Apply corrections to qubit 2 based on measurements
qc.cx(1, 2)
qc.cz(0, 2)

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()

# Get the measurement counts
counts = result.get_counts(qc)
print(counts)`}
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    This circuit demonstrates quantum teleportation, which transfers a quantum state 
                    from one qubit to another using entanglement and classical communication.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Simulator;
