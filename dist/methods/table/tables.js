"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1() {
    let tables = await this.db.query(`SHOW TABLES;`);
    return tables.map((m) => m["Tables_in_" + this.connection.config.database.toLowerCase()]);
}
exports.default = default_1;
//# sourceMappingURL=tables.js.map