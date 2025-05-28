import express from "express";
import PokemonController from "../controller/pokemon_controller.js";

const router = express.Router();

// ====Get Pokemon by ID api/pokemon?:id====
router.get("/:id", PokemonController.getPokemonById);

// ====Get Pokemon List api/pokemon====
router.get("/", PokemonController.getPokemonList);

export default router;