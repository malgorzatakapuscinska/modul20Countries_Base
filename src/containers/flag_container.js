import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../presentational/flag_list_component';
import {getCountries, searchCountries, deleteCountry, setContinent} from '../actions/actions-countries';

class CountryFlagContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMOunt() {
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }

  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    console.log(this.props.visibleCountries);
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)}/>
        </div>
        <CountryFlagList countries={this.props.countries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
