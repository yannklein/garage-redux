import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from '../containers/cars_index';
import CarsNew from '../containers/cars_new';
import CarsShow from '../containers/cars_show';
import LeftMenu from '../components/left_menu';

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <LeftMenu />
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} exact component={CarsIndex} />
            <Route path={process.env.PUBLIC_URL + "/car/new"} exact component={CarsNew} />
            <Route path={process.env.PUBLIC_URL + "/car/:id"} component={CarsShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}
