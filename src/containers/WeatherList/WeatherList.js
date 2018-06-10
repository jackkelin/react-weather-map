import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import kelvinToFahrenheit from '../../utilities/kelvinToFahrenheit';
import WeatherChart from '../WeatherChart/WeatherChart';

class WeatherList extends Component {
  renderWeather(cityData, key) {
    const list = cityData.list;
    const tempArray = list.map(weather =>
      kelvinToFahrenheit(weather.main.temp)
    );
    const pressureArray = list.map(weather => weather.main.pressure);
    const humidityArray = list.map(weather => weather.main.humidity);
    return (
      <tr key={key}>
        <td>{cityData.city.name}</td>
        <td>
          <WeatherChart data={tempArray} color="#FF41B4" units="F" />
        </td>
        <td>
          <WeatherChart data={pressureArray} color="#357EDD" units="hPA" />
        </td>
        <td>
          <WeatherChart data={humidityArray} color="#FF4136" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    const weather = this.props.weather;
    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody> {weather.map(this.renderWeather)} </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

WeatherList.propTypes = {
  weather: PropTypes.array,
};

export default connect(mapStateToProps)(WeatherList);
