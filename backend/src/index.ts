/* eslint-disable promise/always-return */
import express, { Request, Response, NextFunction } from "express";
import {
  addUser,
  getCategory,
  getProductCountInCategory,
  getUserByEmail,
  getProducts,
  isUserExisting,
  getBasketContent,
} from "./model";
import { checkToken, getNewToken } from "./utils/jwt";
import sha256 from "sha256";
import jwt from "jsonwebtoken";
import { CONFIG } from "./config";
import createHash from "crypto";
import { error } from "console";

const port = CONFIG.port;
const app = express();
const errorMessage: string = "Something wnt wrong";
app.use(express.json());

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (typeof auth != "string") {
      throw new Error("Permission denied.");
    }
    if (await checkToken(auth)) {
      next();
    } else {
      res.status(401).send("Permission denied");
    }
  } catch {
    res.status(400).send({ message: "You have to login" });
  }
};

app.post("/login", (req: Request, res: Response) => {
  //TODO: handle catch branch
  //TODO: create tokenservice
  //TODO: create middleware
  getUserByEmail(req.body.email)
    .then((user) => {
      if (user) {
        if (user.password == sha256(req.body.password + user.salt)) {
          const token = jwt.sign(
            {
              sub: user.id,
              name: user.username,
            },
            CONFIG.secret,
            { expiresIn: 60 * 60 },
          );
          res.send({ token });
        } else {
          res.send({ message: "Password is incorrect :(" });
        }
      } else {
        res.send({ message: "Email is not found :(" });
      }
    })
    .catch(error);
});

app.post("/reg", check, async (req: Request, res: Response) => {
  if ((await isUserExisting(req.body.email, req.body.username)).length == 0) {
    const salt = createHash.randomBytes(5).toString("hex");
    addUser(req.body.username, req.body.email, sha256(req.body.password + salt), salt)
      .then(() => {
        res.send({ message: "Registration is successful" });
      })
      .catch((e) => console.error(e));
  } else {
    console.log("The user already exists ");
    res.send({ message: "The user already exists" });
  }
});

app.post("/getNewToken", async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (typeof token === "string") {
    const newToken = await getNewToken(token);
    res.send({ newToken });
  } else {
    res.status(401).send("Permission denied");
  }
});

app.post("/getcategory", auth, async (_req: Request, res: Response) => {
  try {
    const categories = await getCategory();
    res.send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send(errorMessage);
  }
});

app.post("/getproducts", auth, async (req: Request, res: Response) => {
  try {
    const productCount = await getProductCountInCategory(req.body.id);
    const products = await getProducts(req.body.id, req.body.pageNumber);
    res.send([productCount, products]);
  } catch (error) {
    console.error(error);
    res.status(500).send(errorMessage);
  }
});

app.post("/basket", auth, async (req: Request, res: Response) => {
  if (req.body.length == 0) {
    res.send([]);
  }
  try {
    const basketContent = await getBasketContent(req.body);
    res.send(basketContent);
  } catch (error) {
    console.error(error);
    res.status(500).send(errorMessage);
  }
});

function check(req: Request, res: Response, next: NextFunction) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
  const usernamePattern = /^[A-Za-z0-9]{2,8}$/;

  if (!usernamePattern.test(req.body.username)) {
    res.send({ message: "Invalid username" });
  } else if (!emailPattern.test(req.body.email)) {
    res.send({ message: "Invalid e-mail" });
  } else if (!passwordPattern.test(req.body.password)) {
    res.send({ message: "Invalid password" });
  } else {
    next();
  }
}
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
