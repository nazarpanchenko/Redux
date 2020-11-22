export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = user => {
    return {
        type: ADD,
        user: user
    };
};

export const deleteUser = userId => {
    return {
        type: DELETE,
        userId: userId
    };
};