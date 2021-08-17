import React, { useState } from 'react';
import {AddUser} from '../../components/'
import './style.css'

function Modal( { getResults, show }) {
    const [users, setUsers] = useState([])

    const handler = (e) => {
        e.preventDefault();
        // let users=[]
        // for(let x of e.target){
        //     if(x.value) users.push(x.value);
        // }
        getResults(users)
        show();
    }

    return (
        <div className='userModal'>
            <div>
                <span onClick={show}>x</span>
                <div>       
                    <AddUser toggle={false} first={false} returnedValue={(e)=>setUsers(e)}/>
                    <button onClick={handler}>submit</button>
                </div>
            </div>
        </div>
    )
}
export default Modal