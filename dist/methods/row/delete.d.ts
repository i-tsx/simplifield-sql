/**
 * @description This function is used to delete row from the table
 * @returns Boolean as Promise (*`true/false`*)
 * @example await db.delete("tasks", { taskId: 1 });
 */
export default function (table: string, condetions: {} | undefined): Promise<boolean>;
