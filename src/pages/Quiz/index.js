import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { fetchQuestions, localScores, quizSettings } from '../../action';
import { Question } from '../../components';
import './style.css'

const QuizPage = () =>{
    const dispatch = useDispatch();

    const [ actualUser, setActualUser ] = useState(0);
    const [ actualQuestion, setActualQuestion ] = useState(0);
    const [ isFirstRun, setIsFirstRun ] = useState(true);

    const [ toggle, setToggle ] = useState(false)
    const { level } = useParams();
    const history = useHistory();
    const quizData = useSelector(state => state.settings);
    const categoryData = useSelector(state => state.categories);
    const questions = useSelector(state=> state.questions);
    const scores = useSelector(state=> state.scores);
 

    useEffect(() => {
        const filteredCatObj = categoryData.filter(x => x.category == quizData[0])
        const categoryId = filteredCatObj[0].id;
        let variable=[{name:'anonymous',score:0}]
        if(quizData[1].length>0){
            variable = quizData[1].map(x=>({name:x,score:0}))
        }
        else dispatch(quizSettings(quizData[0], ['anonymous'] , quizData[2]));
        dispatch(localScores(variable));
        dispatch(fetchQuestions(categoryId,level));
        setToggle(true);
    }, [])

    useEffect(()=>{
        if (isFirstRun) {
            setIsFirstRun(false);
            return;
          }
        else {

            setToggle(true);
        }
    },[toggle])

    

    const changeQuestion = (answer) => {
        if (questions[actualQuestion].correct_answer == answer) {
            let index = scores.findIndex(x=>quizData[1][actualUser]===x.name)
            scores[index].score++
            dispatch(localScores(scores))
        } 
        if((actualQuestion+1)>=10){
            history.push('/scores/local');
        }
        else {
            setNextUser();
            setActualQuestion(prev => prev+1)
            setToggle(true)
        }
    }
    const setNextUser = () => (actualUser+1==quizData[1].length)? setActualUser(0):setActualUser(prev => prev+1)

    return (
        <div className='quizContainer'> 
            { toggle && <h3 className='showUser'>{quizData[1][actualUser]}</h3>}
            { toggle && <Question key={actualQuestion} question={questions[actualQuestion]} selected={changeQuestion} /> }
        </div>
    )
}

export default QuizPage;