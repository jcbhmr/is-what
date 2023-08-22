import isNumber from "./isNumber.js";

export default function isPositiveNumber(payload: any): payload is number {
  return isNumber(payload) && payload > 0;
}
