import { Setter } from '@/types/react';
import shallowEqual from '@/utils/shallowEqual';
import { useCallback, useState } from 'react';

/**
 * Custom hook to switch between two values
 *
 * @export
 * @template T The type of the values
 * @param {T} value1 The first value
 * @param {T} value2 The second value
 * @return {[T, VoidFunction, Setter<T>]} The current value, the switch function and the setter function
 */
export default function useSwitch<T>(value1: T, value2: T): [T, VoidFunction, Setter<T>] {
    const [switchValue, setSwitchValue] = useState(value1);

    const switchVal = useCallback(() => {
        setSwitchValue((prev) => (shallowEqual(prev, value1) ? value2 : value1));
    }, [value1, value2]);

    return [switchValue, switchVal, setSwitchValue];
}
