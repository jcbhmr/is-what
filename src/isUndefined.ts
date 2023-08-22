import getType from "./getType.js";

export default function isUndefined(payload: any): payload is undefined {
  return getType(payload) === "Undefined";
}
