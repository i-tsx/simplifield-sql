import CSV from "../../utils/convertSQLValues";

/**
 * @description This function is used to insert data row in the table
 * @returns New Data as Promise
 * @example await db.insert("tasks", { taskId: 1, name: "Code" });
 */

export default async function (table: string, values: {}) {
  const Class = this;
  return new Promise((resolve, reject) => {
    if (!table) reject('"table" param is required.');
    if (!values) reject('"values" param is required.');
    let fields = new Array();
    let vals = new Array();
    let RESULT: any = {};
    for (const [key, value] of Object.entries<any>(values)) {
      RESULT[`${key}`] = value;
      fields.push(key);
      vals.push(CSV(value));
    }
    let VALUES = `VALUES (${vals.join(", ")})`;
    let FIELDS = `(${fields.join(", ")})`;
    Class.db?.query(
      `INSERT INTO ${table}${FIELDS}${VALUES}`,
      (err: any, result: any) => {
        if (err) reject(err);
        else {
          resolve(RESULT);
          Class.emit("insertRow", table,RESULT);
        }
      }
    );
  });
}
