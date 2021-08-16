import React from 'react'
import { useParams } from 'react-router';

const QuizPage = () =>{
    const { level } = useParams();
    const { category } = useParams();

    return (
        <>

        </>
    )
}

export default QuizPage;