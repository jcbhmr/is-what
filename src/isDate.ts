import getType from "./getType.js";

export default function isDate(payload: any): payload is Date {
  return getType(payload) === "Date" && !isNaN(payload);
}
