import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountry} from '../actions/actions-countries';
import CountryDetails from '../presentational/country_details_component';

class CoumtryDetailsContainer extend Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getcountry(this.props.params.id));
  }

  render() {
    return (
      <CountryDetails country={this.props.selectedCountry} />;
    );
  }
}

const mapStateToProps = function(store){
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
