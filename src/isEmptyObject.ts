import isPlainObject from "./isPlainObject.js";

export default function isEmptyObject(
  payload: any
): payload is { [K in any]: never } {
  return isPlainObject(payload) && Object.keys(payload).length === 0;
}
