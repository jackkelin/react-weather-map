import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import PropTypes from 'prop-types';

const average = array => array.reduce((a, c) =>  a + c) / array.length;

const WeatherChart = props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        Average: {Math.round(average(data))}{units}
      </div>
    </div>
  )
}

WeatherChart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  units: PropTypes.string,
}

export default WeatherChart;
