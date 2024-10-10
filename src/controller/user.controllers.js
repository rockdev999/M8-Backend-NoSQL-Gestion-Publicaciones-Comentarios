import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

// meotod obtener usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).sendStatus(500);
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
    res.status(500).sendStatus(500);
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
        const token = jwt.sign({ perfilId: perfil._id }, process.env.FIRMA, {
          expiresIn: `${process.env.TIME}`,
        });
        res.json(token);
      } else {
        res.status(401).send({ message: "Usuario o contraseña incorrectos" });
      }
    } else {
      res.status(401).send({ message: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
// metodo obtener un usuario
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
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userupdate = req.body;
    // verificac si es el usurario que pidio el token
    if (id !== req.userId) {
      return res.status(403).send("No autorizado a actualizar este usuario");
    }

    const result = await User.findByIdAndUpdate(id, userupdate);
    if (result) {
      if (
        userupdate.firstname !== undefined ||
        userupdate.lastname !== undefined ||
        userupdate.password !== undefined
      ) {
        res.status(200).send("Usuario Actualizado");
      } else {
        res.status(500).send("completa los campos correctos");
      }
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
// actualizado
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id !== req.userId) {
      return res.status(403).send("No autorizado a actualizar este usuario");
    }
    const result = await User.findByIdAndDelete(id);
    res.status(200).send("Usuario eliminado");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
};
