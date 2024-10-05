import { Router } from "express";
import { authentiation } from "../middelwares/userAuthetication.js";
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "../controller/comment.controllers.js";
export const commentRouter = Router();

commentRouter.post("/posts/:postId/comments", authentiation, createComment);
commentRouter.put(
  "/posts/:postId/comments/:commentId",
  authentiation,
  updateComment
);
commentRouter.delete(
  "/posts/:postId/comments/:commentId",
  authentiation,
  deleteComment
);
