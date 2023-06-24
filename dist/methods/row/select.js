"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCondetion_1 = __importDefault(require("../../utils/getCondetion"));
/**
 * @description This function is used to select row from the table
 * @returns Selected Data as Promise
 * @example await db.select("tasks", { taskId: 1 });
 */
async function default_1(table, condetions = {}) {
    const Class = this;
    return new Promise((resolve, reject) => {
        if (!table)
            reject('"table" param is required.');
        const condetion = (0, getCondetion_1.default)(condetions);
        Class.db?.query(`SELECT * FROM ${table} WHERE ${condetion || 1}`, (err, result) => {
            if (err)
                reject(err);
            else {
                let res = result[0];
                if (!res)
                    return resolve(null);
                let entriesResult = [];
                for (let [key, value] of Object.entries(res)) {
                    try {
                        value = value.replace(/\n/g, "\\n");
                        if (JSON.parse(value) && typeof JSON.parse(value) !== "number")
                            entriesResult.push([key, JSON.parse(value)]);
                        else
                            entriesResult.push([key, value]);
                    }
                    catch (_) {
                        entriesResult.push([key, value]);
                    }
                }
                entriesResult = Object.fromEntries(entriesResult);
                resolve(entriesResult);
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=select.js.map