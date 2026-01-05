import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, TrickDetails } from './components';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 text-white">
        <header className="p-4 shadow-lg bg-zinc-800">
          <h1 className="text-3xl font-bold text-center">Skateboard Tricks</h1>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trick/:id" element={<TrickDetails />} />
          </Routes>
        </main>
        <footer className="p-4 bg-zinc-800 text-center text-sm">
          <p>© 2023 Skateboard Tricks. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}