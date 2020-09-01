import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReduce'


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    donde: false
}]
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    // El init se usa como una funcion para inicializar el starte en caso de q el state sea procesado o tenga varias acciones
    // El dispatch ayuda a poder disparar las acciones hacia mi reducer. Es una funcion que le mandamos una acción 

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            donde: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
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
                            name="descrption"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
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
