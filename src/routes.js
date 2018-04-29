import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation_component';
import Contact from './presentational/contact_component';
import Home from './presentational/home_component';
import NotFound from './presentational/not_found_component.js';
import {CountryFlagContainer} from './containers/flag_container';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />
    <Route paath='countries' component={CountryFlag Container} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={NotFound} />

  </Route>
);
