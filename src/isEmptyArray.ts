import isArray from "./isArray.js";

export default function isEmptyArray(payload: any): payload is [] {
  return isArray(payload) && payload.length === 0;
}
