import React, { useState, useEffect } from 'react';
import Timebar from '../Timebar';
import './style.css'

const renderHTML = (rawHTML,type) => React.createElement(type, { dangerouslySetInnerHTML: { __html: rawHTML } });

function Question({question, selected}) {
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState('');
    const [isFirstRun,setIsFirstRun] = useState(true);

    useEffect(()=>{
        const newOptions=randomizer([question.correct_answer, ...question.incorrect_answers]);
        setOptions(newOptions);
        showOptions()
    },[])

    useEffect(()=>{
        if (isFirstRun) {
            setIsFirstRun(false);
            return;
          }
        else {selected(input)}
    },[input])

    function randomizer(array){
        const randomizedArray=[];
        const copyArray = array;
        while(copyArray.length>1){
            randomizedArray.push(copyArray.splice(Math.floor(Math.random()*copyArray.length),1)[0])
        }
        randomizedArray.push(copyArray.pop())
        return randomizedArray;
    }

    function showOptions(){
        return options.map((option,i) =>{
            return( <label key={i}> { renderHTML(option,'p')}
                        <input type='radio' name='option' value={option} onChange={(e)=>setInput(e.target.value)} />
                    </label>
            )
        });
    }

    return (
        
        <div className='question'>
            {renderHTML(question.question,'h3')}
            <div className='options'>
                {options && showOptions()}
            </div>
            <Timebar duration='10000' endAction={(e)=>setInput(e)}/>
        </div>
    );

}

export default Question;