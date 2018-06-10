import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    const { fetchWeather } = this.props;
    event.preventDefault();
    // fetch searchTerm
    fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="row">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          placeholder="Search for a city"
          className="nine columns"
        />
        <button
          onSubmit={this.onFormSubmit} 
          className="three columns button button-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
SearchBar.propTypes = {
  fetchWeather: PropTypes.func,
};

// by passing in null, this container does not need to access state in redux
export default connect(null, mapDispatchToProps)(SearchBar);
