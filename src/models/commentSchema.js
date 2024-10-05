import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    contentComment: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    // CREO QUE ESTO YA NO ES REQUERIDO YA QUE EL COMENTARIO SE MOSTRARA EN LA PUBLICACION O IGUAL DEBERIA ESTAR AQUI???
    publication: {
      type: Schema.Types.ObjectId,
      //   lo mismo???
      ref: "Publications",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// PARA USER
commentSchema.pre("save", async function () {
  try {
    const result = await model("Users").findById(this.user);
    this.user = result;
  } catch (error) {
    console.log(error);
  }
});
commentSchema.methods.populateReferences = async function () {
  try {
    const result = await this.populate("user")
      .populate("publication")
      .exectPopulate();
    return result;
  } catch (err) {
    console.log(err);
  }
};
// DEPENDE DE ARRIBA SI ES NECESARIO PONER LA PUBLICACION AQUI, SE DESCOMENTARAN ESTOS MIDDELWARES
// PARA PUBLICATION
commentSchema.pre("save", async function () {
  try {
    // aqui user o users????
    const result = await model("Publications").findById(this.publication);
    this.publication = result;
  } catch (error) {
    console.log(error);
  }
});

const Comment = model("Comments", commentSchema);

export default Comment;
