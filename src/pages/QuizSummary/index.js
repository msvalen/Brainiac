import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from 'react-percent-bar';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './style.css'

const QuizSummary = () => {
    const scores = useSelector(state => state.scores);
    const category = useSelector(state => state.settings[0]);
    const difficulty = useSelector(state => state.settings[2])
    const history = useHistory();

    const [score, setScore] = useState('');

    useEffect(async () => {
        const sortScores = (a, b) => {
            return b.score - a.score
        }
    
        scores.sort(sortScores)
        setScore(scores);
        console.log('console logs are as follows')
        console.log(scores);
        console.log(category);
        console.log(difficulty)

        const postData = scores.map((t)=>({"username": t.name,"category": category,"difficulty": difficulty,"score": t.score}))
        
        //below works but what if we have more than 1 user? Also as we rotate users they won't be seeing 10 questions each!
        //without editing the server we could put all of this in an if statement or a do while loop based on the length of scores - very verbose ...

        try{
            await axios.post('https://brainiac-quiz.netlify.app/.netlify/functions/api',
            {
                "scores" : postData
            })
            } catch (err) {
                console.log('crap')
                console.log(err.message)
            }

        // try{
        // await axios.post('https://brainiac-quiz.netlify.app/.netlify/functions/api',
        // {
        //     "scores" : {
        //         "username": scores[0].name,
        //         "category": category,
        //         "difficulty": difficulty,
        //         "score": scores[0].score
        //     }
        // })
        // } catch (err) {
        //     console.log('crap')
        //     console.log(err.message)
        // }
    }, [])

    const renderRows = () => {
        if (score) 
        return score.map((s, i) => <tr key={i}><td>{i+1}</td><td>{s.name}</td><td><ProgressBar colorShift={true} fillColor="orange" percent={(s.score)*10} /></td><td>{s.score}</td></tr>)
      }

      const handleClick = (e) => {
        e.preventDefault();
        history.push('/scores')
      }

    return (
        <>
            <h3>{difficulty}</h3>
            <h3>{category}</h3>
            <table id="rankings" className="highscore-results" width="100%">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Progress bar</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores && renderRows()}
                </tbody>
		    </table>
            <button onClick={handleClick}>Check out global HighScores </button>
        </>
    )
}

export default QuizSummary;