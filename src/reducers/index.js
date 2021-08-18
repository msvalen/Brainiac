const initState = {
    categories: [],
    settings: [],
    scores: [],
    loading: false
};

const mainReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOADING':
            return { ...state, loading: action.payload };
        case 'UPDATE_CATEGORY': 
            return({
                ...state,
                categories: action.payload,
                error: false,
                loading: false
            });
        case 'UPDATE_SETTINGS':
            return ({
                ...state,
                settings: action.payload,
                error: false,
                loading: false
            })
        case 'UPDATE_LOCAL_SCORES':
            return ({
                ...state,
                scores: action.payload,
                error: false,
                loading: false
            })
        case 'UPDATE_QUESTIONS':
            return({
                ...state,
                questions:action.payload,
                error: false,
                loading: false
            })
        case 'SET_ERROR': 
            return{...state, error : action.payload};
        default:
            return state;
    }
}

export default mainReducer;