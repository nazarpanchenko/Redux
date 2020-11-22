const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

const addUser = () => {
    return {
        type: ADD
    };
};

const deleteUser = () => {
    return {
        type: DELETE
    };
};