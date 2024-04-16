/**
 * Compares two objects
 *
 * @export
 * @param {unknown} object1 The first object to compare
 * @param {unknown} object2 The second object to compare
 * @return {boolean} `true` if the objects are equal, `false` otherwise
 */
export default function shallowEqual(object1: unknown, object2: unknown): boolean {
    return JSON.stringify(object1) === JSON.stringify(object2);
}
