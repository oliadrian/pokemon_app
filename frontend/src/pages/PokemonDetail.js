import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTypeColor, formatPokemonId, formatHeight, formatWeight, capitalizeName } from '../utils/pokemonUtils';

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/pokemon/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setPokemon(data.pokemon);
      } else {
        setError('Pokémon nicht gefunden');
      }
    } catch (err) {
      setError('Fehler beim Laden des Pokémon');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <h2 className="text-2xl font-bold text-white mb-8">Lade Pokémon...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mb-6 transition-colors"
        >
          ← Zurück zur Liste
        </button>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p className="text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (!pokemon) return null;

  const { basicInfo, image } = pokemon;

  return (
    <div>{basicInfo.name}</div>
  );
};

export default PokemonDetail;