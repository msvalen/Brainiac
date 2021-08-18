import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { fetchCategories, fetchQuestions,localScores } from '../../action';
import { Question } from '../../components';

const QuizPage = () =>{
    const dispatch = useDispatch();

    const [ actualQuestion, setActualQuestion ] = useState(0);
    const [toggle, setToggle] = useState(false)
    const { level } = useParams();
    const history = useHistory();
    const quizData = useSelector(state => state.settings);
    const categoryData = useSelector(state => state.categories);
    const questions = useSelector(state=> state.questions);
    const scores = useSelector(state=> state.scores);


    useEffect(() => {
        
        const filteredCatObj = categoryData.filter(x => x.category == quizData[0])
        const categoryId = filteredCatObj[0].id;
        dispatch(fetchQuestions(categoryId,level));
        let variable = quizData[1].map((x)=>{
            return(
                { 
                    name:x,
                    score:0
                }
            )
        });
        console.log(variable);
        dispatch(localScores(variable))
       
    }, [])
    

    const changeQuestion = (answer) => {
        console.log(answer);
        if (questions[actualQuestion].correct_answer == answer) {
            console.log(questions[actualQuestion].correct_answer)
            console.log(quizData[1][0]);
            // let index=scores[0].findIndex(x=>{
            //     console.log(x);
            //     return x.name==quizData[1][0]
            // })
            scores[0].score++
            console.log(scores);
            dispatch(localScores(scores))
        } 
        console.log(actualQuestion);
        if((actualQuestion+1)>=10){
            history.push('/scores/local');
        }
        else {
            setActualQuestion(prev => prev+1)
            setToggle(true)
        }
    }
    

    return (
        <>
            <button onClick={()=>setToggle(true)}>startQuizz</button>
            { toggle && <Question key={actualQuestion} question={questions[actualQuestion]} selected={changeQuestion} /> }
            {/* <h1>The Topic is: {quizData[0]}</h1>
            <h2>The users are: {quizData[1].map((x,i)=> <h3 key={i}>{x}</h3> )}</h2>
            <h2>The difficulty is: {quizData[2]}</h2>
            <p>{allQuestions && console.log(allQuestions)}</p> */}
        </>
    )
}

export default QuizPage;
/*****
 * [ ] allow to save and pick from multiple users
 * [ ] do a function that changes the the actual user to the next one 
 * 
 * 
 * 
 * 
 */