import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories} from '../../action';
import axios from 'axios';
import './style.css';


const HighScores = () => {
    const [score, setScore] = useState();
    const [ category, setCategory ] = useState('');
    const [ difficulty, setDifficulty ] = useState('')
    const [allScores, setAllScores] = useState();
    
    const dispatch = useDispatch();
    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)

    useEffect(async () => {
        try {
            await dispatch(fetchCategories());
            let { data } = await axios.get('https://brainiac-quiz.netlify.app/.netlify/functions/api')
            setAllScores(data.scores)
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    
    const sortScores = (a, b) => {
        return b.score - a.score
    }

    useEffect(() => {
        async function getScores() {
            try {
                const filteredScoresData = await allScores.filter(d => d.category == category && d.difficulty == difficulty)
                filteredScoresData.sort(sortScores)
                setScore(filteredScoresData)
            } catch(err) {
                console.log(err.message)
            }
        } 
        getScores()
    }, [category, difficulty])

    const renderRows = () => {
        return score.map((s, i ) => <tr key={i}><td>{i+1}</td><td>{s.username}</td><td value="star"></td><td>{s.score}</td></tr>)
      }

    return (
        <>
            <div>
                <h1>High Scores!</h1>
            </div>
            
            <form id="inputParameters">
                <div className="custom-select">
                <label htmlFor="topic"></label>
                <select name="topic" form="inputParameters" id="topic" onChange={(e) => setCategory(e.target.value)}>
                    {data1 && data1.map((x,i) => <option key={i}>{x.category}</option>)}
                </select>
                <label htmlFor="difficulty"></label>
                <select name="difficulty" form="inputParameters" id="difficulty" onChange={(e)=> setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                </div>
            </form>

            <table id="rankings" className="table-style" width="100%">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>Rewards</th>
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