import { Schema, model } from "mongoose";

const publicationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      immutable: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// buscamos si esta el autor
publicationSchema.pre("save", async function (next) {
  try {
    const result = await model("Users").findById(this.user);
    if (result) {
      this.user = result;
      next();
    } else {
      res.send("user not found");
    }
  } catch (error) {
    console.log(error);
  }
});

// muestra toda la inforamcion del user
publicationSchema.methods.populateReferences = async function () {
  try {
    const result = await this.populate("user")
      .populate({
        path: "comments", // Popula los comentarios
        populate: { path: "user", model: "Users" }, // Dentro de los comentarios, popular el usuario que los creo
      })
      .exectPopulate();
    return result;
  } catch (err) {
    console.log(err);
  }
};
// actualizado
const Publication = model("Publications", publicationSchema);

export default Publication;
