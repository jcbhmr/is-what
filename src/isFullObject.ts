import isPlainObject, { PlainObject } from "./isPlainObject.js";

export default function isFullObject(payload: any): payload is PlainObject {
  return isPlainObject(payload) && Object.keys(payload).length > 0;
}
