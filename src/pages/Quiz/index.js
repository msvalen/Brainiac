import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const QuizPage = () =>{
    // const { level } = useParams();
    // const { category } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(quizSettings()))
    },[])

    return (
        <>

        </>
    )
}

export default QuizPage;