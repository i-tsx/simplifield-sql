<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/simplifield-sql" target="_blank"><img src="https://nodei.co/npm/simplifield-sql.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
	<p>
		<a href="https://www.npmjs.com/package/simplifield-sql"><img src="https://img.shields.io/npm/v/simplifield-sql.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://nodejs.org/" target="_blank"><img alt="node-current" src="https://img.shields.io/node/v/simplifield-sql?logo=node.js&logoColor=white"></a>
    <a href="https://discord.gg/DmddDKmygG" target="_blank"><img alt="chat-online" src="https://img.shields.io/discord/907619601943244853"></a>
		<a href="https://www.npmjs.com/package/simplifield-sql"><img src="https://img.shields.io/npm/dt/simplifield-sql.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

---

# About

simplifield-sql is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[MySQL Database](https://dev.mysql.com/doc/).

---

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install simplifield-sql
yarn add simplifield-sql
```

---

## Example usage

Install simplifield-sql:

```sh-session
npm install simplifield-sql
yarn add simplifield-sql
```

Create new database connection:

```js
const Database = require("simplifield-sql");

const db = new Database({
  user: "root",
  host: "localhost",
  database: "myowndatabase",
  password: "mysecretshellpassword",
});

db.on("connect", (connection) => {
  console.log(`Connected to ${connection.config.database} database 👌`);
});
```

And now you're able to **insert**, **update** and **delete** the database **rows**

---

# Methods

## **Connections**

- **[Destroy Connection](#destroy)**
- **[Ping](#ping)**

## **Tables**

- **[Tables](#tables-2)**

## **Rows**

- **[Select](#selecttable-condetions)**
- **[Select All](#selectalltable-condetions)**
- **[Insert](#inserttable-values)**
- **[Update](#updatetable-condetions-values)**
- **[Delete](#deletetable-condetions)**

---

# Documents

## Connections

> ### [.destroy()](#destroy)
>
> Logs out, terminates the connection to Mysql, and destroys the client.
>
> **Returns:** [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

> ### [.ping()](#ping)
>
> The speed of the database connection with the server
>
> **Returns:** [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## **Tables**

> ### [.tables()](#tables-2)
>
> Array that contains all of the database tables
>
> **Returns:** [Table[]](##)

## **Rows**

> ### [.select(table, condetions)](#selecttable-condetion)
>
> To select a specific from the table
>
> | PARAMETER  |  TYPE  |           DESCRIPTION           |
> | :--------: | :----: | :-----------------------------: |
> |   table    | string |         The mysql table         |
> | condetions | object | The condetions of data updation |
>
> **Returns:** [Data?](##)

> ### [.selectAll(table, condetions)](#selectalltable-condetion)
>
> To select all rows from the table using the data conditions
>
> | PARAMETER  |  TYPE  |           DESCRIPTION           |
> | :--------: | :----: | :-----------------------------: |
> |   table    | string |         The mysql table         |
> | condetions | object | The condetions of data updation |
>
> **Returns:** [Data[]](##)

> ### [.insert(table, values)](#inserttable-values)
>
> To insert new values on the table
>
> | PARAMETER  |  TYPE  |           DESCRIPTION           |
> | :--------: | :----: | :-----------------------------: |
> |   table    | string |         The mysql table         |
> | condetions | object | The condetions of data updation |
>
> **Returns:** [Data](##)

> ### [.update(table, condetions, values)](#updatetable-condetions-values)
>
> To update a specific row in the table
>
> | PARAMETER  |  TYPE  |           DESCRIPTION           |
> | :--------: | :----: | :-----------------------------: |
> |   table    | string |         The mysql table         |
> | condetions | object | The condetions of data updation |
> |   values   | object |         The new values          |
>
> **Returns:** [Data](##)

> ### [.delete(table, condetions)](#deletetable-condetions)
>
> To delete a specific row from the table
>
> | PARAMETER  |  TYPE  |           DESCRIPTION           |
> | :--------: | :----: | :-----------------------------: |
> |   table    | string |         The mysql table         |
> | condetions | object | The condetions of data deletion |
>
> **Returns:** [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
