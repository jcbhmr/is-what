import getType from "./getType.js";

export default function isBoolean(payload: any): payload is boolean {
  return getType(payload) === "Boolean";
}
