import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation_component';
import Contact from './presentational/contact_component';
import Home from './presentational/home_component';
import NotFound from './presentational/not_found_component.js';
import {CountryFlagContainer} from './containers/flag_container';
import {CountryDetailsContainer} from './containers/country_detail_container_component';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />
    <Route path='countries' >
        <IndexRoute component={CountryFlagContainer}/>
        <Route path='country/:id' component={CountryDetailsContainer}/>
    </Route>
    <Route path='contact' component={Contact} />
    <Route path='*' component={NotFound} />

  </Route>
);
