


export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':

            return [...state, action.payload];

        case 'delete':

            return state.filter(todo => todo.id !== action.payload); //el filter va regresar todos los elementos de ese arreglo que cumpla una condicion
        // La condicion aca es que el todo.id sea diferente al que quiero borro, en este caso el action.payload

        case 'toggle':

            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            )

        case 'toggle-old':

            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done //pongo ! para hacer lo contrario a como este el done si es false o true
                    }
                } else {
                    return todo;
                }
            })

        default:
            return state;
    }

}