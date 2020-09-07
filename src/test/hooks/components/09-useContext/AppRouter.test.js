import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../../component/09-useContext/UserContext';
import AppRouter from '../../../../component/09-useContext/AppRouter';
import '@testing-library/jest-dom';

describe('Pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Jose'
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });


});
