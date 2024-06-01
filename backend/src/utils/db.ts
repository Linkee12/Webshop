import mysql from "mysql";
import { CONFIG } from "../config";
const connection = mysql.createConnection(CONFIG.mysql);

export function mysqlQuery<T>(sql: string, params: string[] | number[]): Promise<T> {
  console.log("aasd");
  return new Promise((resolve, reject) => {
    connection.query(sql, params, function (error, results) {
      if (!error) {
        resolve(results);
      } else {
        reject(error);
      }
    });
  });
}
