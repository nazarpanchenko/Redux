import { ADD, DELETE } from './users.actions';

export const userReducer = (state = { usersList: [] }, action) => {
    switch(action.type) {
        case ADD:
            return {
                usersList: state.usersList.concat(action.user)
            };
        case DELETE:
            let index; 
            
            for (let i = 0; i < state.usersList.length; i++) {
                if (state.usersList[i].id === action.userId) index = i;
                break;
            }

            return {
                usersList: state.usersList.slice().splice(index, 1)
            };
        default :
            return state;
    }
};