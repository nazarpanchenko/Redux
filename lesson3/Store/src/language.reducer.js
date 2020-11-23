import { LANGUAGE } from './language.actions';

const initialValue = {
    language: 'en'
};

const languageReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LANGUAGE:
            return action.payload.language;

        default:
            return state;
    }
};

export default languageReducer;