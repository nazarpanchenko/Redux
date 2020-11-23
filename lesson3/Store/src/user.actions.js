export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/DELETE_USER';

export const setUser = user => {
    return {
        type: ADD_USER,
        payload: {
            user
        }
    };
};

export const removeUser = () => {
    return {
        type: DELETE_USER
    };
};