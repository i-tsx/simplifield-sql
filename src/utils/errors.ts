export default {
  table: (received: any) =>
    `Table was not specified in function arguments or not string, received "${received}"`,

  key: (received: any) =>
    `Key was not specified in function arguments or not string, received "${received}"`,

  value: (received: any) =>
    `Value was not specified in function arguments, received "${received}"`,

  number: (received: any) =>
    `Number was not specified in function arguments or not number, received "${received}"`,

  numberType: (received: any) =>
    `Number argument must be an positive integer, received "${received}"`,

  query: (received: any) =>
    `SQL Query was not specified in function arguments or not string, received "${received}"`,

  array: (key: any) => `"${key}" key's value is not an array`,

  notNumber: (key: any) => `"${key}" key's value is not a number`,

  dataNotFound: (key: any) => `Data with the key "${key}" was not found`,

  tableNotFound: (table: any) =>
    `Table with the name "${table}" does not exist`,

  tableAlreadyExists: (table: any) =>
    `Table with the name "${table}" already exists`,

  targetNotObject: (key: any) =>
    `Cannot target a non-object with the key "${key}"`,

  variables: (received: any) =>
    `Variables object argument was not specified in function arguments, received "${received}"`,

  variablesNotObject: (received: any) =>
    `Variables argument is not an object, received "${received}"`,

  connectionError: (received: any) =>
    `Cannot connect to the exist database, received "${received}"`,

  noTablesExisted: `No tables existed to get database ping, at least one table must be existed in the database`,

  tableRenameSameName: `Can't rename a table to its current name`,
};
