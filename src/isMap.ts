import getType from "./getType.js";

export default function isMap(payload: any): payload is Map<any, any> {
  return getType(payload) === "Map";
}
