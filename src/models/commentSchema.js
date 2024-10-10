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
    const result = await this.populate("user").exectPopulate();
    return result;
  } catch (err) {
    console.log(err);
  }
};

commentSchema.pre("save", async function () {
  try {
    const result = await model("Publications").findById(this.publication);
    this.publication = result;
  } catch (error) {
    console.log(error);
  }
});

const Comment = model("Comments", commentSchema);

export default Comment;
