import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../../component/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../../component/03-examples/MultipleCustomHooks';
jest.mock('../../../../component/03-examples/MultipleCustomHooks');


describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false); // Evaluo si existe el componente Multiple... false es decir por defecto cuando se crea el componente no deberia de existir
    });

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })



})


//simular el onClick y ver si aparece multiplecustomhooks