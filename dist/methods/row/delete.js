"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCondetion_1 = __importDefault(require("../../utils/getCondetion"));
/**
 * @description This function is used to delete row from the table
 * @returns Boolean as Promise (*`true/false`*)
 * @example await db.delete("tasks", { taskId: 1 });
 */
async function default_1(table, condetions) {
    const Class = this;
    return new Promise(async (resolve, reject) => {
        if (!table)
            reject('"table" param is required.');
        if (!condetions)
            reject('"condetions" param is required.');
        const condetion = (0, getCondetion_1.default)(condetions);
        const old = await Class.select(table, condetions);
        Class.db?.query(`DELETE FROM ${table} WHERE ${condetion} LIMIT 1`, (err, result) => {
            if (err)
                reject(`An error occurred! "${err}"`);
            else if (result.affectedRows === 0)
                resolve(false);
            else {
                resolve(true);
                Class.emit("deleteeRow", table, { ...old, deleted: true });
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=delete.js.map