import { ADD, DELETE } from './users.actions';

export const userReducer = (state = { usersList: [] }, action) => {
    switch(action.type) {
        case ADD:
            return state.usersList.concat({});
        case DELETE:
            return state.usersList.splice(1, 1);
        default :
            return state.usersList;
    }
};