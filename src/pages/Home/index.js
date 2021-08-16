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

    const handleAddUser = () => {
        //Monica's stuff
    }

    const handleGenQuiz = () => {
        console.log(dispatch(fetchCategories()));
    }

    return (
        <>
            <h1>Quiz Title</h1>
            <select>
                {/* {data.results.map((x,y) => <option key={y}>{x}</option>)} */}
            </select>
            <select>
                {/* {data.difficulty.map((x,y) => <option key={y}>{x}</option>)} */}
            </select>
            <button onClick={handleAddUser}>Add users</button>
            <button onClick={handleGenQuiz}>Generate Quiz</button>
            <h2>By: Deborah, Monica & Scott</h2>
        </>
    )
}

export default Home;