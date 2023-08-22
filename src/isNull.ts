import getType from "./getType.js";

export default function isNull(payload: any): payload is null {
  return getType(payload) === "Null";
}
