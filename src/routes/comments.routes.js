import { Router } from "express";
import { authentiation } from "../middelwares/userAuthetication.js";
import {
  getComments,
  createComment,
} from "../controller/comment.controllers.js";
export const commentRouter = Router();

// todos los comentarios
commentRouter.get("/posts/comments", getComments);
// crea un comentario en una publicacion
commentRouter.post("/posts/comments", createComment);
// BORRA EL COMENTARIO, VALIDANDO ANTES, PARA SABER QUE ES EL USUARIO QUE COMENTÓ Y NO EL USUARIO QUE PUBLICÓ, COMO LO HARÍA
// commentRouter.delete(
//   "/posts/:postId/comments/:commentID",
//   authentiation,
//   updateComment
// );
