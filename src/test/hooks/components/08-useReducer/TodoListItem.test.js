import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { TodoListItem } from '../../../../component/08-useReducer/TodoListItem';
import { demoTodos } from '../../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

    test('debe de mostrase correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toBeCalledWith(demoTodos[0].id);

    });

    test('debe de llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toBeCalledWith(demoTodos[0].id);

    });

    test('debe de mostrar el texto correctamente', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${0 + 1}.  ${demoTodos[0].desc}`);


    });

    test('dede de tener la clases complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);


    })



})
