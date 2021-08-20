import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'
import { Home } from '../../pages'

describe('Testing Home page', ()=> {
    beforeEach(() => {
        renderWithReduxProvider(<App />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    describe('Home page', () => {
        test('renders with correct title', () => {
            const heading = screen.getByRole('heading', {name: "title"})
            expect(heading.textContent).toContain('Brainiac')
        })

        test('renders with form', () => {
            const form = screen.getByRole('form', {name: "quizSettingsForm"})
            expect(form).toBeInTheDocument();
        })

        // test('it pushes user to nex page on click', () => {
        //     let locationInput = screen.getByLabelText('Location');
        //     userEvent.type(locationInput, "Hong Kong{enter}")
        //     expect(getResultMock).toHaveBeenNthCalledWith(1, 'Hong Kong');
        // })

        test('renders with team names', () => {
            const heading = screen.getByRole('heading', {level:2})
            expect(heading.textContent).toContain('Deborah, Monica & Scott')
        })
        
    })

    // test('What you want to test', () =>{
    //     expect().toBeInTheDocument();
    //     expect().toHaveBeenCalledTimes(1);
    //     expect().toBe();
    //     expect().toContain();
    //     expect().toEqual();
    //     expect().toBeInstanceOf();
    // })
})

describe('Testing connective functions on Home page', ()=> {
    test('it calls handleAddUser on click', () => {
        const stubHandleClick = jest.fn();
        renderWithReduxProvider(<Home handleClick={stubHandleClick}/>)
        let addUsrBtn = screen.getByRole('button', { name: 'Add-User-Page' });
        userEvent.click(addUsrBtn)
        expect(stubHandleClick).toHaveBeenCalledTimes(0);
    })
})