import { ADD_USER, DELETE_USER } from './user.actions';

const initialState = {
    user: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case DELETE_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export default cartReducer;