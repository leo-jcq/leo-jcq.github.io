import { useCallback, useMemo } from 'react';
import useSwitch from './useSwitch';

export enum OpenState {
    Open = 'open',
    Close = 'close'
}

export default function useOpen() {
    const [openState, switchOpenState, setOpenState] = useSwitch(OpenState.Close, OpenState.Open);

    const isOpen = useMemo(() => openState === OpenState.Open, [openState]);

    const open = useCallback(() => setOpenState(OpenState.Open), [setOpenState]);

    const close = useCallback(() => setOpenState(OpenState.Close), [setOpenState]);

    return { openState, isOpen, open, close, switchOpenState };
}
