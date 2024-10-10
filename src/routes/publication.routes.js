import { Router } from "express";
import { authentiation } from "../middelwares/userAuthetication.js";
import {
  getPublications,
  createPublication,
  getPublication,
  updatePublication,
  deletePublication,
} from "../controller/publication.controllers.js";

export const publicationRouter = Router();

publicationRouter.get("/posts", getPublications);
publicationRouter.post("/posts", authentiation, createPublication);
publicationRouter.get("/posts/:id", getPublication);
publicationRouter.put("/posts/:id", authentiation, updatePublication);
publicationRouter.delete("/posts/:id", authentiation, deletePublication);
