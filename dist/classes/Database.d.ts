declare global {
    namespace NodeJS {
        interface EventEmitter {
            on(eventName: "connect" | "disconnect" | "insertRow" | "updateRow" | "deleteRow", listener: (...args: any[]) => void): this;
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
