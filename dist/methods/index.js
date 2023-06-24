"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.delete = exports.select = exports.selectAll = exports.insert = exports.tables = exports.destroy = exports.ping = void 0;
var ping_1 = require("./connection/ping");
Object.defineProperty(exports, "ping", { enumerable: true, get: function () { return __importDefault(ping_1).default; } });
var destroy_1 = require("./connection/destroy");
Object.defineProperty(exports, "destroy", { enumerable: true, get: function () { return __importDefault(destroy_1).default; } });
var tables_1 = require("./table/tables");
Object.defineProperty(exports, "tables", { enumerable: true, get: function () { return __importDefault(tables_1).default; } });
var insert_1 = require("./row/insert");
Object.defineProperty(exports, "insert", { enumerable: true, get: function () { return __importDefault(insert_1).default; } });
var selectAll_1 = require("./row/selectAll");
Object.defineProperty(exports, "selectAll", { enumerable: true, get: function () { return __importDefault(selectAll_1).default; } });
var select_1 = require("./row/select");
Object.defineProperty(exports, "select", { enumerable: true, get: function () { return __importDefault(select_1).default; } });
var delete_1 = require("./row/delete");
Object.defineProperty(exports, "delete", { enumerable: true, get: function () { return __importDefault(delete_1).default; } });
var update_1 = require("./row/update");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return __importDefault(update_1).default; } });
//# sourceMappingURL=index.js.map