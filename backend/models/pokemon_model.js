class Pokemon {
    constructor(apiData) {
        this.id = apiData.id;
        this.name = apiData.name;
        this.types = apiData.types.map(typeInfo => typeInfo.type.name);
        this.image = apiData.sprites.front_default;
        this.imageShiny = apiData.sprites.front_shiny;
    }

    getInfo() {
        return {
            basicInfo: {
                id: this.id,
                name: this.name,
                types: this.types
            },
            image: {
                normal: this.image,
                shiny: this.imageShiny
            }
        }
    }
}

export default Pokemon;