import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      maxlength: 16,
      minlength: 8,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// aqui hago los middelwares
// encriptacion de la contrasena
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const passwordHash = await bcrypt.hash(this.password, 8);
      this.password = passwordHash;
      next();
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
});

// al ingresar pone su contrasena y hay que deshashear la contrasena
// esto retorna true si es el mismo password y si no entonces le pasa false
userSchema.methods.verificaPassword = async function (pass) {
  try {
    const compare = await bcrypt.compare(pass, this.password);
    return compare;
  } catch (error) {
    console.log(error);
  }
};
const User = model("Users", userSchema);
// actualizado
export default User;
