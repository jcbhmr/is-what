import getType from "./getType.js";

export default function isSymbol(payload: any): payload is symbol {
  return getType(payload) === "Symbol";
}
