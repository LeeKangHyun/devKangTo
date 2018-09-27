import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import L from 'react-loadable';

import Nav from '../Nav';

import { Wrap } from './styled';

const Loading = () => <span />;

const Loadable = opts => L({
  ...opts,
  delay: 500,
  loading: Loading,
});

const Home = Loadable({ loader: () => import(/* webpackChunkName: "home" */ '#/pages/Home') });
const Board = Loadable({ loader: () => import(/* webpackChunkName: "board" */ '#/pages/Board') });
const Profile = Loadable({ loader: () => import(/* webpackChunkName: "profile" */ '#/pages/Profile') });
const Pet  = Loadable({ loader: () => import(/* webpackChunkName: "pet" */ '#/pages/Pet') });

const RouterComponent = () => {
  return (
    <Router>
      <Wrap>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/profile" component={Profile} />
          <Route path="/pet" component={Pet} />
        </Switch>
      </Wrap>
    </Router>
  );
}

export default RouterComponent;
