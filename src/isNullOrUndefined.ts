import isNull from "./isNull.js";
import isOneOf from "./isOneOf.js";
import isUndefined from "./isUndefined.js";

const isNullOrUndefined = isOneOf(isNull, isUndefined);
export default isNullOrUndefined;
