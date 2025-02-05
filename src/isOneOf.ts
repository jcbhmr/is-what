import { AnyFunction } from "./isFunction.js";

type TypeGuard<A, B extends A> = (payload: A) => payload is B;

/**
 * A factory function that creates a function to check if the payload is one of the given types.
 * @example
 * import { isOneOf, isNull, isUndefined } from 'is-what'
 *
 * const isNullOrUndefined = isOneOf(isNull, isUndefined)
 *
 * isNullOrUndefined(null) // true
 * isNullOrUndefined(undefined) // true
 * isNullOrUndefined(123) // false
 */
export default function isOneOf<A, B extends A, C extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
): TypeGuard<A, B | C>;
export default function isOneOf<A, B extends A, C extends A, D extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>,
): TypeGuard<A, B | C | D>;
export default function isOneOf<
  A,
  B extends A,
  C extends A,
  D extends A,
  E extends A,
>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>,
  d: TypeGuard<A, E>,
): TypeGuard<A, B | C | D | E>;
export default function isOneOf<
  A,
  B extends A,
  C extends A,
  D extends A,
  E extends A,
  F extends A,
>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>,
  d: TypeGuard<A, E>,
  e: TypeGuard<A, F>,
): TypeGuard<A, B | C | D | E | F>;
export default function isOneOf(
  a: AnyFunction,
  b: AnyFunction,
  c?: AnyFunction,
  d?: AnyFunction,
  e?: AnyFunction,
): (value: unknown) => boolean {
  return (value) =>
    a(value) ||
    b(value) ||
    (!!c && c(value)) ||
    (!!d && d(value)) ||
    (!!e && e(value));
}
