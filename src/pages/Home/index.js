import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../action';

const Home = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error)

    // const toSee = dispatch(fetchCategories());
    // console.log(toSee);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const handleAddUser = (e) => {
        e.preventDefault();
        //Monica's stuff
    }

    const handleGenQuiz = () => {
        e.preventDefault();
        // To do
    }

    return (
        <>
            <h1>Quiz Title</h1>
            <form id="inputParameters">
                <label htmlFor="topic"></label>
                <select name="topic" form="inputParameters" id="topic">
                    {/* {data.results.map((x,y) => <option key={y}>{x}</option>)} */}
                </select>
                <label htmlFor="difficulty"></label>
                <select name="difficulty" form="inputParameters" id="difficulty">
                    {/* {data.difficulty.map((x,y) => <option key={y}>{x}</option>)} */}
                </select>
                <button onClick={handleAddUser}>Add users</button>
                <button onClick={handleGenQuiz}>Generate Quiz</button>
            </form>
            <h2>By: Deborah, Monica & Scott</h2>
        </>
    )
}

export default Home;