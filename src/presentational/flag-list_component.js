import React from 'react';
import {Link} from 'react-router';
import CountryFlag  from './presentational/flag_component';

const CountryFlagList = (props) => (
  <div>
    {
      props.countries.map(country => {
        return (
          <div className='single-country' key={country.id}>
            <Link className='logo' to={'countries/country' + country.id}>
              <CountryFlag country={country} />
            </Link>
          </div>
        );
      });

    }
  </div>
);
export default CountryFlagList;
