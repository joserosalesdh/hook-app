import React from 'react';
import { shallow, ReactWrapper } from 'enzyme';
import '@testing-library/jest-dom';
import { demoTodos } from '../../../fixtures/demoTodos';
import { TodoAdd } from '../../../../component/08-useReducer/TodoAdd';


const handleAddTodo = jest.fn();

const wrapper = shallow(
    <TodoAdd
        handleAddTodo={handleAddTodo}
    />)

describe('Pruebas en <TodoAdd />', () => {


    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe de llamar el handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0); //Espero que haya sido llamado 0 veces

    });

    test('debe de llamar la función handleAddTodo', () => {

        const value = 'Aprender React' //Creo q   ue valor que quiero cambiar, seria el valor que tiene la caja de texto
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description' // Es el nombre del cambo que quiero cambiar
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // Espera cualquier objeto
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        }); //le detallo el objeto

        expect(wrapper.find('input').prop('value')).toBe('');

    });



})
