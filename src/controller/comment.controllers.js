import Comment from "../models/commentSchema.js";
import Publication from "../models/publicationSchema.js";
// todos los comentarios, de una publicacion. PERO NOSE COMO DIRIGIRLO AL COMENTARIO,
// actualizado
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("user");
    // .populate("publication");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
// crea un comentario en una publicacion
export const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    if (comm.user.toString() !== req.User) {
      return res
        .status(403)
        .send("No autorizado para comentar esta publicación");
    }
    const com = Comment(req.body);
    await com.save();
    await Publication.findByIdAndUpdate(
      postId, // ID de la publicación
      { $push: { comments: com._id } } // Agregar el comentario al array
      // { new: true } // Devuelve la publicación actualizada
    );
    res.status(201).sendStatus(201);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
export const updateComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;

    const post = await Publication.findById(postId);
    // .populate("comments");

    if (!post) {
      return res.status(404).send("Publicación no encontrada");
    }
    const comm = await Comment.findById(commentId);
    const comme = Comment(req.body);

    // verifica si es el usuario que pidio el actualizar
    if (comm.user.toString() !== req.User) {
      return res
        .status(403)
        .send("No autorizado para eliminar esta publicación");
    }

    const result = await Comment.findByIdAndUpdate(commentId, comme);
    if (result) {
      if (comme.contentComment !== undefined) {
        res.status(200).send("Comentario Actualizado");
      } else {
        res.status(500).send("completa el campo");
      }
    } else {
      res.status(404).send("Comentario no encontrada");
    }

    res.status(200).send("Comentario eliminado");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;

    const post = await Publication.findById(postId);
    // .populate("comments");

    if (!post) {
      return res.status(404).send("Publicación no encontrada");
    }
    const comm = await Comment.findById(commentId);

    if (!comm) {
      return res.status(404).send("Comentario no encontrado");
    }
    // verifica si es el usuario que pidio el actualizar
    if (comm.user.toString() !== req.User) {
      return res
        .status(403)
        .send("No autorizado para eliminar esta publicación");
    }
    await Comment.findByIdAndDelete(commentId);

    res.status(200).send("Comentario eliminado");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
