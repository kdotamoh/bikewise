import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global, css } from "@emotion/core";

import IndexPage from "./components/IndexPage";
import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/hoc/ScrollToTop"

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Global 
              styles={css`
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                html {
                  font-size: 62.5%;
                }
                body {
                  font-size: 16px;
                  font-size: 1.6rem;
                  font-family: "Inter Regular"
                }
              `}
            />
            <Header />
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
