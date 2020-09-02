


export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':

            return [...state, action.payload];

        case 'delete':

            return state.filter(todo => todo.id !== action.payload) //el filter va regresar todos los elementos de ese arreglo que cumpla una condicion
        // La condicion aca es que el todo.id sea diferente al que quiero borro, en este caso el action.payload
        default:
            return state;
    }

}