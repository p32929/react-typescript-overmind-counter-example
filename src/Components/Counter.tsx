import React from 'react';
import {useActions, useAppState} from "../Overmind/OvermindHelper";

const Counter: React.FunctionComponent = () => {
    const {increase} = useActions()
    const {counter} = useAppState()

    return (
        <div>
            <p>TEST OVERMIND: </p>
            <p>{counter}</p>
            <button onClick={() => {
                increase(1);
            }}>++
            </button>
        </div>
    );
};

export default Counter;
