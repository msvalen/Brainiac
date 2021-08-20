import React, { useState, useEffect } from 'react';
import {AddUser} from '../../components/'
import './style.css'

function Modal( { getResults, show }) {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        console.log(users);
    },[])

    const handler = (e) => {
        e.preventDefault();
        getResults(users)
        show();
    }

    return (
        <div className='userModal'>
            <div>
                <span onClick={show}  style={{cursor: "pointer"}}>x</span>
                <div className='modalContent'>       
                    <AddUser toggle={false} first={false} returnedValue={(e)=>setUsers(e)}/>
                    <button onClick={handler}>submit</button>
                </div>
            </div>
        </div>
    )
}
export default Modal