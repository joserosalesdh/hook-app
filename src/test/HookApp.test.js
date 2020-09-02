import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import HookApp from '../HookApp';

describe('Pruebas en <HookApp.js />', () => {

    test('debe de mostrarse correctamente', () => {

        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

    });


});
