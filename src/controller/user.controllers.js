import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

// meotod obtener usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
// metodo para crear usurarios
export const createUser = async (req, res) => {
  try {
    const perfil = User(req.body);
    await perfil.save();
    res.status(201).sendStatus(201);
    console.log("Usuario creado");
  } catch (error) {
    console.log(error);
  }
};
// obtener token
export const getToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const perfil = await User.findOne({ email });
    if (perfil) {
      const compare = await perfil.verificaPassword(password);
      if (compare) {
        // cuantos minutos es lo recomendable dar???
        const token = jwt.sign({ perfilId: perfil._id }, "mifirma", {
          expiresIn: "2m",
        });
        res.json(token);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
// metodo obtener un usuario
// deberia hacer un token aqui???
export const getUser = async (req, res) => {
  try {
    const perfilId = req.User;
    const perfil = await User.findById(perfilId);
    if (perfil) {
      res.json(perfil);
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
//actualizar datos
