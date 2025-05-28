import React from 'react';
import { getTypeColor, getTypeBorder, formateName } from '../utils/pokemonUtils';

const PokemonCard = ({ pokemon, onClick }) => {
  const { basicInfo, image } = pokemon;

  return (
    <div 
        className={`${getTypeColor(basicInfo.types[0])} border-4 ${getTypeBorder(basicInfo.types[0])} rounded-xl pl-4 pr-4 p-12 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 overflow-hidden`}
        onClick={onClick}
    >
        <div className='flex flex-row justify-around items-center'>  
            <div className='flex flex-col items-center'>
                <div className={`border-4 ${getTypeBorder(basicInfo.types[0])} bg-white rounded-lg`}>
                    <img 
                            src={image.normal}
                            alt={basicInfo.name}
                            height={100}
                            width={100}
                        />
                </div>
                <p className='text-sm'>Pokédex Nr. {basicInfo.id}</p>
            </div>  
            <h3 className='text-xl font-bold'>{formateName(basicInfo.name)}</h3> 
        </div>
    </div>
  );
};

export default PokemonCard;


         