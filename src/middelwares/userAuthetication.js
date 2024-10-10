import jwt from "jsonwebtoken";

export const authentiation = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.FIRMA);
      req.User = decoded.perfilId;
      next();
    } else {
      res.status(401).json({ messge: "No autorizado" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token ha expirado" });
    } else {
      res.status(403).json({ message: "Token inválido" });
      console.log(error);
    }
  }
};
