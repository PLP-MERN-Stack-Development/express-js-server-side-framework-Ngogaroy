import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/")
  .get(getProducts)
  .post(auth, createProduct);

router.route("/:id")
  .get(getProduct)
  .put(auth, updateProduct)
  .delete(auth, deleteProduct);

export default router;
