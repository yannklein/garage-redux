import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from '../containers/cars_index';
import CarsNew from '../containers/cars_new';
import CarsShow from '../containers/cars_show';
import LeftMenu from '../components/left_menu';

export default class App extends React.Component {


  render() {
    const baseURL = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
    return (
      <Router basename={baseURL + "/"} history={history}>
        <div className="app">
          <LeftMenu />
          <Switch>
            <Route path={baseURL + "/"} exact component={CarsIndex} />
            <Route path={baseURL + "/car/new"} exact component={CarsNew} />
            <Route path={baseURL + "/car/:id"} component={CarsShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}
