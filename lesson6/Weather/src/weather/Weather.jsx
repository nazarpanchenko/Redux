import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import getWeatherData from './weather.actions';

class Weather extends Component {
    componentDidMount() {
        this.props.getWeatherData();
    }

    render() {
        const { weatherData } = this.props;

        return (
            <main className="weather">
                <h1 className="weather__title">Weather data</h1>
                <ul className="cities-list">
                    {weatherData.map(city => (
                        <li key={city.id} className="city">
                            <span className="city__name">{city.name}</span>
                            <span className="city__temperature">{city.temperature} F</span>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

Weather.propTypes = {
    weatherData: PropTypes.array,
    getWeatherData: PropTypes.func.isRequired
};

const mapState = state => {
    return {
        weatherData: weatherDataSelector(state)
    };
};

const mapDispatch = {
    getWeatherData: getWeatherData
};

export default connect(mapState, mapDispatch)(Weather);