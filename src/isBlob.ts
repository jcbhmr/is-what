import getType from "./getType.js";

export default function isBlob(payload: any): payload is Blob {
  return getType(payload) === "Blob";
}
