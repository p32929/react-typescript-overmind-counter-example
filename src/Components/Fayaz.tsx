import React from 'react';

interface Props {
    n1: number,
    n2: number
}

function abc(a: number, b: number | string): string {
    return a + '' + b
}

const Fayaz = (props: Props) => {
    const {n1, n2} = props

    return (
        <div>
            {abc(n1, n2)}
        </div>
    );
};

export default Fayaz;