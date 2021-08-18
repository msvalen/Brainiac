import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCategories, fetchQuestions } from '../../action';
import { Question } from '../../components';

const QuizPage = () =>{
    const dispatch = useDispatch();
    
    const [ actualQuestion, setActualQuestion ] = useState(0);
    const [toggle, setToggle] = useState(false)
    const { level } = useParams();
    const quizData = useSelector(state => state.settings);
    const categoryData = useSelector(state => state.categories);
    const questions = useSelector(state=> state.questions)


    useEffect(() => {
        
        const filteredCatObj = categoryData.filter(x => x.category == quizData[0])
        const categoryId = filteredCatObj[0].id;
        dispatch(fetchQuestions(categoryId,level));
       
    }, [])

    useEffect(() => {

    }, [actualQuestion])

    const changeQuestion = (answer) => {
        console.log(answer);
        if (questions[actualQuestion].correct_answer == answer) {
            let index=scores.findIndex(x.username==quizData[1][0])
            scores[index].scores++
            dispatch(localScores(scores))
        } 
        setToggle(false)
        setActualQuestion(prev => prev+1)
        setToggle(true)
    }
    

    return (
        <>
            <button onClick={()=>setToggle(true)}>startQuizz</button>
            { toggle && <Question question={questions[actualQuestion]} selected={changeQuestion} /> }
            {/* <h1>The Topic is: {quizData[0]}</h1>
            <h2>The users are: {quizData[1].map((x,i)=> <h3 key={i}>{x}</h3> )}</h2>
            <h2>The difficulty is: {quizData[2]}</h2>
            <p>{allQuestions && console.log(allQuestions)}</p> */}
        </>
    )
}

export default QuizPage;