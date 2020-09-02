import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'



const init = () => {
    // Si hay todos traelos, pero esto puede regresar null y si trae null uso || para retornar un arreglo vacio 
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     donde: false
    // }]
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    // El init se usa como una funcion para inicializar el starte en caso de q el state sea procesado o tenga varias acciones
    // El dispatch ayuda a poder disparar las acciones hacia mi reducer. Es una funcion que le mandamos una acción 
    // init me va a ayudar a react a computar todo el estado inicial para que funcione ams rapido el componente y esa funcion no se ejecute cada vez que haya cambios

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) //El problema de localstorage es que soolo guarda string por eso uso JSON
    }, [todos]) //[todos] dependencia que si cambia significa que tengo que volver a grabar en localstorage

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>

                <div className="col-5">

                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </div>
            </div>

        </div>
    )
}
