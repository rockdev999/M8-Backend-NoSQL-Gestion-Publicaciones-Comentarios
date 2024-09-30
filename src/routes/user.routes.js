import { Router } from "express";
import {
  getUsers,
  createUser,
  getToken,
  getUser,
} from "../controller/user.controllers.js";
import { authentiation } from "../middelwares/userAuthetication.js";

export const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", createUser);
userRouter.post("/token", getToken);
userRouter.get("/user", authentiation, getUser);
//¿DEBERIA IMPLEMENTAR PUT Y DELETE ???
