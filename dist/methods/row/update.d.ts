/**
 * @description This function is used to update row in the table
 * @returns New Data as Promise
 * @example await db.update("tasks", { taskId: 1 }, { name: "The New Name!" });
 */
export default function (table: string, condetions: {}, values: {}): Promise<unknown>;
