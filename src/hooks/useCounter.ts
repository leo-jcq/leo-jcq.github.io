import { useState } from 'react';
import type { Setter } from '@/types/react';

function useCounter(
    defaultVal: number = 0,
    step: number = 1
): [number, () => void, () => void, Setter<number>] {
    const [counter, setCounter] = useState(defaultVal);

    const increment = () => setCounter((prev) => prev + step);
    const decrement = () => setCounter((prev) => prev - step);

    return [counter, increment, decrement, setCounter];
}

export default useCounter;
