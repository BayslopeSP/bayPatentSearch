import { Patent, SearchPayload } from '@/types/patent';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export async function searchPatents(payload: SearchPayload): Promise<Patent[]> {
  const res = await fetch(`${API_BASE_URL}/patent-search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch patents');
  }

  return res.json();
}

// Mock data for development
export const mockPatents: Patent[] = [
  {
    id: '1',
    title: 'Machine Learning System for Image Recognition in Medical Diagnostics',
    abstract: 'A novel machine learning system utilizing deep neural networks for automated image recognition in medical diagnostic applications. The system employs convolutional neural networks with attention mechanisms to analyze medical imagery including X-rays, MRIs, and CT scans with high accuracy.',
    claims: '1. A computer-implemented method for analyzing medical images comprising: receiving a medical image input; processing the image through a trained convolutional neural network; generating diagnostic predictions based on learned patterns; and outputting confidence scores for identified conditions.',
    description: 'The present invention relates to artificial intelligence systems for healthcare applications. Specifically, it describes a deep learning architecture optimized for medical image analysis that can detect abnormalities with accuracy comparable to trained radiologists.',
    assignee: 'MedTech AI Corporation',
    inventor: 'Dr. Sarah Chen, Dr. Michael Roberts',
    applicationDate: '2024-03-15',
  },
  {
    id: '2',
    title: 'Natural Language Processing Engine for Patent Document Analysis',
    abstract: 'An advanced NLP engine specifically designed for parsing and analyzing patent documents. The system uses transformer-based models to extract key claims, identify prior art references, and generate semantic embeddings for similarity matching across patent databases.',
    claims: '1. A method for automated patent analysis comprising: tokenizing patent document text; applying domain-specific language models; extracting structured claim information; and computing similarity scores against existing patent corpus.',
    description: 'This invention addresses the challenge of analyzing large patent portfolios efficiently. By leveraging state-of-the-art language models fine-tuned on patent-specific text, the system can automatically categorize patents, identify potential infringement risks, and discover related technologies.',
    assignee: 'InnoSearch Technologies',
    inventor: 'James Wilson, Emily Zhang',
    applicationDate: '2024-01-22',
  },
  {
    id: '3',
    title: 'Quantum-Enhanced Optimization Algorithm for Drug Discovery',
    abstract: 'A hybrid quantum-classical optimization algorithm designed to accelerate molecular simulation and drug discovery processes. The system leverages quantum annealing principles combined with classical machine learning to explore molecular configurations efficiently.',
    claims: '1. A quantum computing method for molecular optimization comprising: encoding molecular structures into qubit representations; performing quantum annealing operations; and extracting optimal molecular configurations from measurement outcomes.',
    description: 'The pharmaceutical industry faces significant computational challenges in drug discovery. This invention provides a quantum-enhanced approach that can evaluate molecular binding affinities and predict drug efficacy orders of magnitude faster than classical methods alone.',
    assignee: 'QuantumPharma Inc.',
    inventor: 'Dr. Alex Kumar, Dr. Lisa Park',
    applicationDate: '2024-02-08',
  },
];
