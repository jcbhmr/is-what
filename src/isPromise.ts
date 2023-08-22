import getType from "./getType.js";

export default function isPromise(payload: any): payload is Promise<any> {
  return getType(payload) === "Promise";
}
