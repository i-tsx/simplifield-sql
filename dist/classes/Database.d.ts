/// <reference types="node" />
declare global {
    namespace NodeJS {
        interface EventEmitter {
            on(eventName: "connect", listener: (connection: any) => void): this;
            on(eventName: "disconnect", listener: (connection: any) => void): this;
            on(eventName: "insertRow", listener: (table: string, values: any) => void): this;
            on(eventName: "updateRow", listener: (table: string, oldValues: any, newValues: any) => void): this;
            on(eventName: "deleteRow", listener: (table: string, values: any) => void): this;
        }
    }
}
import * as mysql from "promise-mysql";
import { EventEmitter } from "events";
import * as methods from "../methods";
declare class Database extends EventEmitter {
    constructor(options: mysql.PoolConfig | string);
    connections: Map<"default", any>;
    db: mysql.Pool;
    connection: mysql.Connection;
    destroy: typeof methods.destroy;
    ping: typeof methods.ping;
    insert: typeof methods.insert;
    selectAll: typeof methods.selectAll;
    select: typeof methods.select;
    delete: typeof methods.delete;
    update: typeof methods.update;
    tables: typeof methods.tables;
}
export default Database;
