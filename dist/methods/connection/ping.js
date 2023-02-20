"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../../utils/errors"));
/**
* @description The speed of the database connection with the server
* @returns number
*/
async function default_1() {
    let tables = await this.tables();
    if (!tables.length)
        throw new TypeError(errors_1.default.noTablesExisted);
    let ms = Date.now();
    await this.db.query("SELECT * from " + tables[0]);
    return `${Date.now() - ms}ms`;
}
exports.default = default_1;
;
//# sourceMappingURL=ping.js.map