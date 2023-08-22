import getType from "./getType.js";

export default function isSet(payload: any): payload is Set<any> {
  return getType(payload) === "Set";
}
