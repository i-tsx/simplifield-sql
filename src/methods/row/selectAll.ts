import getCondetion from "../../utils/getCondetion";

/**
 * @description This function is used to select all rows from the table
 * @returns Selected Data as Promise Array
 * @example await db.selectAll("tasks");
 */

export default async function (table: string, condetions = {}) {
  const Class = this;
  const condetion = getCondetion(condetions);

  return new Promise((resolve, reject) => {
    Class.db?.query(
      `SELECT * FROM ${table} WHERE ${condetion || 1}`,
      (err: any, result: any) => {
        if (err) reject(err);
        else
          resolve(
            result.map((res: any) => {
              let entriesResult = [];
              for (let [key, value] of Object.entries<any>(res)) {
                try {
                  value = value.replace(/\n/g, "\\n");
                  if (
                    JSON.parse(value) &&
                    typeof JSON.parse(value) !== "number"
                  )
                    entriesResult.push([key, JSON.parse(value)]);
                  else entriesResult.push([key, value]);
                } catch (_) {
                  entriesResult.push([key, value]);
                }
              }
              entriesResult = Object.fromEntries(entriesResult);
              return entriesResult;
            })
          );
      }
    );
  });
}
