import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCategories, quizSettings } from '../../action';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../layout';

const Home = () => {
    // const [ difficulty, setDifficulty] = useState('Easy');
    // const [ category, setCategory ] = useState('Animals');
    const [modal, setModal]=useState(false);
    const [users, setUsers] = useState([]);

    const dispatch = useDispatch();
    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)
    const history = useHistory();


    useEffect(async () => {
        try {
            await dispatch(fetchCategories());
            console.log(dispatch(quizSettings()));
        } catch (err) {
            console.log(err.message);
        }
    }, []);

    const closeModal = () => {
        setModal(false);
    }
    const handleAddUser = (e) => {
        e.preventDefault();
        setModal(true)
    }

    const handleGenQuiz = (e) => {
        e.preventDefault();
        dispatch(quizSettings());
        console.log(form)
        // history.push('/:level/:category')
    }

    const saveUsers = (e) => {
        setUsers(e);
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
                   <option value="easy">Easy</option>
                   <option value="medium">Medium</option>
                   <option value="hard">Hard</option>
                </select>
                {(users)? <button onClick={handleAddUser}>Add users</button> : <p>{users}</p>}
                {modal && <Modal getResults={saveUsers} show={closeModal}/>}
                <button onClick={handleGenQuiz}>Generate Quiz</button>
            </form>
            <h2>By: Deborah, Monica & Scott</h2>
        </>
    )
}

export default Home;