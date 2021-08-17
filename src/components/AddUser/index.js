import React, { useState, useEffect } from 'react';

function AddUser({toggle, first, returnedValue }) {
    const [ generate, setGenerate ] = useState();
    const [ user, setUser] = useState('')
    const [ otherUser, setOtherUser] = useState([]);

    useEffect(()=>{
        returnedValue([user,...otherUser]);
    },[otherUser])
    useEffect(()=>{
        returnedValue([user,...otherUser]);
    },[user])
    const updateInput = e => {
        const input = e.target.value 
        setUser(input);
        returnedValue([user,...otherUser])
    }
    const generator = ()=>{
        setGenerate(!generate)
    } 
    const keyProcessor = (e)=>{
        if (e.keyCode === 13) {
            console.log(e)
            setGenerate(true);
        }
    }
    const handleReturn= (e)=>{
        setOtherUser(e);
        returnedValue([user,...otherUser]);
    }
    
    return (
        <>
        <div>
            {first && <button onClick={()=>toggle()}>-</button>}
            <input type="text" value={user} name='users[]' onChange={updateInput} onKeyDown={keyProcessor}/>
        </div>
        {(generate)? <AddUser toggle={generator} first={true} returnedValue={handleReturn}/> :  <button className='addUser' onClick={generator}>+</button>}
        </>
    );
};

export default AddUser;
