import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import IndexPage from './components/IndexPage';
import DetailPage from './components/DetailPage';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={IndexPage}/>
            <Route  exact path="/detail/:id" component={DetailPage}/>
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
