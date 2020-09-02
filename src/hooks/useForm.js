import { useState } from 'react';

const useForm = (initialState = {}) => { // Mando como objeto vacio porque si no me manda nada me evito que me tire un error

    const [values, setValues] = useState(initialState);
    // El initialState seria un objeto exactamente igual a:
    // ({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })

    }

    return [values, handleInputChange, reset];

}

export default useForm
