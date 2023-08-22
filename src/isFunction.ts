export type AnyFunction = (...args: any[]) => any;

export default function isFunction(payload: any): payload is AnyFunction {
  return typeof payload === "function";
}
