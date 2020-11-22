export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = () => {
    return {
        type: ADD
    };
};

export const deleteUser = () => {
    return {
        type: DELETE
    };
};