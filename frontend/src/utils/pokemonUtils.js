export const getTypeColor = (type) => {
    const typeColors = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-400',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-800',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300'
    };
    return typeColors[type] || 'bg-gray-400';
  };

export const getTypeBorder = (type) => {
    const typeColors = {
        normal: 'border-gray-700',
        fire: 'border-red-800',
        water: 'border-blue-800',
        electric: 'border-yellow-700',
        grass: 'border-green-800',
        ice: 'border-blue-500',
        fighting: 'border-red-950',
        poison: 'border-purple-800',
        ground: 'border-yellow-900',
        flying: 'border-indigo-700',
        psychic: 'border-pink-800',
        bug: 'border-green-700',
        rock: 'border-yellow-950',
        ghost: 'border-purple-950',
        dragon: 'border-indigo-950',
        dark: 'border-gray-950',
        steel: 'border-gray-800',
        fairy: 'border-pink-600'
      };
      return typeColors[type] || 'border-gray-700';
};

export const formateName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};