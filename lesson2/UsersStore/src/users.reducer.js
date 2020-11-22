import { ADD, DELETE } from './users.actions';

export const userReducer = (state = { usersList: [] }, action) => {
    switch(action.type) {
        case ADD:
            return {
                usersList: state.usersList.concat(action.user)
            };
        case DELETE:
            return {
                usersList: state.usersList.slice().splice(action.userId, 1)
            };
        default :
            return state;
    }
};