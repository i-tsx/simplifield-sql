"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertSQLValues_1 = __importDefault(require("../../utils/convertSQLValues"));
const getCondetion_1 = __importDefault(require("../../utils/getCondetion"));
/**
 * @description This function is used to update row in the table
 * @returns New Data as Promise
 * @example await db.update("tasks", { taskId: 1 }, { name: "The New Name!" });
 */
async function default_1(table, condetions, values) {
    const Class = this;
    return new Promise(async (resolve, reject) => {
        if (!table)
            reject('"table" param is required.');
        if (!condetions)
            reject('"condetions" param is required.');
        if (!values)
            reject('"values" param is required.');
        const condetion = (0, getCondetion_1.default)(condetions);
        let newRows = new Array();
        for (const [key, value] of Object.entries(values)) {
            newRows.push(`${key}=${(0, convertSQLValues_1.default)(value)}`);
        }
        const oldData = await Class.select(table, condetions);
        Class.db?.query(`UPDATE ${table} SET ${newRows.join(",")} WHERE ${condetion}`, async (err) => {
            if (err)
                reject(err);
            else {
                let newData = await Class.findRow(table, condetions);
                resolve(newData);
                Class.emit("updateRow", oldData, newData);
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=update.js.map