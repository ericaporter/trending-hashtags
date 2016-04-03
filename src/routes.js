import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/body/landingpage';


const routes = (
<Route path="/" component={App}>
  <IndexRoute component={LandingPage} />
</Route>
);

export default routes;