import getType from "./getType.js";

export default function isRegExp(payload: any): payload is RegExp {
  return getType(payload) === "RegExp";
}
