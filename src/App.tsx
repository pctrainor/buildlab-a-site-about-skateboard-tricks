import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, TrickDetails } from './components';
import { Skateboard, Home as HomeIcon } from 'lucide-react';

const mockTricks = [
  { id: 1, name: 'Ollie', description: 'A basic trick where the skater pops the board into the air.', difficulty: 'Easy' },
  { id: 2, name: 'Kickflip', description: 'A trick where the skater flips the board in mid-air.', difficulty: 'Medium' },
  { id: 3, name: 'Heelflip', description: 'Similar to a kickflip but the board flips in the opposite direction.', difficulty: 'Medium' },
  { id: 4, name: '360 Flip', description: 'A trick where the board spins 360 degrees and flips at the same time.', difficulty: 'Hard' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 text-white">
      <header className="p-4 shadow-lg bg-zinc-800 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <HomeIcon className="w-6 h-6" />
          <span>Skateboard Tricks</span>
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-slate-400">Home</Link>
          <Link to="/tricks" className="hover:text-slate-400">Tricks</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home tricks={mockTricks} />} />
          <Route path="/tricks/:id" element={<TrickDetails tricks={mockTricks} />} />
        </Routes>
      </main>
      <footer className="p-4 text-center bg-zinc-800">
        <p className="text-sm">&copy; 2023 Skateboard Tricks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;