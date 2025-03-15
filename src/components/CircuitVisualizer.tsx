
import React from 'react';
import { Card } from '@/components/ui/card';

interface Gate {
  id: string;
  type: 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'SWAP';
  qubit: number;
  targetQubit?: number;
  position: number;
}

interface CircuitVisualizerProps {
  qubits: number;
  gates: Gate[];
}

const CircuitVisualizer: React.FC<CircuitVisualizerProps> = ({ qubits = 3, gates = [] }) => {
  // Maximum gate position for determining circuit width
  const maxPosition = Math.max(...gates.map(gate => gate.position), 5);
  
  // Helper to check if a gate exists at a specific position and qubit
  const getGateAt = (qubit: number, position: number) => {
    return gates.find(gate => 
      gate.qubit === qubit && 
      gate.position === position
    );
  };
  
  // Helper to check if a qubit is involved in a CNOT or SWAP as a target
  const isTargetAt = (qubit: number, position: number) => {
    return gates.find(gate => 
      (gate.type === 'CNOT' || gate.type === 'SWAP') && 
      gate.targetQubit === qubit && 
      gate.position === position
    );
  };
  
  // Helper to determine if a control line should be drawn at a position between qubits
  const hasControlLine = (position: number, startQubit: number, endQubit: number) => {
    return gates.some(gate => 
      (gate.type === 'CNOT' || gate.type === 'SWAP') &&
      gate.position === position &&
      ((gate.qubit === startQubit && gate.targetQubit === endQubit) ||
       (gate.qubit === endQubit && gate.targetQubit === startQubit))
    );
  };
  
  // Render a gate based on its type
  const renderGate = (gate: Gate) => {
    switch(gate.type) {
      case 'H':
        return (
          <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
            H
          </div>
        );
      case 'X':
        return (
          <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center text-white font-bold">
            X
          </div>
        );
      case 'Y':
        return (
          <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
            Y
          </div>
        );
      case 'Z':
        return (
          <div className="w-10 h-10 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
            Z
          </div>
        );
      case 'CNOT':
        if (gate.targetQubit !== undefined && gate.qubit === gate.targetQubit) return null;
        return (
          <div className="w-10 h-10 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        );
      case 'SWAP':
        if (gate.targetQubit !== undefined && gate.qubit === gate.targetQubit) return null;
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 bg-teal-500 transform rotate-45"></div>
              <div className="absolute inset-0 bg-teal-500 transform -rotate-45"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  // Render a target for CNOT gate
  const renderTarget = (gate: Gate) => {
    if (gate.type === 'CNOT') {
      return (
        <div className="w-10 h-10 rounded-full border-4 border-orange-500 flex items-center justify-center">
          <div className="w-8 h-1 bg-orange-500"></div>
          <div className="w-1 h-8 bg-orange-500 absolute"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6 overflow-x-auto max-w-full">
      <div className="min-w-max">
        {Array.from({ length: qubits }).map((_, qubitIndex) => (
          <div 
            key={`qubit-${qubitIndex}`} 
            className="flex items-center h-16 border-b border-gray-200 last:border-b-0"
          >
            {/* Qubit label */}
            <div className="w-12 font-mono font-bold text-center">
              q<sub>{qubitIndex}</sub>
            </div>
            
            {/* Circuit line with gates */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-1/2 w-full h-0.5 bg-gray-300"></div>
              
              <div className="flex">
                {Array.from({ length: maxPosition + 1 }).map((_, posIndex) => {
                  const gate = getGateAt(qubitIndex, posIndex);
                  const isTarget = isTargetAt(qubitIndex, posIndex);
                  
                  return (
                    <div 
                      key={`pos-${posIndex}`} 
                      className="w-16 h-16 flex items-center justify-center relative"
                    >
                      {gate && renderGate(gate)}
                      {isTarget && renderTarget(isTarget)}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Measurement */}
            <div className="w-12 text-center">
              <div className="inline-block w-6 h-6 border border-gray-500 rounded-sm"></div>
            </div>
          </div>
        ))}
        
        {/* Render control lines between qubits */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Control lines would be rendered here in a real implementation */}
        </div>
      </div>
    </Card>
  );
};

export default CircuitVisualizer;
