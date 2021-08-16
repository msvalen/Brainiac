import React, { useState } from 'react';
import AddUser from '../../components/AddUser/addUser'
import './style.css'

function Modal( { getResults, show }) {

    const handler = (e) => {
        e.preventDefault();
        let users=[]
        for(let x of e.target){
            if(x.value) users.push(x.value);
        }
        getResults(users)
        show();
    }

    return (
        <div className='userModal'>
            <div>
                <span onClick={show}>x</span>
                <form onSubmit={handler}>       
                    <AddUser toggle={false} first={false}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default Modal