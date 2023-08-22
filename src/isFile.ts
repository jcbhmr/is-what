import getType from "./getType.js";

export default function isFile(payload: any): payload is File {
  return getType(payload) === "File";
}
