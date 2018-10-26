import isString from '../base/isString'
import curry from '../common/curry'
import dispatchable from '../common/dispatchable'
import resolveWith from '../common/resolveWith'
import concat from './concat'

const dispatcher = dispatchable('prepend', (value, arrayLike) => {
  if (isString(arrayLike)) {
    return concat(value, arrayLike)
  }
  return concat([value], arrayLike)
})

/**
 * Returns a new list with the given element at the front, followed by the contents of the list.
 *
 * This method dispatches to the `prepend` method of the `arrayLike` argument if it exists.
 *
 * This method will auto upgrade to async and resolve the `arrayLike` value if the `arrayLike` value is a Promise.
 *
 * @function
 * @since v0.0.13
 * @category data
 * @param {*} value The value to add to the end of the new list.
 * @param {Array|string} arrayLike The array like value of elements to prepend a new item to.
 * @return {Array|string} A new array or string containing the elements of the old list prepended with `value`.
 * @example
 *
 * prepend('write', ['more', 'tests']) //=> ['write', 'more', 'tests']
 * prepend('write', []) //=> ['write']
 * prepend(['write'], ['more', 'tests']) //=> ['write', 'more', ['tests']]
 * prepend('write', ' more tests') //=> 'write more tests'
 */
const prepend = curry((value, arrayLike) =>
  resolveWith((resolvedArrayLike) => dispatcher(value, resolvedArrayLike), arrayLike)
)

export default prepend
