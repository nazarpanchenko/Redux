import { NEXT, PREV } from './pagination.actions';

const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },
    {
        id: 'id-3',
        age: 45,
        name: 'Justin',
    },
    {
        id: 'id-4',
        age: 45,
        name: 'Franklin',
    },
    {
        id: 'id-5',
        age: 45,
        name: 'John',
    },
    {
        id: 'id-6',
        age: 45,
        name: 'Andrew',
    },
    {
        id: 'id-7',
        age: 45,
        name: 'Pol',
    },
    {
        id: 'id-8',
        age: 45,
        name: 'Ron',
    },
    {
        id: 'id-9',
        age: 45,
        name: 'Harry',
    },
    {
        id: 'id-10',
        age: 45,
        name: 'Anna',
    },
];

const initialState = {
    users: {
        usersList: users.slice(0, 3),
        currentPage: 0
    }
};

export const paginationReducer = (state = initialState, action) => {
    let startPos = 0, 
        endPos = 0;

    switch(action.type) {
        case NEXT:
            startPos += action.payload.itemsPerPage;
            endPos += action.payload.itemsPerPage;

            return {
                ...state,
                users: {
                    usersList: users.slice(startPos, endPos),
                    currentPage: state.users.currentPage + 1,
                }
            };

        case PREV:
            startPos -= action.payload.itemsPerPage;
            endPos -= action.payload.itemsPerPage;

            return {
                ...state,
                users: {
                    usersList: users.slice(startPos, endPos),
                    currentPage: state.usedsrs.currentPage - 1
                }
            };

        default:
            return state;
    }
};

export default paginationReducer;