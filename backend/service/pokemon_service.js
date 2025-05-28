import axios from "axios";

class PokemonService {

    static async fetchPokemonById(id) {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return res.data;
        } catch(error) {
            throw new Error(`Pokémon ${id} nicht gefunden`);
        }
    }

    static async fetchPokemonList(limit = 20, offset = 0) {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            
            // Detaildaten für jedes Pokémon abrufen
            const pokemonDetails = await Promise.all(
                res.data.results.map(async (pokemon) => {
                    const detailRes = await axios.get(pokemon.url);
                    return detailRes.data;
                })
            );
            
            return {
                count: res.data.count,
                next: res.data.next,
                previous: res.data.previous,
                results: pokemonDetails
            };
        } catch(error) {
            throw new Error('Fehler beim Laden der Pokémon-Liste');
        }
    }
}

export default PokemonService;