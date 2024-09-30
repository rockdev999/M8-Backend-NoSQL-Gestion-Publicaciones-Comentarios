import jwt from "jsonwebtoken";

export const authentiation = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, "mifirma");
      req.User = decoded.perfilId;
      next();
    } else {
      res.status(401).json({ messge: "No autorizado" });
    }
  } catch (error) {
    console.log(error);
  }
};
