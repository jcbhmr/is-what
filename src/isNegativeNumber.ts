import isNumber from "./isNumber.js";

export default function isNegativeNumber(payload: any): payload is number {
  return isNumber(payload) && payload < 0;
}
