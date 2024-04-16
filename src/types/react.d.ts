import { Dispatch, SetStateAction } from 'react';

/**
 * Type for a setter function returned by {@link React.useState}
 */
export type Setter<T> = Dispatch<SetStateAction<T>>;
