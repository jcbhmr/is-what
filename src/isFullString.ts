import isString from "./isString.js";

export default function isFullString(payload: any): payload is string {
  return isString(payload) && payload !== "";
}
