import { todoReducer } from '../../../../component/08-useReducer/todoReducer';
import { demoTodos } from '../../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {}); // Mando un objeto vacio que va a ser mi action

        expect(state).toEqual(demoTodos);

    })

    test('debe de agregar un TODO', () => {
        //creo un nuevo state y ese estado va a llamar el todoreducr, igual que arriba pero action que voy a mandar es la accion necesaria para que se haga el add
        //lo que va a regresar es el estado anterior junto con el nuevo todo

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    })

    test('debe de eliminar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);

    })

    test('debe de hacer el toggle del TODO', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true); // Ver si cambio el primer elemento
        expect(state[1]).toEqual(demoTodos[1]); // Asegurarme de que no cambio el segundo elemento


    })




})
