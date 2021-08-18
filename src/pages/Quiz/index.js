import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Question } from '../../components';

const QuizPage = () =>{
    const [ allQuestions, setAllQuestions ] = useState([]);
    const [ actualQuestion, setActualQuestion ] = useState(0);
    const { level } = useParams();
    const quizData = useSelector(state => state.settings);
    const categoryData = useSelector(state => state.categories);

    useEffect(()=> {
        
        // in selected function will call back and set some local state. Use that state to save to global storage
        dispatch(localScores(scores));
    }, [/*This will be the changing question function dependency*/])


    useEffect(() => {
        async function fullDataSet() {
            try {
                const filteredCatObj = categoryData.filter(x => x.category == quizData[0])
                const categoryId = filteredCatObj[0].id;
                let { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${level}&type=multiple`)
                setAllQuestions(data);
            } catch (err) {
                console.log(err.message)
            }
        }
        fullDataSet()
        const stream = setInterval(fullDataSet, 1000000)
        return () => clearInterval(stream)
    }, [])

    useEffect(() => {
       
    }, [actualQuestion])

    const changeQuestion = (answer) => {
        if (allQuestions[actualQuestion].correct_answer == answer) {
            
            dispatch(localScores())
        } 
        setActualQuestion(prev => prev+1)
    }

    return (
        <>
            { allQuestions && <Question question={allQuestions[actualQuestion]} selected={changeQuestion} /> }
            {/* <h1>The Topic is: {quizData[0]}</h1>
            <h2>The users are: {quizData[1].map((x,i)=> <h3 key={i}>{x}</h3> )}</h2>
            <h2>The difficulty is: {quizData[2]}</h2>
            <p>{allQuestions && console.log(allQuestions)}</p> */}
        </>
    )
}

export default QuizPage;