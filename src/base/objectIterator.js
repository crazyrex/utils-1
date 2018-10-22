import arrayIterator from './arrayIterator'
import isObject from './isObject'
import toString from './toString'
import objectKeys from './objectKeys'

/**
 * Returns iterator for an object's keys and values.
 *
 * @function
 * @since v0.0.11
 * @category data
 * @param {*} object The array object to create an iterator for.
 * @return {Iterator} A new iterator for the given object's keys and values
 * @example
 *
 * objectIterator({ write: 'more', tests: 'asap' })
 * //=> {
 * //   next: () => ({
 * //     value: *,
 * //     done: boolean,
 * //     kdx: string,
 * //     key: string
 * //   })
 * // }
 *
 * iter.next()
 * //=> { value: 'more', key: 'write', kdx: 'write', done: false }
 * iter.next()
 * //=> { value: 'asap', key: 'tests', kdx: 'tests', done: false }
 * iter.next()
 * //=> { done: true }
 */
const objectIterator = (object) => {
  if (!isObject(object)) {
    throw new TypeError(
      `objectIterator expected object to be an Object. Instead received ${toString(object)}`
    )
  }
  const keyIterator = arrayIterator(objectKeys(object))
  return {
    next: () => {
      const { done, value } = keyIterator.next()
      if (done) {
        return { done, value }
      }
      return {
        done,
        kdx: value,
        key: value,
        value: object[value]
      }
    }
  }
}

export default objectIterator