
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') { // El "?" es para que si la accion tiene algun valor entonces lee el tipo, si no que no haga nada
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

const agregarTodoAction = {
    type: 'agregar', // El type va a decirme o le va adecir a reducer que tipo de accion es si es para borrar, agregar o actualizar, etc
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);



console.log(todos);