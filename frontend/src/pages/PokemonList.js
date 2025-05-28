import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard.js';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGen1Pokemon();
  }, []);

  const fetchGen1Pokemon = async () => {
    try {
      setLoading(true);
      const pokemonList = [];
      
      // Generation 1: IDs 1-151
      for (let i = 1; i <= 151; i++) {
        try {
          const response = await fetch(`http://localhost:8000/api/pokemon/${i}`);
          const data = await response.json();
          
          if (data.success) {
            pokemonList.push(data.pokemon);
          }
        } catch (err) {
          console.error(`Fehler beim Laden von Pokémon ${i}:`, err);
        }
      }
      
      setPokemon(pokemonList);
    } catch (err) {
      setError('Fehler beim Laden der Pokémon');
    } finally {
      setLoading(false);
    }
  };

  const handlePokemonClick = (pokemonId) => {
    navigate(`/pokemon/${pokemonId}`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <h2 className="text-3xl font-bold mb-8">Lade Pokémon...</h2>
        <div className="animate-spin rounded-full h-16 w-16 border-b-2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
        <p className="text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-lg">
        Alle Pokémon der 1. Generation ({pokemon.length}/151)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemon.map((poke) => (
          <PokemonCard 
            key={poke.basicInfo.id} 
            pokemon={poke} 
            onClick={() => handlePokemonClick(poke.basicInfo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;