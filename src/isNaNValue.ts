import getType from "./getType.js";

export default function isNaNValue(payload: any): payload is typeof NaN {
  return getType(payload) === "Number" && isNaN(payload);
}
