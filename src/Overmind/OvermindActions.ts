import {Action} from 'overmind';

export const increase: Action<number> = ({state}, nn) => {
    state.counter += nn;
};
