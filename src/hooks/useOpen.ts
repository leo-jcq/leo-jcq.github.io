import { useCallback, useMemo } from 'react';
import useSwitch from './useSwitch';

/**
 * Enum to represent the open state
 *
 * @export
 * @enum {string}
 */
export enum OpenState {
    Open = 'open',
    Close = 'close'
}

/**
 * Custom hook to manage the open state
 *
 * @export
 * @return The open state, a function to open, a function to close and a function to switch the open state
 */
export default function useOpen() {
    const [openState, switchOpenState, setOpenState] = useSwitch(OpenState.Close, OpenState.Open);

    const isOpen = useMemo(() => openState === OpenState.Open, [openState]);

    const open = useCallback(() => {
        setOpenState(OpenState.Open);
    }, [setOpenState]);

    const close = useCallback(() => {
        setOpenState(OpenState.Close);
    }, [setOpenState]);

    return { openState, isOpen, open, close, switchOpenState };
}
