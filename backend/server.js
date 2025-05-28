import express from "express";
import cors from "cors";
import pokemonRoutes from "./routes/pokemon.js";

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors()); //CORS für Frontend-Zugriff
app.use(express.json()); // JSON-Body parsing

//Routes
app.use('/api/pokemon', pokemonRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})
