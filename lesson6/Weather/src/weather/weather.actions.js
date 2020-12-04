const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const WEATHER_DATA = 'WEATHER_DATA';

const citiesListReceived = citiesList => {
    return {
        type: WEATHER_DATA,
        payload: {
            citiesList
        }
    }
}

const getWeatherData = () => {
    return function(dispatch) {
        return fetch(baseUrl).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error();
        })
        .then(citiesList => {
            dispatch(citiesListReceived(citiesList));
        });
    }
};

export default getWeatherData;