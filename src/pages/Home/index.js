import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCategories } from '../../action';
import { useHistory } from 'react-router-dom';

const Home = () => {
    // const [ difficulty, setDifficulty] = useState('Easy');
    // const [ category, setCategory ] = useState('Animals');

    const dispatch = useDispatch();
    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)
    const history = useHistory();

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

    const handleAddUser = (e) => {
        e.preventDefault();
        //Monica's stuff
    }

    const handleGenQuiz = () => {
        e.preventDefault();

        history.push('/:level/:category')
        // To do
    }

    return (
        <>
            <h1>Quiz Title</h1>
            <form id="inputParameters">
                <label htmlFor="topic"></label>
                <select name="topic" form="inputParameters" id="topic">
                    {data1 && data1.map((x,i) => <option key={i}>{x.category}</option>)}
                </select>
                <label htmlFor="difficulty"></label>
                <select name="difficulty" form="inputParameters" id="difficulty">
                    {/* <option value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>Easy</option> */}
                   <option value="Easy">Easy</option>
                   <option value="Medium">Medium</option>
                   <option value="Hard">Hard</option>
                </select>
                <button onClick={handleAddUser}>Add users</button>
                <button onClick={handleGenQuiz}>Generate Quiz</button>
            </form>
            <h2>By: Deborah, Monica & Scott</h2>
        </>
    )
}

export default Home;