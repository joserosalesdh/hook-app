import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null }); //Pongo esto al principio para que me aparezaca el cuadradito de loading... cada vez que quiero que se ejecute cuando a la api cuando todo el boton "Siguiente quote"
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })
            })

    }, [url])

    return state;

}

