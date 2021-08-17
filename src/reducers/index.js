const initState = {
    categories: [],
    settings: [],
    loading: false
};

const mainReducer = (state=initState, action) => {
    switch(action.type) {
        case 'UPDATE_CATEGORY': 
            return({
                ...state,
                categories: action.payload,
                error: false
            });
        case 'UPDATE_SETTINGS':
            return ({
                ...state,
                settings: action.payload,
                error: false
            })
        case 'SET_ERROR': 
            return{...state, error : action.payload};
        default:
            return state;
    }
}

export default mainReducer;