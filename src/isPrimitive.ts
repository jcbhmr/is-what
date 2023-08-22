import isBoolean from "./isBoolean.js";
import isNull from "./isNull.js";
import isNumber from "./isNumber.js";
import isString from "./isString.js";
import isSymbol from "./isSymbol.js";
import isUndefined from "./isUndefined.js";

export default function isPrimitive(
  payload: any
): payload is boolean | null | undefined | number | string | symbol {
  return (
    isBoolean(payload) ||
    isNull(payload) ||
    isUndefined(payload) ||
    isNumber(payload) ||
    isString(payload) ||
    isSymbol(payload)
  );
}
