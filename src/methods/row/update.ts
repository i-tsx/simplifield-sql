import CSV from "../../utils/convertSQLValues";
import getCondetion from "../../utils/getCondetion";

/**
 * @description This function is used to update row in the table
 * @returns New Data as Promise
 * @example await db.update("tasks", { taskId: 1 }, { name: "The New Name!" });
 */

export default async function (table: string, condetions: {}, values: {}) {
  const Class = this;
  return new Promise(async (resolve, reject) => {
    if (!table) reject('"table" param is required.');
    if (!condetions) reject('"condetions" param is required.');
    if (!values) reject('"values" param is required.');
    const condetion = getCondetion(condetions);
    let newRows = new Array();
    for (const [key, value] of Object.entries<any>(values)) {
      newRows.push(`${key}=${CSV(value)}`);
    }
    const oldValues = await Class.select(table, condetions);
    Class.db?.query(
      `UPDATE ${table} SET ${newRows.join(",")} WHERE ${condetion}`,
      async (err: any) => {
        if (err) reject(err);
        else {
          let newValues = await Class.select(table, condetions);
          resolve(newValues);
          Class.emit("updateRow", table, oldValues, newValues);
        }
      }
    );
  });
}
