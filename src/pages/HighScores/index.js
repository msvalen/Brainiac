import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../action';
import { useState, useEffect } from 'react';
import axios from 'axios';


const HighScores = () => {
    const [score, setScore] = useState();
    const dispatch = useDispatch();

    
    useEffect(async () => {
        try {
            await dispatch(fetchCategories());
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    
    useEffect(async () => {
        try {
            let { data } = await axios.get('https://brainiac-quiz.netlify.app/.netlify/functions/api')
            setScore(data.scores)
        } catch(err) {
            console.log(err.message)
        }
    }, [])
    
    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)
    
    const renderRows = () => {
        return score.map((s, i ) => <tr key={i}><td>{i+1}</td><td>{s.username}</td><td>progress bar</td><td>{s.score}</td></tr>)
      }


    return (
        <>
            <div>
                <h1>High Scores!</h1>
            </div>
            
            <form id="inputParameters">
            <label htmlFor="topic"></label>
            <select name="topic" form="inputParameters" id="topic">
                {data1 && data1.map((x,i) => <option key={i}>{x.category}</option>)}
            </select>
            <label htmlFor="difficulty"></label>
            <select name="difficulty" form="inputParameters" id="difficulty">
                {/* <option value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>Easy</option> */}
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            </form>

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
                {score && renderRows()}
			</tbody>
		</table>

        </>
    )
}

export default HighScores;