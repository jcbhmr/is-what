import getType from "./getType.js";

export default function isArray(payload: any): payload is any[] {
  return getType(payload) === "Array";
}
