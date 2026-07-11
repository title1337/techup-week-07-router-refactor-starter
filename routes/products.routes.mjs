import { Router } from 'express';
import { createProduct, listProducts } from '../data/products.store.mjs';
import {
  createProductInputDto,
  publicProductDto,
} from '../dto/products.dto.mjs';

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  return res.status(200).json({
    data: listProducts().map(publicProductDto),
  });
});

productsRouter.post('/', (req, res) => {
  const productInput = createProductInputDto(req.body);

  if (
    !productInput.name ||
    !productInput.category ||
    typeof productInput.price !== 'number'
  ) {
    return res.status(400).json({
      message: 'name, category, and numeric price are required',
    });
  }

  const newProduct = createProduct(productInput);

  return res.status(201).json({
    message: 'Created product successfully',
    data: publicProductDto(newProduct),
  });
});
export default productsRouter;
