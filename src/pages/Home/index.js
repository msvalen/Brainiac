import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCategories, fetchQuestions, quizSettings } from '../../action';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../layout';
import './style.css'

const Home = () => {

    const [ category, setCategory ] = useState('General Knowledge');
    const [ modal, setModal ]=useState(false);
    const [ users, setUsers ] = useState([]);
    const [ difficulty, setDifficulty ] = useState('easy');

    const dispatch = useDispatch();
    const data1 = useSelector(state => state.categories);
    const error = useSelector(state => state.error)
    const history = useHistory();
    const quizData = useSelector(state => state.settings)

    useEffect(async () => {
        try {
            await dispatch(fetchCategories());
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    useEffect(()=>{
        console.log(users)
    },[users])

    
    const handleAddUser = (e) => {
        e.preventDefault();
        setModal(true)
    }

    const handleGenQuiz = async (e) => {
        e.preventDefault();
        dispatch(quizSettings(category, users , difficulty));
        console.log((quizSettings(category, users , difficulty)));
        const filteredCatObj = data1.filter(x => x.category == category)
        const categoryId = filteredCatObj[0].id;
        try{
            await dispatch(fetchQuestions(categoryId,difficulty));
            await history.push(`/${difficulty}/${category}`);
        }catch(err){
           console.log(err)
        }
        
    }
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/scores')
    }

    const saveUsers = (e) => setUsers(e.filter(Boolean))
    const closeModal = () => setModal(false)

    return (
        <div className="home">
            <h1 className="title" aria-label="title">The Quiz for Brainiac's</h1>
            <form id="inputParameters" aria-label="quizSettingsForm">
                <label htmlFor="topic"></label>
                <select name="topic" form="inputParameters" id="topic" onChange={(e) => setCategory(e.target.value)}>
                    { data1 && data1.map((x,i) => <option key={i}>{x.category}</option>) }
                </select>
                <label htmlFor="difficulty"></label>
                <select name="difficulty" form="inputParameters" id="difficulty" onChange={(e)=> setDifficulty(e.target.value)}>
                   <option value='easy'>Easy</option>
                   <option value='medium'>Medium</option>
                   <option value='hard'>Hard</option>
                </select>
                { (users.length === 0)? <button className="buttons"onClick={handleAddUser} aria-label="Add-User-Page">Add users</button> : <p>{users.map((x,i) => <span key={i}>{x} </span>)}</p> }
                { modal && <Modal getResults={saveUsers} show={closeModal}/> }
                <button className="buttons"onClick={handleGenQuiz}>Generate Quiz</button>
                <button onClick={handleClick}>Check out global HighScores </button>
            </form>
            {error && <p>{error}</p>}
            <h2>By: Deborah, Monica & Scott</h2>
        </div>
    )
}

export default Home;