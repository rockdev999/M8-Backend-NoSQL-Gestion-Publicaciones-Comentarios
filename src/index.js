import express from "express";
import conexion from "./db.js";
import { userRouter } from "./routes/user.routes.js";
import { publicationRouter } from "./routes/publication.routes.js";
import { commentRouter } from "./routes/comments.routes.js";
const app = express();

const PORT = 4000;
// const PORT = process.env.PORT || process.env.DB_PORT;
app.use(express.urlencoded({ extended: false }));
// usuarios
app.use(userRouter);
// publicaciones
app.use(publicationRouter);
// comentarios por publicacion
app.use(commentRouter);
app.use((req, res) => {
  res.status(404).send("Pagina no encontrada");
});

app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});
