import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import L from 'react-loadable';

import Nav from '../Nav';

import { Wrap } from './styled';

const Loading = () => <div>loadng...</div>;

const Loadable = opts => L({
  ...opts,
  delay: 500,
  loading: Loading,
});

const Home = Loadable({ loader: () => import(/* webpackChunkName: "home" */ 'pages/Home') });
const Board = Loadable({ loader: () => import(/* webpackChunkName: "board" */ 'pages/Board/Controller') });
const Profile = Loadable({ loader: () => import(/* webpackChunkName: "profile" */ 'pages/Profile') });

const RouterComponent = () => {
  return (
    <Router>
      <Wrap>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Wrap>
    </Router>
  );
}

export default RouterComponent;
