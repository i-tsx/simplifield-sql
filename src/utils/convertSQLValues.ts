export default function (data: any) {
  if (typeof data == "bigint") return data;

  if (typeof data == "boolean") return data;

  if (typeof data == "function") return data.toString();

  if (typeof data == "number") return data;

  if (typeof data == "object") {
    if (data instanceof Date) {
      var pad = function (num: number) {
        return ("00" + num).slice(-2);
      };
      return `"${data.getUTCFullYear()}-${pad(data.getUTCMonth() + 1)}-${pad(
        data.getUTCDate()
      )} ${pad(data.getUTCHours())}:${pad(data.getUTCMinutes())}:${pad(
        data.getUTCSeconds()
      )}"`;
    } else return `'${JSON.stringify(data)}'`;
  }

  if (typeof data == "string")
    switch (data) {
      case "id":
        return "id";
      default:
        return `"${data}"`;
    }

  if (typeof data == "symbol") return data.toString();

  if (typeof data == "undefined") return `""`;
}
