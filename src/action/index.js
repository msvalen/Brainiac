import axios from 'axios';

export const quizSettings = (...settings) => ({ type: 'UPDATE_SETTINGS', payload: settings })


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