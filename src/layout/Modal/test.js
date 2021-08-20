import Modal from '.';

describe('Modal', ()=> {
    
    test('Itcheck if renders a div whose class is userModal', () => {      
        const stubHandleClick = jest.fn();
        renderWithReduxProvider(<Modal getResults={stubHandleClick} show={stubHandleClick} />)
        let modal = document.querySelector('.userModal');
        expect(modal).toBeInTheDocument();
    })
})