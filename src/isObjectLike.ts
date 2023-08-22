import isAnyObject from "./isAnyObject.js";
import { PlainObject } from "./isPlainObject.js";

export default function isObjectLike<T extends PlainObject = PlainObject>(
  payload: any,
): payload is T {
  return isAnyObject(payload);
}
