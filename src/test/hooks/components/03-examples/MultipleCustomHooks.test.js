import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../../component/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../../hooks/useFetch';
import { useCounter } from '../../../../hooks/useCounter';
jest.mock('../../../../hooks/useFetch'); // Esto hace que cuando yo vaya a utilizar en este archivo, entonces en lugar de usar useFetch va a utilizar una implementación una implementacion que voy a inventar del useFetch
// el jest.mock hace la simulación del useFetch
jest.mock('../../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => { } // Pongo una funcion cualquiera para que no me tire error
    });

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />); // No recive ningun argumento

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Jose',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false); //No deberia de existir es lo que quiero decir aca
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Jose');

    })



})
