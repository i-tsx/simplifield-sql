"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    table: (received) => `Table was not specified in function arguments or not string, received "${received}"`,
    key: (received) => `Key was not specified in function arguments or not string, received "${received}"`,
    value: (received) => `Value was not specified in function arguments, received "${received}"`,
    number: (received) => `Number was not specified in function arguments or not number, received "${received}"`,
    numberType: (received) => `Number argument must be an positive integer, received "${received}"`,
    query: (received) => `SQL Query was not specified in function arguments or not string, received "${received}"`,
    array: (key) => `"${key}" key's value is not an array`,
    notNumber: (key) => `"${key}" key's value is not a number`,
    dataNotFound: (key) => `Data with the key "${key}" was not found`,
    tableNotFound: (table) => `Table with the name "${table}" does not exist`,
    tableAlreadyExists: (table) => `Table with the name "${table}" already exists`,
    targetNotObject: (key) => `Cannot target a non-object with the key "${key}"`,
    variables: (received) => `Variables object argument was not specified in function arguments, received "${received}"`,
    variablesNotObject: (received) => `Variables argument is not an object, received "${received}"`,
    connectionError: (received) => `Cannot connect to the exist database, received "${received}"`,
    noTablesExisted: `No tables existed to get database ping, at least one table must be existed in the database`,
    tableRenameSameName: `Can't rename a table to its current name`,
};
//# sourceMappingURL=errors.js.map