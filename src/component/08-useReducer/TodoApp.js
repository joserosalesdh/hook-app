import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReduce'


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    donde: false
}]
export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)
    // El init se usa como una funcion para inicializar el starte en caso de q el state sea procesado o tenga varias acciones
    // El dispatch ayuda a poder disparar las acciones hacia mi reducer



    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>todo 1</li>
                <li>todo 2</li>
                <li>todo 3</li>
            </ul>

        </div>
    )
}
