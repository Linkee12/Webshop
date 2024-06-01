import jwt from "jsonwebtoken";
import { CONFIG } from "../config";

export async function checkToken(token: string) {
  const oldtoken = token.split(" ")[1];
  if (oldtoken != undefined) {
    return await new Promise((resolve, reject) => {
      jwt.verify(oldtoken, CONFIG.secret, (err, decoded) => {
        if (decoded) {
          resolve(true);
        } else {
          reject(err);
        }
      });
    });
  } else {
    return console.error();
  }
}

export async function getNewToken(token: string) {
  const oldToken = token.split(" ");
  let newToken;
  if (typeof oldToken === "string") {
    await new Promise((resolve, reject) => {
      jwt.verify(oldToken[1], CONFIG.secret, (err, decoded) => {
        if (decoded) {
          newToken = jwt.sign({ sub: decoded.sub }, CONFIG.secret, { expiresIn: 1200 });
          resolve(newToken);
        } else {
          reject(err);
        }
      });
    });
  }
  return newToken;
}
