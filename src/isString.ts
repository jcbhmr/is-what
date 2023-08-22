import getType from "./getType.js";

export default function isString(payload: any): payload is string {
  return getType(payload) === "String";
}
