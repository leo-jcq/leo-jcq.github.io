export default function shallowEqual(object1: unknown, object2: unknown) {
    return JSON.stringify(object1) === JSON.stringify(object2);
}
