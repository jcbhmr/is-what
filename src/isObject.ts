import isPlainObject, { PlainObject } from "./isPlainObject.js";

export default function isObject(payload: any): payload is PlainObject {
  return isPlainObject(payload);
}
