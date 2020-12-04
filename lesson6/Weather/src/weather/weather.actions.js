import { getCitiesList } from './weather.gateway';

export const WEATHER_DATA = 'WEATHER_DATA';

const citiesListReceived = citiesList => {
    return {
        type: WEATHER_DATA,
        payload: {
            citiesList
        }
    }
}

export const getWeatherData = () => {
    return function(dispatch) {
        getCitiesList()
        .then(citiesList => {
            dispatch(citiesListReceived(citiesList));
        });
    }
};