"use strict";
/**
 * @description Logs out, terminates the connection to Mysql, and destroys the client.
 * @returns void
 */
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1() {
    this.connection.destroy();
    this.db.end();
    this.connections.delete("default");
    this.emit("disconnect", this.connection);
}
exports.default = default_1;
//# sourceMappingURL=destroy.js.map