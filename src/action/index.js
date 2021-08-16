import axios from 'axios';

const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const { result } = await axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
            let newCategoryArray = result.category.map((category, i) => ({ id: i + 1, category: category}))
            dispatch({
                type: 'LOAD_CATEGORIES',
                payload: newCategoryArray
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export default fetchCategories;