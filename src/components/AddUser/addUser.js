import React, { useState, useEffect } from 'react';

function AddUser({toggle, first }) {
    const [ generate, setGenerate ] = useState();
    const [ user, setUser] = useState("")
   

    const updateInput = e => {
        const input = e.target.value 
        setUser(input)
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
    return (
        <>
        <div>
            {first && <button onClick={()=>toggle()}>-</button>}
            <input type="text" value={user} name='users[]' onChange={updateInput} onKeyDown={keyProcessor}/>
        </div>
        {(generate)? <AddUser toggle={generator} first={true}/> :  <button className='addUser' onClick={generator}>+</button>}
        </>
    );
};

export default AddUser;