/**
 * Checks if `value` is `undefined`.
 *
 * @function
 * @since 0.0.3
 * @category base
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0) // => true
 *
 * isUndefined(null) // => false
 */
const isUndefined = (value) => value === undefined

export default isUndefined
