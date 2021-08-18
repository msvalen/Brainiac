import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const QuizSummary = () => {
    const scores = useSelector(state => state.scores);
    const category = useSelector(state => state.settings[0]);
    const difficulty = useSelector(state => state.settings[2])
    const [maxScore, setMaxScore] = useState(0);

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    

    return (
        <>
            <h3>{difficulty}</h3>
            <h3>{category}</h3>
            <div>
                <h1 className='local-score'>
                    Game over! Your score is:0.
                </h1>
            </div>
        </>
    )
}

export default QuizSummary;