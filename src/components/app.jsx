import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from '../containers/cars_index';
import CarsNew from '../containers/cars_new';
import CarsShow from '../containers/cars_show';
import LeftMenu from '../components/left_menu';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter basename='/' history={history}>
        <div className="app">
          <LeftMenu />
          <Switch>
            <Route path="/" exact component={CarsIndex} />
            <Route path="/car/new" exact component={CarsNew} />
            <Route path="/car/:id" component={CarsShow} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
