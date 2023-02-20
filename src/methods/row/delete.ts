import getCondetion from "../../utils/getCondetion";

/**
 * @description This function is used to delete row from the table
 * @returns Boolean as Promise (*`true/false`*)
 * @example await db.delete("tasks", { taskId: 1 });
 */

export default async function (table: string, condetions: {} | undefined) {
  const Class = this;

  return new Promise<boolean>(async (resolve, reject) => {
    if (!table) reject('"table" param is required.');
    if (!condetions) reject('"condetions" param is required.');
    const condetion = getCondetion(condetions);
    const old = await Class.select(table, condetions);
    Class.db?.query(
      `DELETE FROM ${table} WHERE ${condetion} LIMIT 1`,
      (err: any, result: any) => {
        if (err) reject(`An error occurred! "${err}"`);
        else if (result.affectedRows === 0) resolve(false);
        else {
          resolve(true);
          Class.emit("deleteeRow", table,{ ...old, deleted: true });
        }
      }
    );
  });
}
