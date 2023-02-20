/**
 * @description Logs out, terminates the connection to Mysql, and destroys the client.
 * @returns void
 */

export default async function () {
  this.connection.destroy();
  this.connections.delete("default");
  this.emit("disconnect", this.connection);
}
