import App from '../../App';

describe('Name for test suite', ()=> {
    beforeEach(() => {
        renderWithReduxProvider(<App />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    // describe('Home page', () => {
    //     test('renders with correct title', () => {
    //         const heading = screen.getByRole('heading')
    //         expect(heading.textContent).toContain('Brainiac')
    //     })
    // })

    test('What you want to test', () =>{
    //     expect().toBeInTheDocument();
    //     expect().toHaveBeenCalledTimes(1);
    //     expect().toBe();
    //     expect().toContain();
    //     expect().toEqual();
    //     expect().toBeInstanceOf();
    })
})