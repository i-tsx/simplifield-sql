"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCondetion_1 = __importDefault(require("../../utils/getCondetion"));
/**
 * @description This function is used to select all rows from the table
 * @returns Selected Data as Promise Array
 * @example await db.selectAll("tasks");
 */
async function default_1(table, condetions = {}) {
    const Class = this;
    const condetion = (0, getCondetion_1.default)(condetions);
    return new Promise((resolve, reject) => {
        Class.db?.query(`SELECT * FROM ${table} WHERE ${condetion || 1}`, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result.map((res) => {
                    let entriesResult = [];
                    for (let [key, value] of Object.entries(res)) {
                        try {
                            value = value.replace(/\n/g, "\\n");
                            if (JSON.parse(value) &&
                                typeof JSON.parse(value) !== "number")
                                entriesResult.push([key, JSON.parse(value)]);
                            else
                                entriesResult.push([key, value]);
                        }
                        catch (_) {
                            entriesResult.push([key, value]);
                        }
                    }
                    entriesResult = Object.fromEntries(entriesResult);
                    return entriesResult;
                }));
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=selectAll.js.map