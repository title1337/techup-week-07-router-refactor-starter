import express from "express";
import { createProduct, listProducts } from "./data/products.store.mjs";
import { createUser, listUsers } from "./data/users.store.mjs";
import {
  createProductInputDto,
  publicProductDto,
} from "./dto/products.dto.mjs";

const app = express();
const port = 5007;

app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok" });
});

// TODO Router 1: ย้าย GET /users ไป routes/users.routes.mjs
app.get("/users", (req, res) => {
  return res.status(200).json({ data: listUsers() });
});

// TODO Router 2: ย้าย POST /users ไป routes/users.routes.mjs
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  return res.status(201).json({
    message: "Created user successfully",
    data: createUser({ name, email }),
  });
});

app.get("/products", (req, res) => {
  return res.status(200).json({
    data: listProducts().map(publicProductDto),
  });
});

app.post("/products", (req, res) => {
  const productInput = createProductInputDto(req.body);

  if (
    !productInput.name ||
    !productInput.category ||
    typeof productInput.price !== "number"
  ) {
    return res.status(400).json({
      message: "name, category, and numeric price are required",
    });
  }

  const newProduct = createProduct(productInput);

  return res.status(201).json({
    message: "Created product successfully",
    data: publicProductDto(newProduct),
  });
});

app.use((req, res) => {
  return res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Starter API running at http://localhost:${port}`);
});
