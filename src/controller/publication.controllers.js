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
    console.log(error);
  }
};
// export const getToken = async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPublication = async (req, res) => {
  try {
    // AQUI PODRIA BUSCAR POR EL EMAIL YA QUE ES UNICO, SI ES ASI COMO OBTENDRIA TODAS LAS PUBLICACIONES DE ESE USUARIO????
    const { id } = req.params;
    const result = await Publication.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
