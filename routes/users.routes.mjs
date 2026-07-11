import { Router } from 'express';
import { createUser, listUsers } from '../data/users.store.mjs';

const usersRouter = Router();

// TODO Router 1: สร้าง GET / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
usersRouter.get('/', (req, res) => {
  return res.status(200).json({ data: listUsers() });
});

// TODO Router 2: สร้าง POST / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
usersRouter.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'name and email are required' });
  }

  const newUser = createUser({ name, email });

  return res.status(201).json({
    message: 'Created user successfully',
    data: newUser,
  });
});

// TODO Router 3: export default usersRouter แล้ว import ไป mount ใน app.mjs
export default usersRouter;
