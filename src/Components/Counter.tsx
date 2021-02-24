import React from 'react'
import {useOvermind} from "../Overmind/OvermindHelper";

interface Props {
}

function Counter(props: Props) {
    const {state, actions} = useOvermind();

    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => {
                actions.increase(1);
            }}>++
            </button>
        </div>
    )
}

export default Counter
