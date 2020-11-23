import { ADD_USER, DELETE_USER } from './user.actions';

const cartReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.payload.user

        case DELETE_USER:
            return null;

        default:
            return state;
    }
};

export default cartReducer;