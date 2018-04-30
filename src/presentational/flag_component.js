import React from 'react';

const CountryFlag = (props) => (
  <div className='country-logo-wrapper'>
    <img className='country-logo' src={props.country.imageUrl} alt='Country photo' />
  </div>
);

export default CountryFlag;
