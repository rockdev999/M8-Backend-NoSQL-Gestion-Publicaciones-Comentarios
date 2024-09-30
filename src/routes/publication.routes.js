import { Router } from "express";
import { authentiation } from "../middelwares/userAuthetication.js";
import {
  getPublications,
  createPublication,
  getPublication,
} from "../controller/publication.controllers.js";

export const publicationRouter = Router();

publicationRouter.get("/posts", getPublications);
publicationRouter.post("/posts", authentiation, createPublication);
// publicationRouter.post("/posttoken", getToken);
publicationRouter.get("/posts/:id", getPublication);
// DEBERIA IMPLEMENTAR PUT DELETE, como lo ahora, se deberia controlar con el token ????
