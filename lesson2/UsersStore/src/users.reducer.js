import { ADD, DELETE } from './users.actions';

export const userReducer = (state = { usersList: [] }, action) => {
    switch(action.type) {
        case ADD:
            return state.usersList.concat(action.user);
        case DELETE:
            return state.usersList.splice(action.userId, 1);
        default :
            return state.usersList;
    }
};