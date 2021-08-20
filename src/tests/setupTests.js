import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import axios from 'axios';
import mainReducer from '../reducers/index';

jest.mock('axios')
axios.get.mockResolvedValue({ data: { message: [] }})

const TestProviders = ({ initState }) => {
    initState ||= {categories: [], settings: [], scores: [], loading: false }
    const testStore = createStore(() => mainReducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            <MemoryRouter>
                { children }
            </MemoryRouter>
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, {wrapper: TestWrapper, ...options})
}

global.React = React;
global.renderWithReduxProvider = renderWithReduxProvider;
global.userEvent = userEvent;