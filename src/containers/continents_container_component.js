import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setContinent, deleteCountry} from '../actions/actions-countries';
import {CountryFlagList} from '../presentational/flag_list_component';

class ContinentsContainer extends Component{
  constructor(props){
    super(props);
  }

  chisooseContinent(){
    this.props.dispatch(setContinent(e.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  componentDidMount(){
    this.props.dispatch(setContinent('Europa'));
  }

  render(){
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value='Europa'>Europa</option>
          <option value='Afryka'>Afryka</option>
        </select>
        <CountryFlagList  countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = function(store){
  return {
  countries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(ContinentsContainer);
