import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2, counter3, counter4 } = state;

    const handleChange =
        () => {
            setState({
                ...state, //Como estoy buscando solo aumentar en uno al contador 1, para que me mantenga los mismos valores del estado orginal tengo que usar un spread operator asi los otros contadores quedan como estan y no desaparecen en el neuvo estado setState
                counter1: counter1 + 1,
                counter2: counter2 + 1
            });
        }


    return (
        <>
            <h1>Counter1 {counter1} </h1>
            <h1>Counter2 {counter2} </h1>
            <h1>Counter3 {counter3} </h1>
            <h1>Counter4 {counter4} </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleChange}
            >
                +1
            </button>
        </
        >
    )
}

export default CounterApp
