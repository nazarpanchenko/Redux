import { WEATHER_DATA } from './weather.actions';

const initialData = {
   weatherData: []
};

const weatherReducer = (state = initialData, action) => {
    switch (action.type) {
        case WEATHER_DATA: {
            return {
                ...state,
                weatherData: action.payload.citiesList
            }
        }
        default:
            return state;
    }
};

export default weatherReducer;