"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertSQLValues_1 = __importDefault(require("./convertSQLValues"));
function default_1(condetions) {
    return Object.entries(condetions)
        .map(([key, value]) => `${key}=${(0, convertSQLValues_1.default)(value)}`)
        .join(" && ");
}
exports.default = default_1;
//# sourceMappingURL=getCondetion.js.map