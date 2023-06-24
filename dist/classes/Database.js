"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = __importStar(require("promise-mysql"));
const events_1 = require("events");
const methods = __importStar(require("../methods"));
const connections = new Map();
class Database extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.connections = connections;
        this.destroy = methods.destroy;
        this.ping = methods.ping;
        this.insert = methods.insert;
        this.selectAll = methods.selectAll;
        this.select = methods.select;
        this.delete = methods.delete;
        this.update = methods.update;
        this.tables = methods.tables;
        const Class = this;
        (async () => {
            if (connections.get("default") &&
                JSON.stringify(connections.get("default").options) ==
                    JSON.stringify(options)) {
                Class.db = connections.get("default").db;
                Class.connection = connections.get("default").connection;
            }
            else {
                Class.db = await mysql.createPool(options);
                //@ts-ignore
                Class.db.getConnection((err, connection) => {
                    if (err)
                        throw new TypeError(`Connection Error: ${err}`);
                    Class.connection = connection;
                    connections.set("default", {
                        options,
                        db: Class.db,
                        connection: Class.connection,
                    });
                    Class.emit("connect", Class.connection);
                });
            }
            return Class;
        })();
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map