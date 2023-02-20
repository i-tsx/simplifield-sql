import getCondetion from "../../utils/getCondetion";

/**
 * @description This function is used to select row from the table
 * @returns Selected Data as Promise
 * @example await db.select("tasks", { taskId: 1 });
 */

export default async function (table: string, condetions = {}) {
  const Class = this;
  return new Promise((resolve, reject) => {
    if (!table) reject('"table" param is required.');
    const condetion = getCondetion(condetions);
    Class.db?.query(
      `SELECT * FROM ${table} WHERE ${condetion || 1}`,
      (err: any, result: any) => {
        if (err) reject(err);
        else {
          let res = result[0];
          if (!res) return resolve(null);
          let entriesResult = [];
          for (let [key, value] of Object.entries<any>(res)) {
            try {
              value = value.replace(/\n/g, "\\n");
              if (JSON.parse(value) && typeof JSON.parse(value) !== "number")
                entriesResult.push([key, JSON.parse(value)]);
              else entriesResult.push([key, value]);
            } catch (_) {
              entriesResult.push([key, value]);
            }
          }
          entriesResult = Object.fromEntries(entriesResult);
          resolve(entriesResult);
        }
      }
    );
  });
}
