import isArray from "./isArray.js";

export default function isFullArray(payload: any): payload is any[] {
  return isArray(payload) && payload.length > 0;
}
