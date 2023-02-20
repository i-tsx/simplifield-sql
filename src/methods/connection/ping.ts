import errors from "../../utils/errors";

/**
* @description The speed of the database connection with the server
* @returns number
*/

export default async function () {
  let tables = await this.tables();
  if (!tables.length) throw new TypeError(errors.noTablesExisted);
  let ms = Date.now();
  await this.db.query("SELECT * from " + tables[0]);
  return `${Date.now() - ms}ms`;
};
