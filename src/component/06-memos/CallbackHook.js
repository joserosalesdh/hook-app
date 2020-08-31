import React, { useState, useCallback } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => { // num de numero
        setCounter(c => c + num); // useCallback va a regresar un funcion memorizada de esa funcion 
    }, [setCounter])


    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
