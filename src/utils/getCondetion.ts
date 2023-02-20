import CSV from "./convertSQLValues";

export default function (condetions: {}) {
  return Object.entries(condetions)
    .map(([key, value]) => `${key}=${CSV(value)}`)
    .join(" && ");
}
