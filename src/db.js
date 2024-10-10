import { connect } from "mongoose";

const conexion = (async () => {
  try {
    await connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.byftx.mongodb.net/${process.env.DB_DATABASE}`
    );
    console.log("DB connect");
  } catch (error) {
    console.log("el error esta aqui");
    console.log(error);
  }
})();

export default conexion;
// actualizado
