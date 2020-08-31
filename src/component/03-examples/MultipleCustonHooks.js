import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustonHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); // Al quote lo tengo en la data

    const { author, quote } = !!data && data[0]; //Si data es true entonces trae la data en la posición 0, con la dole negacion "!!" transformo el null en un falso

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}

