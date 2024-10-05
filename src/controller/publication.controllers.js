import Publication from "../models/publicationSchema.js";

export const getPublications = async (req, res) => {
  try {
    const publications = await Publication.find()
      .populate("user")
      .populate({
        path: "comments", // Popula los comentarios
        populate: { path: "user", model: "Users" }, // Dentro de los comentarios, popular el usuario que los creó
      });
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
export const createPublication = async (req, res) => {
  try {
    const publi = Publication(req.body);
    await publi.save();
    res.status(201).sendStatus(201);
    console.log("Publicacion Creada");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
export const getPublication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Publication.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};

export const updatePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const publi = req.body;
    // verifica si es el usuario que pidio el actualizar
    if (Publication.user.toString() !== req.User) {
      return res
        .status(403)
        .send("No autorizado a actualizar esta publicación");
    }
    const result = await Publication.findByIdAndUpdate(id, publi);
    if (result) {
      if (publi.title !== undefined || publi.content !== undefined) {
        res.status(200).send("Publicacion Actualizada");
      } else {
        res.status(500).send("completa los campos correctos");
      }
    } else {
      res.status(404).send("Publicacion no encontrada");
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
export const deletePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const publi = await Publication.findById(id);
    // verifica si es el usuario que pidio el actualizar
    if (publi.user.toString() !== req.User) {
      return res
        .status(403)
        .send("No autorizado para eliminar esta publicación");
    }
    const resultado = await Publication.findByIdAndDelete(id);
    res.status(200).send("Publicacion eliminada");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
