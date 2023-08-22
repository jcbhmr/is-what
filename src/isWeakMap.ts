import getType from "./getType.js";

export default function isWeakMap(payload: any): payload is WeakMap<any, any> {
  return getType(payload) === "WeakMap";
}
