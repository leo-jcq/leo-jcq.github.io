import { Setter } from '@/types/react';
import shallowEqual from '@/utils/shallowEqual';
import { useCallback, useState } from 'react';

export default function useSwitch<T>(value1: T, value2: T): [T, VoidFunction, Setter<T>] {
    const [switchValue, setSwitchValue] = useState(value1);

    const switchVal = useCallback(() => {
        setSwitchValue((prev) => (shallowEqual(prev, value1) ? value2 : value1));
    }, [value1, value2]);

    return [switchValue, switchVal, setSwitchValue];
}
