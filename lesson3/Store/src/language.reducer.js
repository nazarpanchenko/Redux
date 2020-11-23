import { LANGUAGE } from './language.actions';

// const initialState = {
//     language: 'en'
// };

const languageReducer = (state = 'en', action) => {
    switch (action.type) {
        case LANGUAGE:
            // return {
            //     ...state,
            //     language: action.payload.language
            // };
            return action.payload.language;

        default:
            return state;
    }
};

export default languageReducer;