
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code, ExternalLink, FileText, Laptop, Video } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Explore these carefully curated resources to deepen your understanding of 
              quantum computing and learn how to use Qiskit effectively.
            </p>
          </div>
          
          <Tabs defaultValue="beginners">
            <TabsList className="mb-6">
              <TabsTrigger value="beginners">Beginners</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="qiskit">Qiskit Documentation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginners">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Tutorial</span>
                    </div>
                    <CardTitle>Quantum Computing for Beginners</CardTitle>
                    <CardDescription>
                      A gentle introduction to the fundamental concepts of quantum computing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      This comprehensive tutorial covers the basics of quantum mechanics, 
                      qubits, superposition, entanglement, and simple quantum algorithms.
                    </p>
                    <a 
                      href="https://qiskit.org/learn/intro-qc-qs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Read tutorial 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Video className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Video Series</span>
                    </div>
                    <CardTitle>Quantum Computing Explained</CardTitle>
                    <CardDescription>
                      A video series explaining quantum computing principles with simple animations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      This engaging video series breaks down complex quantum concepts 
                      into easy-to-understand explanations with helpful visualizations.
                    </p>
                    <a 
                      href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Watch videos 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Laptop className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Interactive</span>
                    </div>
                    <CardTitle>Hello Quantum</CardTitle>
                    <CardDescription>
                      An interactive game that teaches quantum computing principles through puzzles.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Learn quantum mechanics through gameplay. This interactive experience 
                      teaches you how quantum gates work by solving increasingly complex puzzles.
                    </p>
                    <a 
                      href="https://helloquantum.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Play now 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Code className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Getting Started</span>
                    </div>
                    <CardTitle>Your First Qiskit Program</CardTitle>
                    <CardDescription>
                      Learn how to write your first quantum program using Qiskit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A step-by-step guide to creating your first quantum circuit, 
                      running a simulation, and analyzing the results using Qiskit.
                    </p>
                    <a 
                      href="https://qiskit.org/documentation/getting_started.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Start coding 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Tutorial</span>
                    </div>
                    <CardTitle>Quantum Algorithms</CardTitle>
                    <CardDescription>
                      An overview of key quantum algorithms and their applications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Explore important quantum algorithms like Shor's, Grover's, and VQE, 
                      with explanations of their theoretical foundations and implementations.
                    </p>
                    <a 
                      href="https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Read tutorial 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Research Paper</span>
                    </div>
                    <CardTitle>Quantum Machine Learning</CardTitle>
                    <CardDescription>
                      Introduction to the intersection of quantum computing and machine learning.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Discover how quantum computing can enhance machine learning algorithms, 
                      with examples of quantum neural networks and clustering algorithms.
                    </p>
                    <a 
                      href="https://arxiv.org/abs/1802.06002" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Read paper 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Laptop className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Course</span>
                    </div>
                    <CardTitle>Quantum Error Correction</CardTitle>
                    <CardDescription>
                      Learn about protecting quantum information from errors and decoherence.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      This course explains quantum error correction codes, fault tolerance, 
                      and how to implement error correction in real quantum systems.
                    </p>
                    <a 
                      href="https://qiskit.org/textbook/ch-quantum-hardware/error-correction.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Start learning 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Research</span>
                    </div>
                    <CardTitle>Quantum Optimization</CardTitle>
                    <CardDescription>
                      Advanced techniques for solving optimization problems with quantum computers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Explore QAOA, VQE, and quantum annealing for solving complex optimization 
                      problems in logistics, finance, and materials science.
                    </p>
                    <a 
                      href="https://qiskit.org/textbook/ch-applications/qaoa.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Read research 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Textbook</span>
                    </div>
                    <CardTitle>Quantum Information Theory</CardTitle>
                    <CardDescription>
                      Mathematical foundations of quantum information and computation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Comprehensive coverage of quantum information theory, including 
                      quantum channels, entropy, and quantum error correction theorems.
                    </p>
                    <a 
                      href="https://arxiv.org/abs/quant-ph/0208131" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      Access textbook 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Code className="h-5 w-5 mr-2 text-quantum-600" />
                      <span className="text-sm font-medium text-quantum-600">Advanced Programming</span>
                    </div>
                    <CardTitle>Custom Quantum Transpilers</CardTitle>
                    <CardDescription>
                      Creating optimized quantum circuit compilations for specific hardware.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Learn how to develop custom transpilers in Qiskit to optimize 
                      quantum circuits for different quantum hardware architectures.
                    </p>
                    <a 
                      href="https://qiskit.org/documentation/apidoc/transpiler.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-quantum-600 hover:text-quantum-700"
                    >
                      View documentation 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="qiskit">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Qiskit Resources</CardTitle>
                      <CardDescription>
                        Official documentation and resources for Qiskit
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <a 
                        href="https://qiskit.org/documentation/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <BookOpen className="h-5 w-5 mr-3 text-quantum-600" />
                        <div>
                          <div className="font-medium">Official Documentation</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">API reference and guides</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://qiskit.org/textbook" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <FileText className="h-5 w-5 mr-3 text-quantum-600" />
                        <div>
                          <div className="font-medium">Qiskit Textbook</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Comprehensive learning resource</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://github.com/Qiskit/qiskit-tutorials" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Code className="h-5 w-5 mr-3 text-quantum-600" />
                        <div>
                          <div className="font-medium">Tutorials Repository</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Jupyter notebooks with examples</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://qiskit.org/slack" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Laptop className="h-5 w-5 mr-3 text-quantum-600" />
                        <div>
                          <div className="font-medium">Qiskit Community</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Join the Slack workspace</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started with Qiskit</CardTitle>
                      <CardDescription>
                        Follow these steps to begin your quantum programming journey
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-quantum-100 dark:bg-quantum-900 text-quantum-600 font-bold mr-4">
                            1
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">Installation</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Install Qiskit using pip:
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-sm mb-2">
                              pip install qiskit
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              This installs the core Qiskit packages for quantum circuit building and simulation.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-quantum-100 dark:bg-quantum-900 text-quantum-600 font-bold mr-4">
                            2
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">Create Your First Circuit</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Build a simple quantum circuit:
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-sm mb-2">
{`from qiskit import QuantumCircuit

# Create a circuit with 2 qubits
qc = QuantumCircuit(2)

# Add gates
qc.h(0)      # Hadamard gate on qubit 0
qc.cx(0, 1)  # CNOT gate with control=0, target=1

# Draw the circuit
print(qc.draw())`}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-quantum-100 dark:bg-quantum-900 text-quantum-600 font-bold mr-4">
                            3
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">Run a Simulation</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Execute your circuit on a simulator:
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-sm mb-2">
{`from qiskit import Aer, execute

# Add measurement
qc.measure_all()

# Get the simulator backend
simulator = Aer.get_backend('qasm_simulator')

# Run the circuit
result = execute(qc, simulator, shots=1000).result()

# Get and print the results
counts = result.get_counts(qc)
print(counts)`}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-quantum-100 dark:bg-quantum-900 text-quantum-600 font-bold mr-4">
                            4
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">Next Steps</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                              Continue your learning journey:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                              <li>Explore the Qiskit textbook for detailed tutorials</li>
                              <li>Experiment with different quantum algorithms</li>
                              <li>Join the Qiskit community on Slack to connect with other learners</li>
                              <li>Try our circuit builder and simulator on this website</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
