import {Action} from 'overmind';

export const increase: Action<number> = ({state}, num) => {
    state.counter += num;
};
