import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './home/Home';
import Loading from './Loading/Loading';

const AsyncDynamicPAge = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage/DynamicPage'),
    {
      LoadingComponent: Loading
    }
  );
  const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ './DynamicPage/NoMatch'),
    {
      LoadingComponent: Loading
    }
  );
  

const App = () => {
    AsyncDynamicPAge.preload();
    AsyncNoMatch.preload()
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route exact path="/re" component={AsyncNoMatch} />
          <Redirect from="*" to="/re" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;