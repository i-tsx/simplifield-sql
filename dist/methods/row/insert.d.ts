/**
 * @description This function is used to insert data row in the table
 * @returns New Data as Promise
 * @example await db.insert("tasks", { taskId: 1, name: "Code" });
 */
export default function (table: string, values: {}): Promise<unknown>;
