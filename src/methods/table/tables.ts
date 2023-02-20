export default async function () {
  let tables = await this.db.query(`SHOW TABLES;`);
  return tables.map(
    (m: any) => m["Tables_in_" + this.connection.config.database.toLowerCase()]
  );
}
