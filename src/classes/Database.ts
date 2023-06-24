declare global {
  namespace NodeJS {
    interface EventEmitter {
      on(eventName: "connect", listener: (connection: any) => void): this;
      on(eventName: "disconnect", listener: (connection: any) => void): this;
      on(
        eventName: "insertRow",
        listener: (table: string, values: any) => void
      ): this;
      on(
        eventName: "updateRow",
        listener: (table: string, oldValues: any, newValues: any) => void
      ): this;
      on(
        eventName: "deleteRow",
        listener: (table: string, values: any) => void
      ): this;
    }
  }
}

import * as mysql from "promise-mysql";
import { EventEmitter } from "events";
import * as methods from "../methods";
const connections = new Map();

class Database extends EventEmitter {
  constructor(options: mysql.PoolConfig | string) {
    super();
    const Class = this;
    (async () => {
      if (
        connections.get("default") &&
        JSON.stringify(connections.get("default").options) ==
          JSON.stringify(options)
      ) {
        Class.db = connections.get("default").db;
        Class.connection = connections.get("default").connection;
      } else {
        Class.db = await mysql.createPool(options);
        //@ts-ignore
        Class.db.getConnection((err: any, connection: mysql.PoolConnection) => {
          if (err) throw new TypeError(`Connection Error: ${err}`);
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
  public connections: Map<"default", any> = connections;
  public db: mysql.Pool;
  public connection: mysql.Connection;
  public destroy = methods.destroy;
  public ping = methods.ping;
  public insert = methods.insert;
  public selectAll = methods.selectAll;
  public select = methods.select;
  public delete = methods.delete;
  public update = methods.update;
  public tables = methods.tables;
}

export default Database;
