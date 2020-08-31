import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); // Al quote lo tengo en la data

    const { quote } = !!data && data[0]; //Si data es true entonces trae la data en la posición 0, con la dole negacion "!!" transformo el null en un falso

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                >{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}

