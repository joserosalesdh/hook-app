import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import useForm from '../../hooks/useForm'



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
    const [{ description }, handleInputChange, reset] = useForm({ //desestructuro description de formValues
        description: '',
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) //El problema de localstorage es que soolo guarda string por eso uso JSON
    }, [todos]) //[todos] dependencia que si cambia significa que tengo que volver a grabar en localstorage

    const handleDelete = (todoId) => {

        console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) { // Esta es una validación para que no agregue un string vacio
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            donde: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">{i + 1}.  {todo.desc}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                        type="submit"
                                    >
                                        Borrar
                            </button>
                                </li>
                            ))
                        }

                    </ul>

                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                            </button>
                    </form>


                </div>
            </div>

        </div>
    )
}
