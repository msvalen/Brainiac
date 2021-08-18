import axios from 'axios';

export const quizSettings = (...settings) => ({ type: 'UPDATE_SETTINGS', payload: settings })

export const localScores = (scores) => ({ type: 'UPDATE_LOCAL_SCORES', payload: scores })

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://opentdb.com/api_category.php')
            let newCategoryArray = data.trivia_categories.map((data, i) => ({id: i, category: data.name}))
            dispatch ({
                type: 'UPDATE_CATEGORY',
                payload: newCategoryArray
            })
        } catch (err) {
            dispatch ({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export const fetchQuestions = (category, level) => {
    return async (dispatch) => {
        dispatch({type:'LOADING', payload: true})
        try {
            const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`)
            console.log(data)
            if(data.results.length==0){ throw Error('Not enough questions in that category please pick a different one')}
            let newQuestionArray = data.results
            dispatch ({
                type: 'UPDATE_QUESTIONS',
                payload: newQuestionArray,
            })
        } catch (err) {
            
            console.warn(err.message)
            dispatch ({
                type: 'SET_ERROR',
                payload: err.message,
            })
            throw Error(err.message);
        }
    }
}