import getType from "./getType.js";

export default function isNumber(payload: any): payload is number {
  return getType(payload) === "Number" && !isNaN(payload);
}
