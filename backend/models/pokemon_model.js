class Pokemon {
    constructor(apiData) {
        this.id = apiData.id;
        this.name = apiData.name;
    }

    getInfo() {
        return {
            basicInfo: {
                id: this.id,
                name: this.name
            }
        }
    }
}

export default Pokemon;