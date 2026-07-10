import { Router } from "express";
import { createUser, listUsers } from "../data/users.store.mjs";

const usersRouter = Router();

// TODO Router 1: สร้าง GET / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
// TODO Router 2: สร้าง POST / โดยย้าย logic จาก app.mjs มาไว้ที่นี่
// TODO Router 3: export default usersRouter แล้ว import ไป mount ใน app.mjs

void createUser;
void listUsers;

export default usersRouter;
