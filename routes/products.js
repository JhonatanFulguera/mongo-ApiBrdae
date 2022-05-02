import express from "express";
import { productsController } from "../controllers/products.js";

console.log(productsController);

const router = express.Router();

// GET = localhost:3000/api/products/dummy-data
router.get("/dummy-data", productsController.inserDummyData);

// GET = localhost:3000/api/products/
router.get("/", productsController.index);

// GET = localhost:3000/api/products/626b0e12161c3933422e1307
router.get("/:id", productsController.detail);

// DELETE = localhost:3000/api/products/626b0e12161c3933422e1307
router.delete("/:id", productsController.delete);

// POST = localhost:3000/api/products/
router.post("/", productsController.create);

// PUT = localhost:3000/api/products/:id
router.put("/:id", productsController.update);

export default router;