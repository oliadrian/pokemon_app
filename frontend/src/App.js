import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <header className="bg-gray-900 text-white py-6 shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Pokédex</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
