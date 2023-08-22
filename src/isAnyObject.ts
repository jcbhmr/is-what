import getType from "./getType.js";
import type { PlainObject } from "./isPlainObject.js";

export default function isAnyObject(payload: any): payload is PlainObject {
  return getType(payload) === "Object";
}
