import { Router } from "express";
import { createProduct, listProducts } from "../data/products.store.mjs";
import {
  createProductInputDto,
  publicProductDto,
} from "../dto/products.dto.mjs";

const productsRouter = Router();

// TODO Router 4: สร้าง GET / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
// TODO Router 5: สร้าง POST / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
// TODO Router 6: export default productsRouter แล้ว import ไป mount ใน app.mjs

void createProduct;
void listProducts;
void createProductInputDto;
void publicProductDto;

export default productsRouter;
