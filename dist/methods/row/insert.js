"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertSQLValues_1 = __importDefault(require("../../utils/convertSQLValues"));
/**
 * @description This function is used to insert data row in the table
 * @returns New Data as Promise
 * @example await db.insert("tasks", { taskId: 1, name: "Code" });
 */
async function default_1(table, values) {
    const Class = this;
    return new Promise((resolve, reject) => {
        if (!table)
            reject('"table" param is required.');
        if (!values)
            reject('"values" param is required.');
        let fields = new Array();
        let vals = new Array();
        let RESULT = {};
        for (const [key, value] of Object.entries(values)) {
            RESULT[`${key}`] = value;
            fields.push(key);
            vals.push((0, convertSQLValues_1.default)(value));
        }
        let VALUES = `VALUES (${vals.join(", ")})`;
        let FIELDS = `(${fields.join(", ")})`;
        Class.db?.query(`INSERT INTO ${table}${FIELDS}${VALUES}`, (err, result) => {
            if (err)
                reject(err);
            else {
                resolve(RESULT);
                Class.emit("insertRow", table, RESULT);
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=insert.js.map