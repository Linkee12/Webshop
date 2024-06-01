import "dotenv/config";
export const CONFIG = {
  secret: getOrDie("SECRET"),
  mysql: {
    host: getOrDie("DB_HOST"),
    user: getOrDie("DB_USER"),
    password: getOrDie("DB_PASSWORD"),
    database: getOrDie("DB_DATABASE"),
  },
  port: getOrDie("PORT"),
};
function getOrDie(name: string): string {
  const value = process.env[name];
  if (value == undefined) throw new Error(`${name} is required`);
  return value;
}
