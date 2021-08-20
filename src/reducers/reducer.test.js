import { render } from 'react-dom'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import App from '../App'
import mainReducer from './index'

describe('Reducer tests', ()=> {
    // test('What you want to test', () =>{
    //     expect().toBeInTheDocument();
    //     expect().toHaveBeenCalledTimes(1);
    //     expect().toBe();
    //     expect().toContain();
    //     expect().toEqual();
    //     expect().toBeInstanceOf();
    // })

    test('it intialises with no categories, settings, scores and loading of false', () => {
        const initReturn = mainReducer(undefined, { type: '@@INIT' })
        expect(initReturn).toEqual({ categories: [], settings: [], scores: [], loading: false })
    })

    test('it returns with updated array when categories are loaded', () => {
        const fakeLoad = mainReducer(
                            { categories: [] },
                            { type: 'UPDATE_CATEGORY', payload: [{ id: 1 }, { id: 2 }]}
                        )
        expect(fakeLoad).toMatchObject({categories: [
                                    { id: 1 },
                                    { id: 2 }
                                ]})
    })

    test('it returns with updated array when settings are loaded', () => {
        const fakeLoad = mainReducer(
                            { settings: [
                                { id: 1, liked: false },
                                { id: 2, liked: false }
                            ] },
                            { type: 'UPDATE_SETTINGS', payload: 1}
                        )
        expect(fakeLoad).toMatchObject({ settings: [
                                { id: 1, liked: true },
                                { id: 2, liked: false }
                            ]})
    })

    // test('it returns with updated array when local scores are loaded', () => {
    //     const fakeLoad = mainReducer(
    //                         { scores: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'UPDATE_LOCAL_SCORES', payload: 1}
    //                     )
    //     expect(fakeLoad).toMatchObject({
    //                         scores: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                                         ]
    //                                     })
    // })

    // test('it returns with updated array when questions are loaded', () => {
    //     const fakeLoad = mainReducer(
    //                         { questions: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'UPDATE_QUESTIONS', payload: 1}
    //                     )
    //     expect(fakeLoad).toMatchObject({
    //                         questions: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ]
    //                     })
    // })
})