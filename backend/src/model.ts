import { mysqlQuery } from "./utils/db";
type User = {
  password: string;
  id: number;
  username: string;
  salt: string;
};
type Category = string[];

type Products = {
  id: number;
  name: string;
  catid: number;
  price: number;
  avaliable: number;
};
type ProductCount = {
  count: number;
};

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const sql = "SELECT email,password,salt,id,username FROM users where email=?";
  const users = await mysqlQuery<User[]>(sql, [email]);
  return users[0];
}
export async function isUserExisting(email: string, username: string) {
  const sql = "SELECT id FROM users where email=? or username=?";
  return await mysqlQuery<User[]>(sql, [email, username]);
}
export async function addUser(
  username: string,
  email: string,
  password: string,
  salt: string,
) {
  const sql = "INSERT INTO users (username,email,password,salt) VALUES (?, ?, ?, ?)";
  await mysqlQuery<User[]>(sql, [username, email, password, salt]);
}
export async function getCategory() {
  const sql = "SELECT id,name FROM category";
  return await mysqlQuery<Category[]>(sql, []);
}
export async function getProductCountInCategory(id: number) {
  const sql = "SELECT COUNT(name) AS count FROM products where catid=?";
  const productCount = await mysqlQuery<ProductCount[]>(sql, [id]);
  if (productCount[0] != undefined) {
    return productCount[0].count;
  } else {
    return 0;
  }
}
export async function getProducts(id: number, pageNumber: number) {
  const sql =
    "SELECT id,name,catid,price,avaliable FROM products where catid=? LIMIT 10 OFFSET ?";
  return await mysqlQuery<Products[]>(sql, [id, pageNumber * 10]);
}
export async function getBasketContent(id: number) {
  const sql = "SELECT id,catid,name,price,avaliable FROM products where id in (?)";
  return await mysqlQuery<Products[]>(sql, [id]);
}
