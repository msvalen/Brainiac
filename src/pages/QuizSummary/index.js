import React from 'react';

const QuizSummary = () => {
    const [showScore, setShowScore] = useState();


    return (
        <div>
            <h1 className='final-score'>
                Game over! Your score is: {score}.
            </h1>
        </div>
    )
}

export default QuizSummary;