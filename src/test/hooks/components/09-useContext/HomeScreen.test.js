import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../../component/09-useContext/HomeScreen';
import { UserContext } from '../../../../component/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Jose',
        email: 'jose@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })


})
