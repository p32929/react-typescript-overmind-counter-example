import React from 'react';
import {useOvermind} from "../Overmind/OvermindHelper";

const Counter: React.FunctionComponent = () => {
    const {actions, state} = useOvermind()

    return (
        <div>
            <p>TEST OVERMIND: </p>
            <p>{state.counter}</p>
            <button onClick={() => {
                actions.increase(1);
            }}>++
            </button>
        </div>
    );
};

export default Counter;
