import { connect } from "mongoose";

const conexion = (async () => {
  try {
    await connect("mongodb+srv://admin:root@cluster0.byftx.mongodb.net/");
    console.log("DB connect");
  } catch (error) {
    console.log("el error esta aqui");
    console.log(error);
  }
})();

export default conexion;
