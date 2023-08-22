import getType from "./getType.js";

export default function isWeakSet(payload: any): payload is WeakSet<any> {
  return getType(payload) === "WeakSet";
}
