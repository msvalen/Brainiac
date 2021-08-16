import axios from 'axios';

//bring in user input for difficulty and category
// export const fetchCategories = () => {
//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
//             console.log(data.results);
//             let newCategoryArray = data.results.map((data, i) => ({ id: i + 1, category: data.category}))
//             console.log(newCategoryArray);
//             dispatch ({
//                 type: 'UPDATE_CATEGORY',
//                 payload: newCategoryArray
//             })
//         } catch (err) {
//             dispatch ({
//                 type: 'SET_ERROR',
//                 payload: err
//             })
//         }
//     }
// }

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://opentdb.com/api_category.php')
            console.log(data);
        } catch (err) {
            dispatch ({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}