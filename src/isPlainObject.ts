import getType from "./getType.js";

export type PlainObject = Record<string | number | symbol, any>;

export default function isPlainObject(payload: any): payload is PlainObject {
  if (getType(payload) !== "Object") return false;
  const prototype = Object.getPrototypeOf(payload);
  return (
    !!prototype &&
    prototype.constructor === Object &&
    prototype === Object.prototype
  );
}
