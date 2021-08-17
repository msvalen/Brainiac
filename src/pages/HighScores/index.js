import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../action';
import { useEffect } from 'react';


const HighScores = () => {
    const dispatch = useDispatch();
    const 

    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)

    useEffect(async () => {
        try {
            // console.log('here')
            // const { category } = 
            await dispatch(fetchCategories());
            // setData(category);
            // console.log(category);
        } catch (err) {
            console.log(err.message);
        }
    }, []);

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

            <table id="rankings" class="leaderboard-results" width="100%">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				<tr>
                    <td>1</td>
                    <td>deb</td>
                    <td>4</td>
                </tr>
			</tbody>
		</table>

        </>
    )
}

export default HighScores;