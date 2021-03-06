import getTag from './getTag'
import isObjectLike from './isObjectLike'

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @function
 * @since 0.0.10
 * @category base
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(new Set())
 * // => false
 */
const isWeakSet = (value) => isObjectLike(value) && getTag(value) == '[object WeakSet]'

export default isWeakSet
