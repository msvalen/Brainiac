import AddUser from '.';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import './style.css'

describe('AddUser', ()=> {
    
    test('It renders a button if first is equal to true ', () => {       
        renderWithReduxProvider(<AddUser toggle={false} first={true} returnedValue={()=>'yes'} />)
        let button = screen.getByText('-');
        expect(button).toBeInTheDocument();
    })
})