import getType from "./getType.js";

export default function isError(payload: any): payload is Error {
  return getType(payload) === "Error";
}
