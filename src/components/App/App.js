import React from 'react';

import SearchBar from '../../containers/SearchBar/SearchBar';
import WeatherList from '../../containers/WeatherList/WeatherList';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/app.css';

const App = () => (
  <div className="container mt5">
    <h1>Weather Map</h1>
    <SearchBar />
    <WeatherList />
  </div>
);

export default App;
