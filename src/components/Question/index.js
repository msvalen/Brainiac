import React, { useState, useEffect } from 'react';
import './style.css'

function Question({question, selected}) {
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState('');

    useEffect(()=>{
        const newOptions=randomizer([question.correct_answer, ...question.incorrect_answers]);
        setOptions(newOptions);
        showOptions()

        const timer = setTimeout(() => {
            setInput('Timeout called!');
          }, 10000);
          return () => clearTimeout(timer);
    },[])

    useEffect(()=>{
        selected(input)
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

    function changeQuestion(e){
        setInput(e.target.value);
    }

    function showOptions(){
        return options.map((option,i) =>{
            return( <label key={i}> {option}
                    <input type='radio' name='option' value={option} onChange={changeQuestion} />
                    </label>
            )
        });
    }

    return (
        
        <div className='question'>
            <h3>{question.question}</h3>
            <div className='options'>
                {options && showOptions()}
            </div>
        </div>
    );

}

export default Question;