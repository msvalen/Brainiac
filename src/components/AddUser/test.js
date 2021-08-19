import { render } from 'react-dom'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import App from '../../App'

describe('Name for test suite', ()=> {
    beforeEach(() => {
        renderWithReduxProvider(<App />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    test('What you want to test', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })
})