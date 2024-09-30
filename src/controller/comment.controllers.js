import Comment from "../models/commentSchema.js";

// todos los comentarios, de una publicacion. PERO NOSE COMO DIRIGIRLO AL COMENTARIO,
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("user");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
// crea un comentario en una publicacion
// CUANDO CREA UN COMENTARIO LO CREA PARA TODOS LAS PUBLICACIONES Y NO HACI PARA UNA PUBLICACION EN ESPECIIFICO
export const createComment = async (req, res) => {
  try {
    const com = Comment(req.body);
    await com.save();
    res.status(201).sendStatus(201);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
// borra el comentario,validando antes que sea el usuario que comento
// export const updateComment = async (req, res) => {
//   try {
//     // aqui nose como lo puedo hacer
//   } catch (error) {
//     console.log(error);
//   }
// };
