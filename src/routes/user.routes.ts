import { Router } from "express";
import { create, get, getUnique } from "../controler/user.controler";

const userRoutes = Router();

userRoutes.post("/", create);
userRoutes.get("/", get);
userRoutes.get("/:id", getUnique);

export default userRoutes;
