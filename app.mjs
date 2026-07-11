import express from 'express';
import { createProduct, listProducts } from './data/products.store.mjs';
import { createUser, listUsers } from './data/users.store.mjs';
import {
  createProductInputDto,
  publicProductDto,
} from './dto/products.dto.mjs';
import usersRouter from './routes/users.routes.mjs';
import productsRouter from './routes/products.routes.mjs';

const app = express();
const port = 5007;

app.use(express.json());

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'ok' });
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use((req, res) => {
  return res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Starter API running at http://localhost:${port}`);
});
