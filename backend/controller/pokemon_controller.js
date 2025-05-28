import Pokemon from "../models/pokemon_model";
import PokemonService from "../service/pokemon_service";

class PokemonController {
    static async getPokemonById(req, res) {
        try {
            const { id } = req.params;

            const apiData = await PokemonService.fetchPokemonById(id);

            const pokemon = new Pokemon(apiData);

            res.json({
                success: true,
                pokemon: pokemon.getInfo()
            })
        } catch(error) {
            console.error('Fehler:', error.message);
            res.status(500).json({ 
              success: false,
              error: error.message 
            });
        }
    }

    static async getPokemonList(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 20;
            const offset = parseInt(req.query.offset) || 0;
            
            const apiData = await PokemonService.fetchPokemonList(limit, offset);
            
            // Alle Pokémon in Model-Objekte umwandeln
            const pokemonList = apiData.results.map(data => new Pokemon(data));
            
            res.json({
                success: true,
                count: apiData.count,
                next: apiData.next,
                previous: apiData.previous,
                pokemon: pokemonList.map(p => p.getInfo())
            });
        } catch(error) {
            console.error('Fehler:', error.message);
            res.status(500).json({ 
              success: false,
              error: error.message 
            });
        }
    }
}

export default PokemonController;