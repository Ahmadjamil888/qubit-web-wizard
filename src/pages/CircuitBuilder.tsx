
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CircuitVisualizer from '@/components/CircuitVisualizer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface Gate {
  id: string;
  type: 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'SWAP';
  qubit: number;
  targetQubit?: number;
  position: number;
}

const CircuitBuilder = () => {
  const { toast } = useToast();
  const [numQubits, setNumQubits] = useState(3);
  const [gates, setGates] = useState<Gate[]>([
    { id: '1', type: 'H', qubit: 0, position: 1 },
    { id: '2', type: 'CNOT', qubit: 0, targetQubit: 1, position: 2 },
    { id: '3', type: 'X', qubit: 2, position: 3 },
  ]);
  const [selectedGateType, setSelectedGateType] = useState<Gate['type']>('H');
  const [selectedQubit, setSelectedQubit] = useState(0);
  const [selectedTargetQubit, setSelectedTargetQubit] = useState(1);
  const [gatePosition, setGatePosition] = useState(0);
  const [simulationResult, setSimulationResult] = useState<Record<string, number> | null>(null);

  const addGate = () => {
    const newGate: Gate = {
      id: Date.now().toString(),
      type: selectedGateType,
      qubit: selectedQubit,
      position: gatePosition,
    };
    
    if (selectedGateType === 'CNOT' || selectedGateType === 'SWAP') {
      newGate.targetQubit = selectedTargetQubit;
    }
    
    setGates([...gates, newGate]);
    
    toast({
      title: "Gate Added",
      description: `Added ${selectedGateType} gate to qubit ${selectedQubit}`,
    });
  };

  const clearCircuit = () => {
    setGates([]);
    toast({
      title: "Circuit Cleared",
      description: "All gates have been removed",
    });
  };

  const simulateCircuit = () => {
    // In a real app, this would connect to a WebAssembly Qiskit simulator
    // For now, we'll simulate an ideal Bell state result for demo purposes
    const mockResults: Record<string, number> = {
      '00': 500,
      '11': 500,
    };
    
    setSimulationResult(mockResults);
    
    toast({
      title: "Simulation Complete",
      description: "Circuit simulated successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Quantum Circuit Builder</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Design your quantum circuit by adding gates and running simulations.
            </p>
          </div>
          
          <Tabs defaultValue="builder" className="mb-8">
            <TabsList>
              <TabsTrigger value="builder">Circuit Builder</TabsTrigger>
              <TabsTrigger value="results">Simulation Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="builder">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Circuit Design</CardTitle>
                      <CardDescription>
                        Visualize your quantum circuit with gates and connections.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CircuitVisualizer qubits={numQubits} gates={gates} />
                      
                      <div className="flex justify-end space-x-4 mt-6">
                        <Button variant="outline" onClick={clearCircuit}>
                          Clear Circuit
                        </Button>
                        <Button onClick={simulateCircuit}>
                          Run Simulation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Circuit Controls</CardTitle>
                      <CardDescription>
                        Add gates and configure your circuit.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="numQubits">Number of Qubits</Label>
                        <Input
                          id="numQubits"
                          type="number"
                          value={numQubits}
                          onChange={(e) => setNumQubits(Number(e.target.value))}
                          min={1}
                          max={10}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="gateType">Gate Type</Label>
                        <Select
                          value={selectedGateType}
                          onValueChange={(value) => setSelectedGateType(value as Gate['type'])}
                        >
                          <SelectTrigger id="gateType" className="mt-1">
                            <SelectValue placeholder="Select gate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="H">Hadamard (H)</SelectItem>
                            <SelectItem value="X">Pauli-X (NOT)</SelectItem>
                            <SelectItem value="Y">Pauli-Y</SelectItem>
                            <SelectItem value="Z">Pauli-Z</SelectItem>
                            <SelectItem value="CNOT">CNOT</SelectItem>
                            <SelectItem value="SWAP">SWAP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="qubit">Qubit</Label>
                        <Select
                          value={selectedQubit.toString()}
                          onValueChange={(value) => setSelectedQubit(Number(value))}
                        >
                          <SelectTrigger id="qubit" className="mt-1">
                            <SelectValue placeholder="Select qubit" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: numQubits }).map((_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                Qubit {i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {(selectedGateType === 'CNOT' || selectedGateType === 'SWAP') && (
                        <div>
                          <Label htmlFor="targetQubit">Target Qubit</Label>
                          <Select
                            value={selectedTargetQubit.toString()}
                            onValueChange={(value) => setSelectedTargetQubit(Number(value))}
                          >
                            <SelectTrigger id="targetQubit" className="mt-1">
                              <SelectValue placeholder="Select target qubit" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: numQubits }).map((_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  Qubit {i}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      
                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          type="number"
                          value={gatePosition}
                          onChange={(e) => setGatePosition(Number(e.target.value))}
                          min={0}
                          className="mt-1"
                        />
                      </div>
                      
                      <Button onClick={addGate} className="w-full">
                        Add Gate
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Simulation Results</CardTitle>
                  <CardDescription>
                    View the output probabilities of your quantum circuit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {simulationResult ? (
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2">Measurement Probabilities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {Object.entries(simulationResult).map(([state, count]) => (
                            <div key={state} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <div className="text-2xl font-mono font-bold mb-1">{state}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Count: {count}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Probability: {(count / 1000).toFixed(3)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-quantum-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Analysis</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          This looks like a Bell state (|00⟩ + |11⟩)/√2, which is a perfect 
                          entanglement between two qubits. This state is commonly created by applying 
                          a Hadamard gate to one qubit followed by a CNOT gate.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        No simulation results yet. Run a simulation to see the output.
                      </p>
                      <Button onClick={simulateCircuit}>
                        Run Simulation
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CircuitBuilder;
