import React, {Component} from 'react';
import {connect} from 'ract-redux';
import CountryFlagList from '../presentational/flag_list_component';
import {getCountries} from '../actions/aoctionsC-countries';

class CountryFlagContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMOunt() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries};
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries
  }
}

export default connect(mapStateToProps)(CountryFlagContainer);
